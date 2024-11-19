const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const OpenAI = require("openai"); // Load environment variables

const openai = new OpenAI({
    apiKey:"sk-proj-WW7onCdQQAIs0DOsKkH5T3BlbkFJxwHj7PPnnrDEe3QV43Kh" // Access the API key from the environment variable
});

const app = express();
app.use(express.json()); // Use express.json() for parsing JSON bodies
app.use(cors());

app.post("/chat", async (req, res) => {
    const { prompt } = req.body;
    console.log(prompt);
    try {
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: 'gpt-3.5-turbo',
        });
        res.send(chatCompletion.choices[0].message.content);
    } catch (error) {
        console.error("Error creating completion:", error);
        res.status(500).send({ error: "An error occurred while processing your request." });
    }
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
