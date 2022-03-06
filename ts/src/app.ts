import 'reflect-metadata';
import express, { Request, Response } from 'express';
import { createConnection, getManager } from 'typeorm';
import { User } from './entity/user';
import { Post } from './entity/post';
import { Comment } from './entity/comment';

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.get('/users', async (req: Request, res: Response) => {
    const users = await getManager().getRepository(User)
        .createQueryBuilder('user')
        .leftJoin('Posts', 'posts', 'posts.userId = user.id')
        .getMany();
    res.json(users);
});
app.post('/users', async (req, res) => {
    const createdUser = await getManager().getRepository(User).save(req.body);
    res.json(createdUser);
});

app.get('/users/:id', async (req: Request, res: Response) => {
    const user = await getManager().getRepository(User)
        .createQueryBuilder('user')
        .where('user.id = :id', { id: +req.params.id })
        .leftJoin('Posts', 'posts', 'posts.userId = user.id')
        .getOne();
    res.json(user);
});

app.patch('/users/:id', async (req, res) => {
    const { password, email } = req.body;
    const createdUser = await getManager()
        .getRepository(User)
        .update({ id: Number(req.params.id) }, {
            password,
            email,
        });
    res.json(createdUser);
});

app.delete('/users/:id', async (req, res) => {
    const createdUser = await getManager()
        .getRepository(User)
        .softDelete({ id: Number(req.params.id) });
    res.json(createdUser);
});

app.post('/posts', async (req, res) => {
    const createdPost = await getManager().getRepository(Post).save(req.body);
    res.json(createdPost);
});

app.get('/posts/:userId', async (req: Request, res: Response) => {
    const posts = await getManager().getRepository(Post)
        .createQueryBuilder('post')
        .where('post.userId = :id', { id: +req.params.userId })
        .leftJoin('User', 'user', 'user.id = post.userId')
        .getMany();
    res.json(posts);
});

app.patch('/posts/:postId', async (req, res) => {
    const { text } = req.body;
    const updatePost = await getManager()
        .getRepository(Post)
        .update({ id: Number(req.params.postId) }, {
            text,
        });
    res.json(updatePost);
});

app.post('/comments', async (req, res) => {
    const createdComment = await getManager().getRepository(Comment).save(req.body);
    res.json(createdComment);
});

app.get('/comments/:userId', async (req: Request, res: Response) => {
    const comments = await getManager().getRepository(Comment)
        .createQueryBuilder('comment')
        .where('comment.authorId = :id', { id: +req.params.userId })
        .leftJoinAndSelect('comment.user', 'user')
        .leftJoinAndSelect('comment.post', 'post')
        .getMany();
    res.json(comments);
});

app.listen(5200, async () => {
    console.log('Server has started!');
    try {
        const connection = await createConnection();
        if (connection) {
            console.log('DataBase connection');
        }
    } catch (err) {
        if (err) console.log(err);
    }
});
