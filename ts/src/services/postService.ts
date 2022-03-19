import { IPost } from '../entity/post';
import { postRepository } from '../repositories/posts/postRepository';

class PostService {
    public postPosts(post:IPost):Promise<IPost> {
        return postRepository.postPosts(post);
    }

    public getPost(userId:string):Promise<IPost[]> {
        return postRepository.getPosts(userId);
    }

    public patchPosts(postId:string, post:IPost):Promise<IPost> {
        return postRepository.patchPost(postId, post);
    }
}

export const postService = new PostService();
