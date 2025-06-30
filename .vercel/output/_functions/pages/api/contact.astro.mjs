import { WebhookClient } from 'discord.js';
import { g as getEnv$1, s as setOnSetGetEnv } from '../../chunks/runtime_1tkDUGik.mjs';
import { object, string, pipe, email, minLength, maxLength, parse } from 'valibot';
export { renderers } from '../../renderers.mjs';

/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-check

// @ts-expect-error
/** @returns {string} */
// used while generating the virtual module
// biome-ignore lint/correctness/noUnusedFunctionParameters: `key` is used by the generated code
// biome-ignore lint/correctness/noUnusedVariables: `key` is used by the generated code
const getEnv = (key) => {
	return getEnv$1(key);
};

const getSecret = (key) => {
	return getEnv(key);
};

setOnSetGetEnv(() => {
	
});

const sendDiscordMessage = async (message) => {
  const webhook = new WebhookClient({
    url: getSecret("DISCORD_WEBHOOK_URL") || ""
  });
  const { name, email, phone, details: msg } = message;
  try {
    await webhook.send(
      `**Name:** ${name}
**Email:** ${email}
**Phone:** ${phone}
**Message:** ${msg}`
    );
  } catch (err) {
    console.error("Error sending message to Discord:", err);
  }
};

const contactSchema = object({
  name: pipe(string(), minLength(1), maxLength(100)),
  email: pipe(string(), email()),
  phone: string(),
  details: string()
});
const POST = async ({ request }) => {
  try {
    const data = await request.formData();
    const body = Object.fromEntries(data);
    const validData = parse(contactSchema, body);
    await sendDiscordMessage(validData);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
