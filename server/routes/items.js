import { Router } from 'express';
import verifyToken from '../middleware/verifyToken.js';
import {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} from '../controllers/items.js';

const router = Router();

router.get('/', getItems);
router.get('/:id', getItemById);
router.use(verifyToken); // only routes below these are affected
router.post('/', createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export default router;
