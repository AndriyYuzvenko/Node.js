import {
    Column, Entity, JoinColumn, ManyToOne,
} from 'typeorm';
import { CommonFields } from './commonFields';
import { User } from './user';
import { Post } from './post';

export interface IComments{
    text:string;
    authorId:number;
    postId:number;
    like:number;
    dislike:number;
}
@Entity('Comments', { database: 'okten' })
export class Comment extends CommonFields implements IComments {
    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        text: string;

    @Column({
        type: 'int',
    })
        authorId:number;

    @Column({
        type: 'int',
    })
        postId:number;

    @Column({
        type: 'int',
    })
        like:number;

    @Column({
        type: 'int',
    })
        dislike:number;

    @ManyToOne(() => User, (user) => user.posts)
    @JoinColumn({ name: 'authorId' })
        user: User;

    @ManyToOne(() => User, (user) => user.posts)
    @JoinColumn({ name: 'postId' })
        post: Post;
}
