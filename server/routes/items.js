import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send(['Yksi', 'kaksi', 'Kolme']);
});

router.get('/:id', (req, res) => {
  res.send(req.query);
});

export default router;
