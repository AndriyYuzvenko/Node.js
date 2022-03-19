import { IComments } from '../entity/comment';
import { commentRepository } from '../repositories/comments/commentRepository';

class CommentService {
    public postComments(comment:IComments):Promise<IComments> {
        return commentRepository.postComment(comment);
    }

    public getComments(userId:string):Promise<string | {}> {
        return commentRepository.getComments(userId);
    }
}

export const commentService = new CommentService();
