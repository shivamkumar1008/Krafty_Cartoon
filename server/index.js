import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : ''
    }
});

// Verify transporter connection
transporter.verify((error, success) => {
    if (error) {
        console.error('Error connecting to email service:', error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

// Contact Route
app.post('/api/contact', async (req, res) => {
    console.log('Received contact request:', req.body);
    const { name, phone, email, message } = req.body;

    const mailOptions = {
        from: email, // Sender address (from the form)
        to: process.env.EMAIL_USER, // Your email address
        subject: `New Contact Form Submission from ${name}`,
        text: `
            Name: ${name}
            Phone: ${phone}
            Email: ${email}
            Message: ${message}
        `,
        html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
