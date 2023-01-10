import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import tiresRoutes from './routes/Tires.js';

// const CONNECTION_URL = 'mongodb+srv://franciscoVaninetti:franciscoVaninetti33@cluster0.xzclww5.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.env.PORT | 5000;

const app = express();
dotenv.config();

app.use('/tires', tiresRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

mongoose.connect(process.env.CONNECTION_URL, { logger: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
    .catch((error) => console.error(error.message));

mongoose.set('strictQuery', true);
