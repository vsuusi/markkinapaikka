import { Router } from 'express';

const router = Router();

const ITEMS = [
  {
    id: 1,
    name: 'Tuoli',
    price: 19,
  },
  {
    id: 2,
    name: 'Pallo',
    price: 5,
  },
];

router.get('/', (req, res) => {
  res.send(ITEMS);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const city = ITEMS.find((item) => item.id === id);
  if (!city) {
    res.status(404).send('Not found');
  }
  res.send(city);
});

router.post('/', (req, res) => {
  console.log(req.body);
  const item = {
    id: ITEMS.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  ITEMS.push(item);
  res.send(item);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const city = ITEMS.find((c) => c.id === id);
  if (!city) {
    res.status(404).send('Not found');
  }
  const index = ITEMS.indexOf(city);
  ITEMS.splice(index, 1);
  res.send(city);
});

export default router;
