import express from 'express';
import dotenv from 'dotenv';
import 'colors';
import { connectDB } from './config/index.js';

import { productRoute, userRoute } from './routes/index.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running ...');
});

app.use('/api/products', productRoute);
app.use('/api/users', userRoute);

app.use(notFound);

app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
