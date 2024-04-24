import express from 'express';
import cors from 'cors';

import itemsRouter from './routes/items.js';
import usersRouter from './routes/users.js';

const app = express();

app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:8088',
    'http://localhost:8081',
  ],
}));
app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/items', itemsRouter);

app.get('/health', (req, res) => {
  res.status(200).send('Health check Ok!');
});

export default app;
