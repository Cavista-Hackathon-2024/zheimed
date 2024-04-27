import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import multer from 'multer';
import axios from 'axios';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;
const localhost = process.env.HOST;

const upload = multer({ dest: 'uploads/' });

app.post('/analyze_mri_image', upload.single('mriImage'), async (req, res) => {
    try {
        // Read the uploaded image file
        const mriImageBuffer = req.file.buffer;

        // Prepare the image data to send to FastAPI
        const formData = new FormData();
        formData.append('file', mriImageBuffer, {
            filename: req.file.originalname,
            contentType: req.file.mimetype
        });

        // Make a POST request to FastAPI endpoint
        const response = await axios.post('http://localhost:8000/analyze_mri_image', formData, {
            headers: {
                ...formData.getHeaders()
            }
        });

        // Handle the analysis response from FastAPI
        const analysisResult = response.data;
        res.json(analysisResult);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.listen(PORT, () => {
	console.log(`Listening on PORT ${PORT} @ http://${localhost}:${PORT}`);
});
