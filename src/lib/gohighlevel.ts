type GHLContactPayload = {
  name: string;
  email: string;
  phone: string;
  bookingType: "consultation" | "treatment";
  treatment: string | null;
  referenceId: string;
  locale: string;
  date: string;
  time: string;
};

type GHLUpsertResult = {
  configured: boolean;
  success: boolean;
  contactId: string | null;
};

export async function upsertGHLContact(
  payload: GHLContactPayload
): Promise<GHLUpsertResult> {
  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!apiKey || !locationId) {
    console.log("[GHL_SKIP] Missing GHL_API_KEY or GHL_LOCATION_ID", {
      referenceId: payload.referenceId
    });
    return {configured: false, success: false, contactId: null};
  }

  const nameParts = payload.name.trim().split(/\s+/);
  const firstName = nameParts[0] ?? "";
  const lastName = nameParts.slice(1).join(" ") || undefined;

  const tags = ["website-booking", payload.bookingType, payload.locale];
  if (payload.treatment) tags.push(payload.treatment);

  const body = {
    locationId,
    firstName,
    ...(lastName && {lastName}),
    email: payload.email,
    phone: payload.phone,
    tags,
    source: "fatfreezing.ae"
  };

  try {
    const response = await fetch(
      "https://services.leadconnectorhq.com/contacts/upsert",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Version: "2021-07-28",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    );

    if (!response.ok) {
      const text = await response.text();
      console.log("[GHL_API_ERROR]", response.status, text, {
        referenceId: payload.referenceId
      });
      return {configured: true, success: false, contactId: null};
    }

    const data = (await response.json()) as {contact?: {id?: string}};
    const contactId = data.contact?.id ?? null;

    console.log("[GHL_UPSERT_OK]", {
      referenceId: payload.referenceId,
      contactId
    });

    return {configured: true, success: true, contactId};
  } catch (error) {
    console.log("[GHL_NETWORK_ERROR]", error, {
      referenceId: payload.referenceId
    });
    return {configured: true, success: false, contactId: null};
  }
}
