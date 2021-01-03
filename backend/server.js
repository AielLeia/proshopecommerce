import express from 'express';
import dotenv from 'dotenv';
import 'colors';
import { connectDB } from './config/index.js';

import { productRoute } from './routes/index.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running ...');
});

app.use('/api/products', productRoute);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
