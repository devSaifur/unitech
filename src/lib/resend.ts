import { getSecret } from 'astro:env/server'
import { Resend } from 'resend'

interface EmailContent {
  name: string
  email: string
  phone: string
  details: string
}

export const sendEmail = async (emailContent: EmailContent) => {
  const resend = new Resend(getSecret('RESEND_API_KEY') || '')

  const { name, email, phone, details: msg } = emailContent

  const { error } = await resend.emails.send({
    from: `Contact Form ${email}>`,
    to: [`${email}`],
    subject: `New contact form submission from ${name}`,
    html: `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Details:</strong> ${msg}</p>
    `
  })

  if (error) {
    console.error('Error sending email:', error)
    throw new Error('Failed to send email')
  }
}
