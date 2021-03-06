import { Router } from 'express';
import { authController } from '../controller/authController';
import { authMiddleware } from '../middlewares/authMiddelware';

const router = Router();

router.post('/registration', authController.registration);
// router.post('/login');
router.post('/logout', authMiddleware.checkAccessToken, authController.logout);
// router.post('/refresh');

export const authRouter = router;
