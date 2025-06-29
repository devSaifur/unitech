import { WebhookClient } from 'discord.js'
import { getSecret } from 'astro:env/server'

interface DiscordMessage {
  name: string
  email: string
  phone: string
  details: string
}

export const sendDiscordMessage = async (message: DiscordMessage) => {
  const webhook = new WebhookClient({
    url: getSecret('DISCORD_WEBHOOK_URL') || ''
  })

  const { name, email, phone, details: msg } = message
  try {
    await webhook.send(
      `**Name:** ${name}\n**Email:** ${email}\n**Phone:** ${phone}\n**Message:** ${msg}`
    )
  } catch (err) {
    console.error('Error sending message to Discord:', err)
  }
}
