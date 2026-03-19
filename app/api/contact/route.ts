import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, subject, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Send an email notification
    // 2. Store in a database
    // 3. Integrate with a CRM
    
    // For now, we'll log the submission and return success
    console.log("Contact form submission:", {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    )
  }
}
