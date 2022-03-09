import { Router } from 'express';
import { commentsController } from '../controller/commentsController';

const router = Router();

router.post('/', commentsController.postComments);
router.get('/:userId', commentsController.getComments);

export const commentsRouter = router;
