import { Autosend } from "autosendjs";

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = (data.email || "").trim().toLowerCase();
  if (!isEmail(email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 422 });
  }

  if (!process.env.AUTOSEND_API_KEY) {
    return Response.json(
      { error: "Subscriptions are not configured yet. Set AUTOSEND_API_KEY to enable them." },
      { status: 503 }
    );
  }

  try {
    const client = new Autosend(process.env.AUTOSEND_API_KEY);
    const result = await client.contacts.upsert({
      email,
      contactProperties: { source: "dragonfly-changelog" },
    });

    // The SDK returns { success: false, error } for API-level failures.
    if (result && result.success === false) {
      return Response.json({ error: "Could not subscribe. Try again." }, { status: 502 });
    }

    // Optionally add the contact to a list if one is configured.
    const listId = process.env.AUTOSEND_CONTACT_LIST_ID;
    if (listId) {
      await fetch(
        `${process.env.AUTOSEND_BASE_URL || "https://api.autosend.com/v1/"}contact-lists/contacts/bulk-add`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.AUTOSEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ contactListId: listId, emails: [email] }),
        }
      ).catch(() => {});
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Something went wrong. Try again." }, { status: 500 });
  }
}
