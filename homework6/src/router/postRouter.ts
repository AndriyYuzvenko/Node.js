import { Router } from 'express';
import { postController } from '../controller/postController';

const router = Router();

router.post('/', postController.postPosts);
router.get('/:userId', postController.getPosts);
router.patch('/:postId', postController.patchPosts);

export const postsRouter = router;
