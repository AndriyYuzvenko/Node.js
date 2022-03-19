import { Request, Response } from 'express';
import { IComments } from '../entity/comment';
import { commentService } from '../services/commentService';

class CommentsController {
    public async postComments(req:Request, res:Response):Promise<Response<IComments>> {
        const createdComment = await commentService.postComments(req.body);
        return res.json(createdComment);
    }

    public async getComments(req:Request, res:Response):Promise<Response<IComments>> {
        const { userId } = req.params;
        const comments = await commentService.getComments(userId);
        return res.json(comments);
    }
}

export const commentsController = new CommentsController();
