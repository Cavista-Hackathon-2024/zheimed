import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import index from './index.js';

const PORT = process.env.PORT || 5000;
const localhost = process.env.HOST || 'localhost';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', index);

app.listen(PORT, () => {
	console.log(`Listening on PORT ${PORT} @ http://${localhost}:${PORT}`);
});
