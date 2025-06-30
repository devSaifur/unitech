import type { APIRoute } from 'astro'

import { sendDiscordMessage } from '../../lib/discord'
import {
  object,
  string,
  email,
  pipe,
  parse,
  minLength,
  maxLength
} from 'valibot'

const contactSchema = object({
  name: pipe(string(), minLength(1), maxLength(100)),
  email: pipe(string(), email()),
  phone: string(),
  details: string()
})

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData()
    const body = Object.fromEntries(data)

    const validData = parse(contactSchema, body)

    await sendDiscordMessage(validData)
    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ success: false }), { status: 500 })
  }
}
