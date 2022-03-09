import { IComments } from '../entity/comment';
import { commentRepository } from '../repositories/comments/commentRepository';

class CommentService {
    public async postComments(comment:IComments):Promise<IComments> {
        const postComments = await commentRepository.postComment(comment);
        return postComments;
    }

    public async getComments(userId:string):Promise<string | {}> {
        const getComments = await commentRepository.getComments(userId);
        return getComments;
    }
}

export const commentService = new CommentService();
