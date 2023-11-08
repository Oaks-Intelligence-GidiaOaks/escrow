import nodemailer from "nodemailer";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/send-email", (req, res) => {
  const { name, email, subject, message } = req.body;

  var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ecd9ced4b1a7a4",
      pass: "57ef3562c960a4",
    },
  });

  // Define the email content
  const mailOptions = {
    from: "easycorper@gmail.com",
    to: "easycorper@gmail.com",
    subject: "New Message from Escrow Tech",
    text: `
    Hello,
    
    You have received a new message from the Escrow Tech website:
    
    Sender's Name: ${name}
    Sender's Email: ${email}
    Subject: ${subject}
    Message: ${message}
    
    Please respond promptly.
    
    Best regards,
    Escrow Tech Team
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
