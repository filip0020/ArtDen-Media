const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    // creează transporter Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // emailul tău Gmail
        pass: process.env.EMAIL_PASS, // parola de aplicație Gmail
      },
    });

    // trimite email
    await transporter.sendMail({
      from: `"Portofoliu Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // primești mesajul pe emailul tău
      subject: "Mesaj nou de pe site",
      text: `
        Nume: ${name}
        Email: ${email}
        Mesaj: ${message}
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
