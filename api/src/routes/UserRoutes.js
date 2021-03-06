import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.get('/', UserController.getAll);
router.get('/:id', UserController.getOne);
router.post('/', UserController.add);

export default router;