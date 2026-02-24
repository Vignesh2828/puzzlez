import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Current timestamp
        const timestamp = new Date().toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        });

        /* 1️⃣ Email to ADMIN (Professional Notification) */
        await transporter.sendMail({
            from: `"Puzzlez Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `📩 New Contact: ${subject || "Website Inquiry"}`,
            html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>New Inquiry - Puzzlez</title>
<style>
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;background:#f5f7fb;margin:0;padding:20px}
.container{max-width:600px;margin:auto;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.05)}
.header{background:linear-gradient(135deg,#0f172a,#1e293b);color:#fff;padding:32px;text-align:center}
.header h1{margin:0;font-size:22px;font-weight:600}
.sub{opacity:.8;font-size:13px;margin-top:6px}
.content{padding:30px}
.card{background:#f8fafc;border-radius:10px;padding:16px;margin-bottom:18px;border-left:4px solid #3b82f6}
.label{font-size:12px;color:#64748b;text-transform:uppercase;font-weight:600;margin-bottom:4px}
.value{font-size:15px;color:#0f172a}
.message-box{background:#eef2ff;padding:20px;border-radius:10px;margin-top:20px}
.footer{background:#f1f5f9;padding:18px;text-align:center;font-size:12px;color:#64748b}
.btn{display:inline-block;margin-top:20px;padding:10px 22px;background:#3b82f6;color:#fff;text-decoration:none;border-radius:6px;font-size:14px}
</style>
</head>
<body>
<div class="container">
  <div class="header">
    <h1>🚀 New Website Inquiry</h1>
    <div class="sub">Puzzlez - Digital Product Studio</div>
  </div>

  <div class="content">

    <div class="card">
      <div class="label">Client Name</div>
      <div class="value">${name}</div>
    </div>

    <div class="card">
      <div class="label">Email</div>
      <div class="value">
        <a href="mailto:${email}" style="color:#3b82f6;text-decoration:none">${email}</a>
      </div>
    </div>

    ${subject ? `
    <div class="card">
      <div class="label">Subject</div>
      <div class="value">${subject}</div>
    </div>` : ``}

    <div class="message-box">
      <div class="label">Project Message</div>
      <div class="value">${message.replace(/\n/g, "<br/>")}</div>
    </div>

    <div style="text-align:center">
      <a href="mailto:${email}" class="btn">Reply to Client</a>
    </div>

  </div>

  <div class="footer">
    This message was submitted from the Puzzlez website contact form.
  </div>
</div>
</body>
</html>
`,
        });

        /* 2️⃣ Auto-reply to CUSTOMER (Professional Template) */
        await transporter.sendMail({
            from: `"Puzzlez" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Thank you for contacting Puzzlez!`,
            html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Thank You - Puzzlez</title>
<style>
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;background:#f5f7fb;margin:0;padding:0}
.container{max-width:600px;margin:auto;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.05)}
.header{background:linear-gradient(135deg,#3b82f6,#6366f1);color:#fff;padding:40px;text-align:center}
.header h1{margin:0;font-size:26px}
.content{padding:35px}
.message-box{background:#f1f5ff;border-left:4px solid #6366f1;padding:20px;border-radius:10px;margin:25px 0}
.next{background:#f8fafc;padding:20px;border-radius:10px;margin-top:20px}
.footer{background:#f1f5f9;padding:25px;text-align:center;font-size:13px;color:#64748b}
.btn{display:inline-block;margin-top:25px;padding:12px 26px;background:#3b82f6;color:#fff;text-decoration:none;border-radius:6px;font-size:14px}
</style>
</head>
<body>
<div class="container">

  <div class="header">
    <h1>Thank You, ${name}! 🎉</h1>
    <p>We’ve received your inquiry at Puzzlez.</p>
  </div>

  <div class="content">

    <p>
      We appreciate you reaching out to <strong>Puzzlez</strong>.
      Our team builds scalable web applications, mobile apps, and SaaS platforms —
      and we’re excited to explore your idea.
    </p>

    <div class="message-box">
      <strong>Your Message:</strong><br/><br/>
      ${message.replace(/\n/g, "<br/>")}
    </div>

    <div class="next">
      <strong>What happens next?</strong>
      <ul>
        <li>Our team reviews your requirement</li>
        <li>We analyze scope & feasibility</li>
        <li>You’ll receive a detailed response within 24–48 hours</li>
      </ul>
    </div>

    <div style="text-align:center">
      <a href="https://puzzlez.in" class="btn">Visit Our Website</a>
    </div>

    <p style="margin-top:35px">
      — Team Puzzlez<br/>
      <strong>We Transform Ideas into Scalable Digital Products.</strong>
    </p>

  </div>

  <div class="footer">
    © ${new Date().getFullYear()} Puzzlez. All rights reserved.<br/>
    This is an automated confirmation email.
  </div>

</div>
</body>
</html>
`,
        });

        return NextResponse.json({
            success: true,
            message: "Email sent successfully"
        });
    } catch (error) {
        console.error("Email error:", error);
        return NextResponse.json(
            {
                error: "Failed to send email",
                details: error instanceof Error ? error.message : "Unknown error"
            },
            { status: 500 }
        );
    }
}