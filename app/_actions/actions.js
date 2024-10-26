"use server";

import data from "@/app/_data/general-data.json";
import nodemailer from "nodemailer";
import { emailTemplateHtml } from "@/app/_lib/email-template-html";

export async function sendEmail(formData) {
  const honey = formData.get("honey");

  try {
    if (honey === null) {
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      const emailHtmlContent = emailTemplateHtml({
        name,
        email,
        message,
      });

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
    } else {
      console.error("Invalid form submission due to non-empty honeypot field");
    }
  } catch (error) {
    console.error(error);
  }
}

const {
  contactPage: { email, phone },
} = data;

export const showEmailAddress = async () => {
  return email;
};

export const showPhoneNumber = async () => {
  return phone;
};
