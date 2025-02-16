// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: Request) {
  const { name, email, message }: ContactFormData = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Short Trip Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    return NextResponse.json({ success: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
