import { EntityRepository, getManager, Repository } from 'typeorm';
import { IPost, Post } from '../../entity/post';
import { IPostRepository } from './postRepository.interface';

@EntityRepository(Post)

class PostRepository extends Repository<Post> implements IPostRepository {
    public async postPosts(post:IPost):Promise<IPost> {
        return getManager().getRepository(Post).save(post);
    }

    public async getPosts(userId:string):Promise<IPost[]> {
        return getManager().getRepository(Post)
            .createQueryBuilder('post')
            .where('post.userId = :id', { id: +userId })
            .leftJoin('User', 'user', 'user.id = post.userId')
            .getMany();
    }

    public async patchPost(postId:string, post:IPost):Promise<any> {
        const { text } = post;
        return getManager()
            .getRepository(Post)
            .update({ id: Number(postId) }, {
                text,
            });
    }
}

export const postRepository = new PostRepository();
