require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API
});

async function testGemini() {
    try {
        const result = await ai.interactions.create({
            model: "gemini-3.5-flash",
            input: "Say Hello"
        });

        console.log("Gemini response:", result.output_text);

    } catch (error) {
        console.log("Error name:", error.name);
        console.log("Error message:", error.message);
        console.log("Error status:", error.status);
        console.log("Full error:", error);
    }
}

testGemini();