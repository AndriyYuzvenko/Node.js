import { Router } from 'express';
import { usersRouter } from './usersRouter';
import { postsRouter } from './postRouter';
import { commentsRouter } from './commentsRouter';
import { authRouter } from './authRouter';

const router = Router();

router.use('/users', usersRouter);
router.use('/posts', postsRouter);
router.use('/comments', commentsRouter);
router.use('/auth', authRouter);

export const apiRouter = router;
