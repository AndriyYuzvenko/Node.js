import { Request, Response } from 'express';
import { authService } from '../services/authService';
import { IRequestExtended } from '../interfaces/requestExtended.interface';
import { IUser } from '../entity/user';
import { tokenService } from '../services/tokenService';

class AuthController {
    public async registration(req:Request, res:Response) {
        const data = await authService.registration(req.body);
        res.cookie(
            'refreshToken',
            data.refreshToken,
            { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true },
        );

        return res.json(data);
    }

    public async logout(req:IRequestExtended, res:Response): Promise<Response<string>> {
        const { id } = req.user as IUser;

        res.clearCookie('refreshToken');
        await tokenService.deleteTokenPair(id);
        return res.json('OK');
    }
}

export const authController = new AuthController();
