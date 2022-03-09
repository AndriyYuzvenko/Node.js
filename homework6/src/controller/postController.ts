import { Request, Response } from 'express';
import { IPost } from '../entity/post';
import { postService } from '../services/postService';

class PostController {
    public async postPosts(req:Request, res:Response):Promise<Response<IPost>> {
        const createdPost = await postService.postPosts(req.body);
        return res.json(createdPost);
    }

    public async getPosts(req:Request, res:Response):Promise<Response<IPost>> {
        const { userId } = req.params;
        const posts = await postService.getPost(userId);
        return res.json(posts);
    }

    public async patchPosts(req:Request, res:Response):Promise<Response<IPost>> {
        const { postId } = req.params;
        const updatePost = await postService.patchPosts(postId, req.body);
        return res.json(updatePost);
    }
}

export const postController = new PostController();
