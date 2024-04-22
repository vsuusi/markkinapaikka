import express from 'express';

import itemsRouter from './routes/items.js';

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).send('Health check Ok!');
});

app.use('/api/items', itemsRouter);

export default app;
