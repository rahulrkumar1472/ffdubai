import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import {locales} from "@/lib/i18n";
import {VALID_TIME_SLOTS} from "@/lib/time-slots";
import {sendBookingEmails} from "@/lib/email";
import {saveFallbackBooking} from "@/lib/booking-store";

type BookingPayload = {
  locale: string;
  bookingType: "consultation" | "treatment";
  treatment?: string | null;
  area?: string | null;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
};

function isValidEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

function isValidDate(value: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function generateReferenceId() {
  const stamp = Date.now().toString(36).toUpperCase();
  const token = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `FF-${stamp}-${token}`;
}

function toDubaiNow() {
  const local = new Date().toLocaleString("en-US", {timeZone: "Asia/Dubai"});
  return new Date(local);
}

function parseDubaiDateTime(date: string, time: string) {
  return new Date(`${date}T${time}:00+04:00`);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<BookingPayload>;

    const locale = body.locale ?? "";
    const bookingType = body.bookingType ?? "consultation";
    const treatment = body.treatment?.trim() || null;
    const area = body.area?.trim() || null;
    const name = body.name?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const date = body.date?.trim() ?? "";
    const time = body.time?.trim() ?? "";

    if (!name || !phone || !email || !date || !time) {
      return NextResponse.json({ok: false, message: "Missing required fields."}, {status: 400});
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ok: false, message: "Invalid email."}, {status: 400});
    }

    if (!isValidDate(date)) {
      return NextResponse.json({ok: false, message: "Invalid date format."}, {status: 400});
    }

    if (!VALID_TIME_SLOTS.includes(time)) {
      return NextResponse.json({ok: false, message: "Invalid time slot."}, {status: 400});
    }

    if (!locales.includes(locale as "en" | "ar")) {
      return NextResponse.json({ok: false, message: "Invalid locale."}, {status: 400});
    }

    if (bookingType !== "consultation" && bookingType !== "treatment") {
      return NextResponse.json({ok: false, message: "Invalid booking type."}, {status: 400});
    }

    if (bookingType === "treatment" && !treatment) {
      return NextResponse.json({ok: false, message: "Missing treatment selection."}, {status: 400});
    }

    const slotDate = parseDubaiDateTime(date, time);
    const nowDubai = toDubaiNow();

    if (Number.isNaN(slotDate.getTime()) || slotDate <= nowDubai) {
      return NextResponse.json({ok: false, message: "Please select a future slot."}, {status: 400});
    }

    const referenceId = generateReferenceId();
    const durationMinutes = 60;

    let persistedId = "";
    let storageMode: "database" | "fallback" = "database";

    try {
      const booking = await prisma.booking.create({
        data: {
          referenceId,
          locale,
          bookingType,
          treatment,
          area,
          name,
          phone,
          email,
          date,
          time,
          durationMinutes
        }
      });

      persistedId = booking.id;
    } catch (error) {
      console.log("[BOOKING_DB_FALLBACK]", error);
      storageMode = "fallback";

      const fallback = saveFallbackBooking({
        referenceId,
        locale: locale as "en" | "ar",
        bookingType,
        treatment,
        area,
        name,
        phone,
        email,
        date,
        time,
        durationMinutes
      });

      persistedId = fallback.id;
    }

    const emailStatus = await sendBookingEmails({
      locale: locale as "en" | "ar",
      referenceId,
      bookingType,
      treatment,
      area,
      name,
      phone,
      email,
      date,
      time,
      durationMinutes
    });

    return NextResponse.json({
      ok: true,
      bookingId: persistedId,
      referenceId,
      storageMode,
      emailConfigured: emailStatus.configured,
      customerEmailSent: emailStatus.customerSent,
      adminEmailSent: emailStatus.adminSent
    });
  } catch (error) {
    console.error("BOOKING_API_ERROR", error);
    return NextResponse.json({ok: false, message: "Server error."}, {status: 500});
  }
}
