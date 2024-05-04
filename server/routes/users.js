import { Router } from 'express';
import { signUpUser, loginUser, getUserById } from '../controllers/users.js';

const router = Router();

router.get('/:id', getUserById);
router.post('/signup', signUpUser);
router.post('/login', loginUser);

export default router;
