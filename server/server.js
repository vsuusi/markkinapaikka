import express from 'express';
import 'dotenv/config';

import items from './routes/items.js';

const app = express();
const port = process.env.PORT;

/*
const logMiddleware = (req, res, next) => {
  console.log('middleware logging!');
  next();
};
*/
app.use(express.json());

app.use('/api/items', items);
app.use('/api/users', items);

app.get('/health', (req, res) => {
  res.status(200).send('Health check Ok!');
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}!`);
});
