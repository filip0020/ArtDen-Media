import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(express.json());

const EMAIL_USER = "taiyo7930@gmail.com";
const EMAIL_PASS = "lonm dqoe pqxc spvz";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }
});

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: EMAIL_USER,
      subject: "Mesaj nou de pe site",
      text: message,
      html: `
        <p><b>Nume:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mesaj:</b> ${message}</p>
      `
    });

    res.status(200).json({ success: true, message: "Email trimis cu succes!" });
  } catch (error) {
    console.error("Eroare la trimitere:", error);
    res.status(500).json({ success: false, message: "Eroare la trimiterea emailului" });
  }
});

// Pornim serverul
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server pornit pe http://localhost:${PORT}`));
