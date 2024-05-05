import express from 'express';
import cors from 'cors';

import itemsRouter from './routes/items.js';
import usersRouter from './routes/users.js';

const app = express();

app.use(cors({
  origin: '*',
}));
app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/items', itemsRouter);

app.get('/health', (req, res) => {
  res.status(200).send('Health check Ok!');
});

export default app;
