import { EntityRepository, getManager, Repository } from 'typeorm';
import { ICommentRepository } from './commentRepository.interface';
import { Comment, IComments } from '../../entity/comment';

@EntityRepository(Comment)

class CommentRepository extends Repository<Comment> implements ICommentRepository {
    public async postComment(comment:IComments):Promise<IComments> {
        return getManager().getRepository(Comment).save(comment);
    }

    public async getComments(userId:string):Promise<string | {}> {
        return getManager().getRepository(Comment)
            .createQueryBuilder('comment')
            .where('comment.authorId = :id', { id: +userId })
            .leftJoinAndSelect('comment.user', 'user')
            .leftJoinAndSelect('comment.post', 'post')
            .getMany();
    }
}

export const commentRepository = new CommentRepository();
