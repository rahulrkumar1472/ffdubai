import type {Locale} from "@/lib/i18n";

type BookingEmailPayload = {
  locale: Locale;
  referenceId: string;
  bookingType: "consultation" | "treatment";
  treatment: string | null;
  packageId: string | null;
  area: string | null;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  durationMinutes: number;
};

async function sendResendEmail({
  apiKey,
  from,
  to,
  subject,
  text
}: {
  apiKey: string;
  from: string;
  to: string;
  subject: string;
  text: string;
}) {
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
    const body = await response.text();
    throw new Error(`Resend error ${response.status}: ${body}`);
  }
}

function buildCustomerCopy(payload: BookingEmailPayload) {
  if (payload.locale === "ar") {
    return {
      subject: `تأكيد حجزك - ${payload.referenceId}`,
      text: `مرحباً ${payload.name}،\n\nتم استلام حجزك بنجاح.\n\nالمرجع: ${payload.referenceId}\nالنوع: ${payload.bookingType === "consultation" ? "استشارة مجانية" : "جلسة علاج"}\nالعلاج: ${payload.treatment ?? "يحدد أثناء الاستشارة"}\nالباقة: ${payload.packageId ?? "تحدد أثناء الاستشارة"}\nالتاريخ: ${payload.date}\nالوقت: ${payload.time}\nالمدة: ${payload.durationMinutes} دقيقة\n\nسنقوم بتأكيد الموعد معك قريباً.\n\nFAT FREEZING`
    };
  }

  return {
    subject: `Booking Confirmation - ${payload.referenceId}`,
    text: `Hi ${payload.name},\n\nYour booking request has been received.\n\nReference: ${payload.referenceId}\nType: ${payload.bookingType === "consultation" ? "Free Consultation" : "Treatment Booking"}\nTreatment: ${payload.treatment ?? "To be confirmed during consultation"}\nPackage: ${payload.packageId ?? "To be confirmed during consultation"}\nDate: ${payload.date}\nTime: ${payload.time}\nDuration: ${payload.durationMinutes} minutes\n\nOur clinic team will contact you shortly.\n\nFAT FREEZING`
  };
}

function buildAdminCopy(payload: BookingEmailPayload) {
  const modeLabel = payload.bookingType === "consultation" ? "Free Consultation" : "Treatment Booking";

  return {
    subject: `New Booking ${payload.referenceId}`,
    text: `New booking submitted\n\nReference: ${payload.referenceId}\nLocale: ${payload.locale}\nMode: ${modeLabel}\nTreatment: ${payload.treatment ?? "N/A"}\nPackage: ${payload.packageId ?? "N/A"}\nArea: ${payload.area ?? "N/A"}\nName: ${payload.name}\nPhone: ${payload.phone}\nEmail: ${payload.email}\nDate: ${payload.date}\nTime: ${payload.time}\nDuration: ${payload.durationMinutes} minutes`
  };
}

export async function sendBookingEmails(payload: BookingEmailPayload) {
  const from = process.env.MAIL_FROM || "bookings@fatfreezing.ae";
  const apiKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_BOOKINGS_EMAIL;

  const customer = buildCustomerCopy(payload);
  const admin = buildAdminCopy(payload);

  if (!apiKey) {
    console.log("[EMAIL_FALLBACK] Missing RESEND_API_KEY", {
      customerTo: payload.email,
      adminTo: adminEmail,
      customer,
      admin
    });

    return {
      configured: false,
      customerSent: false,
      adminSent: false
    };
  }

  let customerSent = false;
  let adminSent = false;

  try {
    await sendResendEmail({apiKey, from, to: payload.email, subject: customer.subject, text: customer.text});
    customerSent = true;
  } catch (error) {
    console.log("[EMAIL_CUSTOMER_ERROR]", error);
  }

  if (adminEmail) {
    try {
      await sendResendEmail({apiKey, from, to: adminEmail, subject: admin.subject, text: admin.text});
      adminSent = true;
    } catch (error) {
      console.log("[EMAIL_ADMIN_ERROR]", error);
    }
  } else {
    console.log("[EMAIL_ADMIN_WARNING] Missing ADMIN_BOOKINGS_EMAIL", {referenceId: payload.referenceId});
  }

  return {
    configured: true,
    customerSent,
    adminSent
  };
}
