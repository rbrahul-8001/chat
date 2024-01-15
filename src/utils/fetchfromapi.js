import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true 
});

// console.log(process.env.OPENAI_API_KEY);

async function fetchfromapi(content) {
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: "hlo" }],
    });

    console.log(completion.choices[0]);
}

export default fetchfromapi;
