import { IPost } from '../../entity/post';

export interface IPostRepository {
    postPosts(post:IPost):Promise<IPost>;
    getPosts(userId:string):Promise<IPost[]>;
    patchPost(postId:string, post:IPost):Promise<any>;
}
