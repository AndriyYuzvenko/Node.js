import { IPost } from '../entity/post';
import { postRepository } from '../repositories/posts/postRepository';

class PostService {
    public async postPosts(post:IPost):Promise<IPost> {
        const postPosts = await postRepository.postPosts(post);
        return postPosts;
    }

    public async getPost(userId:string):Promise<IPost | {}> {
        const getPost = await postRepository.getPosts(userId);
        return getPost;
    }

    public async patchPosts(postId:string, post:IPost):Promise<IPost> {
        const patchPosts = await postRepository.patchPost(postId, post);
        return patchPosts;
    }
}

export const postService = new PostService();
