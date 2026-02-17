export async function sendBookingEmail({
  to,
  locale,
  name,
  date,
  time
}: {
  to: string;
  locale: "en" | "ar";
  name: string;
  date: string;
  time: string;
}) {
  const subject = locale === "ar" ? "تأكيد حجز الاستشارة" : "Consultation Booking Confirmation";
  const text =
    locale === "ar"
      ? `مرحبًا ${name}،\n\nتم استلام طلب الحجز الخاص بك بتاريخ ${date} الساعة ${time}.\n\nفريق FAT FREEZING`
      : `Hi ${name},\n\nYour consultation booking has been received for ${date} at ${time}.\n\nFAT FREEZING Team`;

  const from = process.env.MAIL_FROM || "bookings@fatfreezing.ae";
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log("[EMAIL_FALLBACK]", {to, subject, text});
    return {sent: false, mode: "console" as const};
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        text
      })
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.log("[EMAIL_ERROR_FALLBACK]", {status: response.status, errorBody, to, subject, text});
      return {sent: false, mode: "error_fallback" as const};
    }

    return {sent: true, mode: "resend_api" as const};
  } catch (error) {
    console.log("[EMAIL_ERROR_FALLBACK]", {error, to, subject, text});
    return {sent: false, mode: "error_fallback" as const};
  }
}
