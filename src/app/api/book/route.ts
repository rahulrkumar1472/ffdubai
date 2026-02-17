import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import {locales} from "@/lib/i18n";
import {VALID_TIME_SLOTS} from "@/lib/time-slots";
import {sendBookingEmail} from "@/lib/email";

type BookingPayload = {
  locale: string;
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

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<BookingPayload>;

    const locale = body.locale ?? "";
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

    const booking = await prisma.booking.create({
      data: {
        locale,
        name,
        phone,
        email,
        date,
        time
      }
    });

    await sendBookingEmail({
      to: email,
      locale: locale as "en" | "ar",
      name,
      date,
      time
    });

    return NextResponse.json({ok: true, bookingId: booking.id});
  } catch (error) {
    console.error("BOOKING_API_ERROR", error);
    return NextResponse.json({ok: false, message: "Server error."}, {status: 500});
  }
}
