import { NextResponse } from "next/server";
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, message, honeypot } = await req.json();

    if (honeypot) {
      console.warn("Spam detected — request blocked.");
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
