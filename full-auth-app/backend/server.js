import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 4444

import userRoutes from './routes/userRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

const app = express();

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Homepage')
});

app.use(errorHandler);
app.use(notFound);

app.listen(port, () => console.log(`Server started on port ${port}`))