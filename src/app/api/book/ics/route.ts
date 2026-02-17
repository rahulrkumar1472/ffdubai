import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import {getFallbackBooking} from "@/lib/booking-store";

function formatIcsDate(value: Date) {
  return value.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function escapeIcsText(value: string) {
  return value.replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/\n/g, "\\n");
}

function toUtcDate(date: string, time: string) {
  return new Date(`${date}T${time}:00+04:00`);
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const referenceId = url.searchParams.get("ref")?.trim() ?? "";

  if (!referenceId) {
    return NextResponse.json({ok: false, message: "Missing reference."}, {status: 400});
  }

  let booking:
    | {
        referenceId: string;
        name: string;
        date: string;
        time: string;
        durationMinutes: number;
      }
    | null = null;

  try {
    const record = await prisma.booking.findUnique({
      where: {referenceId},
      select: {
        referenceId: true,
        name: true,
        date: true,
        time: true,
        durationMinutes: true
      }
    });

    booking = record;
  } catch {
    booking = null;
  }

  if (!booking) {
    const fallback = getFallbackBooking(referenceId);
    if (fallback) {
      booking = {
        referenceId: fallback.referenceId,
        name: fallback.name,
        date: fallback.date,
        time: fallback.time,
        durationMinutes: fallback.durationMinutes
      };
    }
  }

  if (!booking) {
    return NextResponse.json({ok: false, message: "Booking not found."}, {status: 404});
  }

  const start = toUtcDate(booking.date, booking.time);
  const end = new Date(start.getTime() + booking.durationMinutes * 60_000);

  const content = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//FAT FREEZING//Booking//EN",
    "BEGIN:VEVENT",
    `UID:${booking.referenceId}@fatfreezing.ae`,
    `DTSTAMP:${formatIcsDate(new Date())}`,
    `DTSTART:${formatIcsDate(start)}`,
    `DTEND:${formatIcsDate(end)}`,
    `SUMMARY:${escapeIcsText("FAT FREEZING Appointment")}`,
    `DESCRIPTION:${escapeIcsText(`Booking Ref: ${booking.referenceId} | Patient: ${booking.name}`)}`,
    `LOCATION:${escapeIcsText("Jumeira St - Jumeirah - Jumeirah 1 - Dubai - United Arab Emirates")}`,
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="fatfreezing-${booking.referenceId}.ics"`
    }
  });
}
