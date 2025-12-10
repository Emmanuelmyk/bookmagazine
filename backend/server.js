import express from "express";
import axios from "axios";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs";
import path from "path";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// PAYSTACK VERIFY & SEND BOOK
app.post("/api/payment/verify", async (req, res) => {
  const { reference } = req.body;

  if (!reference) {
    return res.status(400).json({ error: "Payment reference is required" });
  }

  try {
    // 1️⃣ VERIFY PAYMENT
    const verifyUrl = `https://api.paystack.co/transaction/verify/${reference}`;

    const response = await axios.get(verifyUrl, {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    });

    const data = response.data;

    if (data.status !== true || data.data.status !== "success") {
      return res.json({ status: false, message: "Payment not successful" });
    }

    const customerEmail = data.data.customer.email;
    const customerName = data.data.metadata.name;
    const bookTitle = data.data.metadata.book_title;

    // 2️⃣ ATTACH PDF
    const pdfPath = path.join(process.cwd(), "book.pdf");

    if (!fs.existsSync(pdfPath)) {
      return res.status(500).json({ error: "Book file not found on server" });
    }

    // 3️⃣ SEND EMAIL WITH ATTACHMENT
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `${process.env.SENDER_NAME} <${process.env.EMAIL_USER}>`,
      to: customerEmail,
      subject: `${bookTitle} — Purchase Successful`,
      html: `
        <h2>Hello ${customerName},</h2>
        <p>Thank you for your purchase! Your book is attached below.</p>
        <p>We appreciate your support.</p>
        <br/>
        <strong>Restored Woman Team</strong>
      `,
      attachments: [
        {
          filename: "RestoredWomanMagazine.pdf",
          path: pdfPath,
          contentType: "application/pdf",
        },
      ],
    });

    // 4️⃣ RESPONSE
    res.json({
      status: true,
      message: "Payment verified & email sent successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      error: "An error occurred verifying payment or sending email",
    });
  }
});

// SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
