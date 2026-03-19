import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { firstName, lastName, email, phone, subject, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const fullName = `${firstName || ""} ${lastName || ""}`.trim()

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; color: #1a2a3a;">
        <div style="background-color: #469e94; padding: 24px 32px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0;">A visitor has sent a message via readingresolved.com</p>
        </div>

        <div style="border: 1px solid #e5e0d8; border-top: none; border-radius: 0 0 12px 12px; padding: 32px;">
          <h2 style="color: #469e94; font-size: 18px; border-bottom: 2px solid #469e94; padding-bottom: 8px;">Contact Details</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr><td style="padding: 8px 0; color: #666; width: 160px;">Full Name</td><td style="padding: 8px 0; font-weight: 600;">${fullName}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #469e94;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0;">${phone || "Not provided"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Subject</td><td style="padding: 8px 0;">${subject || "Not provided"}</td></tr>
          </table>

          <h2 style="color: #469e94; font-size: 18px; border-bottom: 2px solid #469e94; padding-bottom: 8px;">Message</h2>
          <div style="background: #f5f3ef; padding: 16px 20px; border-radius: 8px; line-height: 1.7; white-space: pre-wrap;">${message}</div>

          <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #e5e0d8; text-align: center; color: #999; font-size: 13px;">
            Submitted from readingresolved.com/contact
          </div>
        </div>
      </div>
    `

    if (!process.env.RESEND_API_KEY) {
      console.error("[contact] RESEND_API_KEY is not set")
      return NextResponse.json(
        { error: "Email service not configured. Please add RESEND_API_KEY." },
        { status: 500 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: "Reading Resolved <onboarding@resend.dev>",
      to: "readingresolved@gmail.com",
      subject: `Contact Form: ${subject || "New message"} — ${fullName}`,
      html: htmlContent,
      replyTo: email,
    })

    if (error) {
      return NextResponse.json(
        { error: error.message || "Failed to send email" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Something went wrong." },
      { status: 500 }
    )
  }
}