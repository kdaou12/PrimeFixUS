import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    
    // Email content
    const emailContent = `
New Service Request from PrimeFix US Website

Customer Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Company: ${formData.company || 'Not provided'}

Service Details:
- Service Type: ${formData.serviceType}
- Urgency Level: ${formData.urgency}
- Location: ${formData.location}

Description:
${formData.description}

Submitted at: ${new Date().toLocaleString()}
    `

    // In a real application, you would use an email service like:
    // - Resend
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES
    
    // For now, we'll simulate the email sending
    console.log('Email would be sent with content:', emailContent)
    
    // Here's how you would implement with Resend (recommended):
    /*
    import { Resend } from 'resend'
    
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    await resend.emails.send({
      from: 'noreply@primefixus.com',
      to: 'your-email@example.com', // Replace with your actual email
      subject: `New Service Request - ${formData.firstName} ${formData.lastName}`,
      text: emailContent,
    })
    */

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing service request:', error)
    return NextResponse.json(
      { error: 'Failed to submit service request' },
      { status: 500 }
    )
  }
}
