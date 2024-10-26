import nodemailer from "nodemailer";
import { emailTemplateHtml } from "@/app/_lib/email-template-html";
import { sanitize } from "isomorphic-dompurify";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { honey, name, email, message } = req.body;

  if (honey) {
    return res.status(400).json({ message: "Invalid form submission" });
  }

  try {
    const sanitizedData = {
      name: sanitize(name),
      email: sanitize(email),
      message: sanitize(message),
    };

    const emailHtmlContent = emailTemplateHtml(sanitizedData);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_SEND_TO,
      subject: "Website form submission - Adopt a Swimmer",
      replyTo: email,
      html: emailHtmlContent,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
}
