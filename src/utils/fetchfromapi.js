import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true 
});

async function fetchfromapi(content) {
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: "hlo" }],
    });

    console.log(completion.choices[0]);
}

export default fetchfromapi;
