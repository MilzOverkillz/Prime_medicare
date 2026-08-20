export async function callAI(prompt: string): Promise<string> {
  const maxRetries = 5;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-120b",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 2048,
      }),
    });

    if (res.status === 429) {
      const errorBody = await res.json();
      const match = errorBody.error?.message?.match(/try again in ([\d.]+)s/);
      const waitSeconds = match ? parseFloat(match[1]) + 1 : 15;
      console.log(`Rate limited. Waiting ${waitSeconds.toFixed(1)}s before retry ${attempt}/${maxRetries}...`);
      await new Promise((resolve) => setTimeout(resolve, waitSeconds * 1000));
      continue;
    }

    if (!res.ok) {
      throw new Error(`Groq API error: ${res.status} ${await res.text()}`);
    }

    const data = await res.json();
    return data.choices[0].message.content;
  }

  throw new Error("Groq API: max retries exceeded due to rate limiting");
}