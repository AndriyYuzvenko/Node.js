import { Router } from 'express';
import { usersController } from '../controller/usersController';

const router = Router();

router.get('/', usersController.getUser);
router.post('/', usersController.createUser);
router.get('/:email', usersController.getUserByEmail);
router.patch('/:id', usersController.patchUser);
router.delete('/:id', usersController.deleteUser);

export const usersRouter = router;
