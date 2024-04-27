import express from 'express';
import dotenv from 'dotenv';
import multer from 'multer';
import bodyParser from 'body-parser';
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const Router = express.Router();
const upload = multer({ dest: 'uploads/' });

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

Router.use(bodyParser.urlencoded({ extended: true }));

Router.get('/', async (req, res) => {
    try {
        const prompt = "List of symptoms of Alzheimer's disease";
        const result = await model.generateContent(prompt);

        // Extract generated text from the result
        const response = await result.response;
        const text = await response.text();

        // Send the generated text as the response
        res.status(200).send(text);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

Router.post('/generate', async (req, res) => {
    try {
        const userInput = req.body;

        // Generate answer using Generative AI based on user input
        const result = await model.generateContent(userInput);

        // Extract generated text from the result
        const response = await result.response;
        const answer = await response.text();

        // Send the generated answer back to the client side
        res.status(200).send(answer);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

export default Router;
