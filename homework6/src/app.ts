import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import { apiRouter } from './router/apiRouter';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiRouter);

const { PORT } = process.env;

app.listen(PORT, async () => {
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
