import fetch from "node-fetch";

async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/TinyLlama/TinyLlama-1.1B-Chat-v1.0",
        {
            headers: { Authorization: "Bearer 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" },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}

async function fetchfromapi2(content) {
    const response = await query({ "inputs": `${content}` });
    console.log(JSON.stringify(response));
    return response
}

export default fetchfromapi2

