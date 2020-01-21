import { Router } from 'express';
import SessionController from '../controllers/SessionController';

const router = Router();

router.get('/', SessionController.getAll);
router.post('/', SessionController.add);

export default router;