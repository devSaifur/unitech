import { WebhookClient } from 'discord.js';
import { object, string, pipe, email, minLength, maxLength, parse } from 'valibot';
export { renderers } from '../../renderers.mjs';

const sendDiscordMessage = async (message) => {
  const webhook = new WebhookClient({
    url: process.env.DISCORD_WEBHOOK_URL
  });
  const { name, email, phone, details: msg } = message;
  await webhook.send(
    `**Name:** ${name}
**Email:** ${email}
**Phone:** ${phone}
**Message:** ${msg}`
  );
};

const prerender = false;
const contactSchema = object({
  name: pipe(string(), minLength(2), maxLength(50)),
  email: pipe(string(), email()),
  phone: string(),
  details: string()
});
const POST = async ({ request }) => {
  const data = await request.formData();
  const body = Object.fromEntries(data);
  const validData = parse(contactSchema, body);
  try {
    await sendDiscordMessage(validData);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
