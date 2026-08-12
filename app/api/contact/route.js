import { Resend } from "resend";

// Where contact messages are delivered. Override with CONTACT_TO_EMAIL.
const TO = process.env.CONTACT_TO_EMAIL || "saurowankhade@gmail.com";
// Resend's shared sender works out of the box in test mode. Swap for a
// verified domain sender (e.g. "Dragonfly <hello@dragonfly.dev>") in prod.
const FROM = process.env.CONTACT_FROM_EMAIL || "Dragonfly <onboarding@resend.dev>";

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const message = (data.message || "").trim();

  if (!name || !isEmail(email) || message.length < 5) {
    return Response.json(
      { error: "Please add your name, a valid email and a short message." },
      { status: 422 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: "Email is not configured yet. Set RESEND_API_KEY to enable it." },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `Dragonfly contact from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      return Response.json({ error: "Could not send. Try again." }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Something went wrong. Try again." }, { status: 500 });
  }
}
