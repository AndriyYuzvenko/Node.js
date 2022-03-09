import { Request, Response } from 'express';
import { IUser } from '../entity/user';
import { userService } from '../services/userService';

class UsersController {
    public async getUser(req:Request, res:Response):Promise<Response<IUser[]>> {
        const users = await userService.getUser(req.body);
        return res.json(users);
    }

    public async createUser(req: Request, res: Response): Promise<Response<IUser>> {
        const createdUser = await userService.createUser(req.body);
        return res.json(createdUser);
    }

    public async getUserByEmail(req: Request, res: Response): Promise<Response<IUser>> {
        const { email } = req.params;
        console.log(email);
        const user = await userService.getUserByEmail(email);
        return res.json(user);
    }

    public async deleteUser(req:Request, res:Response):Promise<Response<IUser>> {
        const { id } = req.params;
        const createdUser = await userService.deleteUser(id);
        return res.json(createdUser);
    }

    public async patchUser(req:Request, res:Response):Promise<Response<IUser>> {
        const { id } = req.params;
        const createdUser = await userService.patchUser(id, req.body);
        return res.json(createdUser);
    }
}

export const usersController = new UsersController();
