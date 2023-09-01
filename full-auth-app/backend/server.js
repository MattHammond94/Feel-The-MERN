import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 4444

import cookieParser from 'cookie-parser';

import connectDB from './config/db.js';

import userRoutes from './routes/userRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import { logger } from './middleware/logMiddleware.js';

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // => Allows to send form data (see "x-www-form") in postman body

app.use(logger);

app.use(cookieParser());  //cookieParser => 

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Homepage')
});

app.use(errorHandler);
app.use(notFound);

app.listen(port, () => console.log(`Server started on port ${port}`))