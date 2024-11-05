"use server";

import data from "@/app/_data/general-data.json";
import nodemailer from "nodemailer";
import { emailTemplateHtml } from "@/app/_lib/email-template-html";
import express from "express";
import rateLimit from "express-rate-limit";

import { sanitize } from "isomorphic-dompurify";

const app = express();

const formLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
});

app.use("/sendEmail", formLimiter);

export async function sendEmail(formData) {
  const honey = formData.get("honey");

  console.log("SMPT_HOST", process.env.SMTP_HOST);
  console.log("SMPT_PORT", process.env.SMTP_PORT);
  console.log("SMPT_USER", process.env.SMTP_USER);
  console.log("SMPT_PASS", process.env.SMTP_PASS);
  console.log("SMPT_SEND_TO", process.env.SMTP_SEND_TO);

  try {
    if (honey === null) {
      const name = sanitize(formData.get("name"));
      const email = sanitize(formData.get("email"));
      const message = sanitize(formData.get("message"));

      const emailHtmlContent = emailTemplateHtml({
        name,
        email,
        message,
      });

      console.log("emailHtmlContent", emailHtmlContent);

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
