import nodemailer from "nodemailer";

export async function POST(req: any) {
  const { name, email, phone, purpose} = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 3000,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Website Contact" <${email}>`,
    to: process.env.GMAIL_USER,
    subject: `New Contact from ${name}`,
    replyTo: email,
    html: `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Contact Submission</title>
      </head>
      <body style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color: #111;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
        <p><strong>Message:</strong></p>
        <div>${escapeHtml(purpose).replace(/\n/g, '<br>')}</div>
        <hr />
        <p><small>This message was sent from your portfolio contact form.</small></p>
      </body>
    </html>`,
  });

  return Response.json({ success: true });
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
