import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const {
      studentFirstName,
      studentLastName,
      age,
      grade,
      dateOfBirth,
      school,
      fatherFirstName,
      fatherLastName,
      fatherPhone,
      motherFirstName,
      motherLastName,
      motherPhone,
      country,
      addressLine1,
      addressLine2,
      city,
      province,
      postalCode,
      email,
      allergies,
      hasIEP,
      iepCopyWilling,
      hasPsychoEd,
      psychoEdCopyWilling,
      medications,
      handedness,
      strengths,
      growthAreas,
      hopes,
      goals,
      referral,
    } = body

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; color: #1a2a3a;">
        <div style="background-color: #469e94; padding: 24px 32px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Student Registration</h1>
          <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0;">A new family has registered on Reading Resolved</p>
        </div>
        
        <div style="border: 1px solid #e5e0d8; border-top: none; border-radius: 0 0 12px 12px; padding: 32px;">
          
          <h2 style="color: #469e94; font-size: 18px; border-bottom: 2px solid #469e94; padding-bottom: 8px;">Student Information</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr><td style="padding: 8px 0; color: #666; width: 180px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${studentFirstName} ${studentLastName}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Age</td><td style="padding: 8px 0;">${age}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Grade</td><td style="padding: 8px 0;">${grade}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Date of Birth</td><td style="padding: 8px 0;">${dateOfBirth || "Not provided"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">School</td><td style="padding: 8px 0;">${school}</td></tr>
          </table>

          <h2 style="color: #469e94; font-size: 18px; border-bottom: 2px solid #469e94; padding-bottom: 8px;">Parent / Guardian Information</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr><td style="padding: 8px 0; color: #666; width: 180px;">Father</td><td style="padding: 8px 0; font-weight: 600;">${fatherFirstName} ${fatherLastName}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Father's Phone</td><td style="padding: 8px 0;">${fatherPhone}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Mother</td><td style="padding: 8px 0; font-weight: 600;">${motherFirstName} ${motherLastName}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Mother's Phone</td><td style="padding: 8px 0;">${motherPhone}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #469e94;">${email}</a></td></tr>
          </table>

          <h2 style="color: #469e94; font-size: 18px; border-bottom: 2px solid #469e94; padding-bottom: 8px;">Address</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr><td style="padding: 8px 0; color: #666; width: 180px;">Address</td><td style="padding: 8px 0;">${addressLine1}${addressLine2 ? ", " + addressLine2 : ""}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">City</td><td style="padding: 8px 0;">${city}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Province</td><td style="padding: 8px 0;">${province}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Postal Code</td><td style="padding: 8px 0;">${postalCode}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Country</td><td style="padding: 8px 0;">${country}</td></tr>
          </table>

          <h2 style="color: #469e94; font-size: 18px; border-bottom: 2px solid #469e94; padding-bottom: 8px;">Health & Learning Profile</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr><td style="padding: 8px 0; color: #666; width: 180px;">Allergies</td><td style="padding: 8px 0;">${allergies || "None reported"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Has IEP</td><td style="padding: 8px 0;">${hasIEP || "Not specified"}</td></tr>
            ${hasIEP === "yes" ? `<tr><td style="padding: 8px 0; color: #666;">Willing to share IEP</td><td style="padding: 8px 0;">${iepCopyWilling || "Not specified"}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; color: #666;">Psycho-Ed Evaluation</td><td style="padding: 8px 0;">${hasPsychoEd || "Not specified"}</td></tr>
            ${hasPsychoEd === "yes" ? `<tr><td style="padding: 8px 0; color: #666;">Willing to share evaluation</td><td style="padding: 8px 0;">${psychoEdCopyWilling || "Not specified"}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; color: #666;">Medications</td><td style="padding: 8px 0;">${medications || "Not specified"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Handedness</td><td style="padding: 8px 0;">${handedness || "Not specified"}</td></tr>
          </table>

          <h2 style="color: #469e94; font-size: 18px; border-bottom: 2px solid #469e94; padding-bottom: 8px;">About the Child</h2>
          
          <div style="margin-bottom: 16px;">
            <p style="color: #666; margin: 0 0 4px; font-size: 14px;">Strengths & what makes them unique</p>
            <div style="background: #f5f3ef; padding: 12px 16px; border-radius: 8px; line-height: 1.6;">${strengths}</div>
          </div>

          <div style="margin-bottom: 16px;">
            <p style="color: #666; margin: 0 0 4px; font-size: 14px;">Areas for growth & support</p>
            <div style="background: #f5f3ef; padding: 12px 16px; border-radius: 8px; line-height: 1.6;">${growthAreas}</div>
          </div>

          <div style="margin-bottom: 16px;">
            <p style="color: #666; margin: 0 0 4px; font-size: 14px;">What a breakthrough would look like</p>
            <div style="background: #f5f3ef; padding: 12px 16px; border-radius: 8px; line-height: 1.6;">${hopes}</div>
          </div>

          <div style="margin-bottom: 16px;">
            <p style="color: #666; margin: 0 0 4px; font-size: 14px;">Goals from tutoring</p>
            <div style="background: #f5f3ef; padding: 12px 16px; border-radius: 8px; line-height: 1.6;">${goals}</div>
          </div>

          ${referral ? `
          <div style="margin-bottom: 16px;">
            <p style="color: #666; margin: 0 0 4px; font-size: 14px;">How they heard about us</p>
            <div style="background: #f5f3ef; padding: 12px 16px; border-radius: 8px;">${referral}</div>
          </div>
          ` : ""}

          <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #e5e0d8; text-align: center; color: #999; font-size: 13px;">
            Submitted from readingresolved.com
          </div>
        </div>
      </div>
    `

    if (!process.env.RESEND_API_KEY) {
      console.error("[v0] RESEND_API_KEY is not set")
      return NextResponse.json(
        { error: "Email service not configured. Please add RESEND_API_KEY." },
        { status: 500 }
      )
    }

    console.log("[v0] Sending registration email for:", studentFirstName, studentLastName)
    console.log("[v0] Reply-to email:", email)

    const { data, error } = await resend.emails.send({
      from: "Reading Resolved <onboarding@resend.dev>",
      to: "readingresolved@gmail.com",
      subject: `New Student Registration: ${studentFirstName} ${studentLastName}`,
      html: htmlContent,
      replyTo: email,
    })

    if (error) {
      console.error("[v0] Resend error:", JSON.stringify(error))
      return NextResponse.json(
        { error: `Failed to send: ${error.message || "Unknown Resend error"}` },
        { status: 500 }
      )
    }

    console.log("[v0] Email sent successfully. ID:", data?.id)
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("[v0] Registration API error:", err instanceof Error ? err.message : err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Something went wrong." },
      { status: 500 }
    )
  }
}
