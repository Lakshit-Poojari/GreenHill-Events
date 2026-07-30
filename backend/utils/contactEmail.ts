import nodemailer from "nodemailer";
import { CreateContactType } from "../types/contactType";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // true for port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail(contactEmail: CreateContactType) {
  try {
    await transporter.sendMail({
      from: `"Green Hill Events" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Enquiry</h2>

        <table cellpadding="8" cellspacing="0" border="1" style="border-collapse: collapse;">
          <tr>
            <td><strong>Name</strong></td>
            <td>${contactEmail.name}</td>
          </tr>
          <tr>
            <td><strong>Email</strong></td>
            <td>${contactEmail.email}</td>
          </tr>
          <tr>
            <td><strong>Phone</strong></td>
            <td>${contactEmail.phone || "Not Provided"}</td>
          </tr>
          <tr>
            <td><strong>Message</strong></td>
            <td>${contactEmail.message}</td>
          </tr>
        </table>
      `,
      
    });
    return true;
  } catch (error) {
    console.error("Send Contact Email Error:", error);
    throw error;
  }
}
