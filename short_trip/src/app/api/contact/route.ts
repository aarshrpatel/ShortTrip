import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,  // your Gmail address
      pass: process.env.GMAIL_PASS,  // your App Password
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.ADMIN_EMAIL, // Admin's email address
    subject: `New Contact Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email", error);
    return NextResponse.json(
      { success: false, error: "Error sending email" },
      { status: 500 }
    );
  }
}
