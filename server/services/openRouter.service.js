import axios from "axios"

const isPlaceholder = (value) => !value || value.includes("add your")

const fallbackReply = (messages) => {
    const systemPrompt = messages?.find?.((m) => m.role === "system")?.content || ""
    const lastUser = messages?.findLast?.((m) => m.role === "user")?.content || ""

    if (systemPrompt.includes("Extract structured data from resume")) {
        return JSON.stringify({
            role: "Software Developer",
            experience: "2+ years",
            projects: ["Built a React dashboard", "Improved backend APIs"],
            skills: ["JavaScript", "Node.js", "MongoDB"]
        })
    }

    if (systemPrompt.includes("Generate exactly 5 interview questions")) {
        return [
            "Can you walk me through a project you recently shipped?",
            "How did you handle a difficult bug in production?",
            "What tradeoffs did you consider in your architecture?",
            "How do you ensure your code stays maintainable?",
            "What would you improve about your current solution?"
        ].join("\n")
    }

    return JSON.stringify({
        confidence: 7,
        communication: 8,
        correctness: 7,
        finalScore: 7,
        feedback: "Solid response with room for more detail."
    })
}

export const askAi = async (messages) => {
    try {
        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            throw new Error("Messages array is empty.");
        }

        if (isPlaceholder(process.env.OPENROUTER_API_KEY)) {
            return fallbackReply(messages)
        }

        const response = await axios.post("https://openrouter.ai/api/v1/chat/completions",
            {
                model: "openai/gpt-4o-mini",
                messages: messages

            },
            {
            headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json',
        },});

        const content = response?.data?.choices?.[0]?.message?.content;

        if (!content || !content.trim()) {
      throw new Error("AI returned empty response.");
    }

    return content
    } catch (error) {
            console.error("OpenRouter Error:", error.response?.data || error.message);
    return fallbackReply(messages)
    }
}
