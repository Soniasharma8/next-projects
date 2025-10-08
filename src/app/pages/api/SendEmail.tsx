import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Configure transporter
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Gmail SMTP
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // tumhara email
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    try {
      await transporter.sendMail({
        from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER, // tumhe email milega
        subject: `New Message from ${name}`,
        html: `
          <h3>Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
