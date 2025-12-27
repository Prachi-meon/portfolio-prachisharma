import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, purpose } = await request.json();

    // Validate required fields
    if (!name || !email || !purpose) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const contactTo = process.env.CONTACT_EMAIL || 'prachisharma.meon@gmail.com';

    const htmlBody = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${purpose.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>This message was sent from your portfolio contact form.</small></p>
      `;

    

    // Fallback to SMTP (nodemailer)
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.error('SMTP credentials not configured and RESEND_API_KEY not set');
      return NextResponse.json(
        { error: 'Email service is not configured on the server' },
        { status: 500 }
      );
    }

    // Create transporter (configure secure based on port)
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Verify transporter configuration before attempting to send
    try {
      await transporter.verify();
    } catch (verifyErr) {
      console.error('SMTP transporter verify failed:', verifyErr);
      return NextResponse.json(
        { error: 'Unable to connect to email server. Check SMTP configuration.' },
        { status: 502 }
      );
    }

    // Email content for SMTP
    const mailOptions = {
      from: smtpUser,
      to: contactTo,
      subject: `New Contact Form Submission from ${name}`,
      html: htmlBody,
    };

    // Send email via SMTP
    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json(
        { message: 'Message sent successfully' },
        { status: 200 }
      );
    } catch (sendErr) {
      console.error('Failed to send contact email via SMTP:', sendErr);
      return NextResponse.json(
        { error: 'Failed to send message via email provider' },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    if (error instanceof Error && error.stack) console.error(error.stack);
    const isProd = process.env.NODE_ENV === 'production';
    return NextResponse.json(
      { error: isProd ? 'Server error processing contact request' : (error instanceof Error ? error.message : String(error)) },
      { status: 500 }
    );
  }
}
