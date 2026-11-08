// Save this file as api/ask.js: make a folder named api in the root folder of
// your repo, and put this file in it. Vercel runs every file in api/ on its
// server, so your page can call this one at /api/ask.

// Vercel Node.js functions use the (req, res) handler signature.
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: "The server is missing its OpenRouter API configuration."
    });
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: "Request body must be valid JSON." });
    }
  }

  const prompt = typeof body?.prompt === "string" ? body.prompt.trim() : "";
  if (!prompt) {
    return res.status(400).json({ error: "Please enter a question." });
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        // The course key works with this model only.
        model: "deepseek/deepseek-v4.1-flash-1017",
        max_output_tokens: 1000,
        reasoning: { effort: "none" },
        instructions: "You are a recipe assistant. Always answer in exactly three short bullet points.",
        input: prompt
      })
    });

    let data;
    try {
      data = await response.json();
    } catch {
      return res.status(502).json({
        error: "OpenRouter returned an unreadable response."
      });
    }

    if (!response.ok) {
      // Avoid forwarding provider payloads, which could contain sensitive data.
      return res.status(502).json({
        error: `OpenRouter request failed (HTTP ${response.status}).`
      });
    }

    return res.status(200).json(data);
  } catch {
    return res.status(502).json({ error: "Could not reach OpenRouter." });
  }
}