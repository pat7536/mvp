// /api/chat.js
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  try {
    const { prompt, model = "gpt-4o-mini" } = req.body || {};
    if (!prompt) return res.status(400).json({ error: "Missing prompt" });

    const rsp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model,
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7
      }),
    });

    const data = await rsp.json();
    if (!rsp.ok) return res.status(rsp.status).json(data);
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ error: String(e) });
  }
}
