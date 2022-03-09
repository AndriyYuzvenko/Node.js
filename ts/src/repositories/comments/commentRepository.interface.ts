import { IComments } from '../../entity/comment';

export interface ICommentRepository {
    postComment(comment:IComments):Promise<IComments>;
    getComments(userId:string):Promise<string | {}>
}
