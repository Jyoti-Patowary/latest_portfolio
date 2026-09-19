
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, last_name, company, email, phone, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json({ message: 'Email and message are required' }, { status: 400 });
    }

    const emailUser = process.env.EMAIL_USER || 'jyotipatowary9@gmail.com';
    const emailPass = process.env.EMAIL_PASS;

    if (!emailPass) {
      console.error('EMAIL_PASS is missing in environment variables');
      return NextResponse.json({ message: 'Email service is not configured on the server.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const senderName = [name, last_name].filter(Boolean).join(' ') || 'Portfolio Visitor';

    const mailOptions = {
      from: `"Portfolio Contact" <${emailUser}>`,
      replyTo: email,
      to: emailUser,
      subject: `New Portfolio Inquiry from ${senderName}`,
      text: `
New Message from Jyoti Patowary's Portfolio:

Name: ${senderName}
Email: ${email}
Company: ${company || 'Not provided'}
Phone: ${phone || 'Not provided'}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111; max-width: 600px; padding: 20px; border: 1px solid #e4e4e7; border-radius: 8px;">
          <h2 style="color: #ff3358; margin-top: 0;">New Portfolio Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 100px; color: #555;">Name:</td>
              <td style="padding: 8px 0; color: #111;">${senderName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Company:</td>
              <td style="padding: 8px 0; color: #111;">${company || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 8px 0; color: #111;">${phone || 'Not provided'}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 20px 0;" />
          <h3 style="color: #333; margin-bottom: 8px;">Message:</h3>
          <div style="background: #f4f4f5; padding: 16px; border-radius: 6px; white-space: pre-wrap; font-size: 15px; color: #27272a;">${message}</div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ 
      message: error.code === 'EAUTH' 
        ? 'Email authentication failed. Please verify your Google App Password.' 
        : 'Failed to send email. Please email directly.' 
    }, { status: 500 });
  }
}

