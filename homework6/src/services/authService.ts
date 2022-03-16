import { userService } from './userService';
import { IUser } from '../entity/user';
import { tokenService } from './tokenService';
import {ITokenData} from "../interfaces/token.interfaces";

class AuthService {
    public async registration(body:IUser):Promise<ITokenData> {
        const { email } = body;

        const userFromDbWithEmail = await userService.getUserByEmail(email);

        if (userFromDbWithEmail) {
            throw new Error(`User with email: ${email} already exists `);
        }

        const createdUser = await userService.createUser(body);
        return this._getTokenData(createdUser);
    }

    private async _getTokenData(userData: IUser):Promise<ITokenData> {
        const { id, email } = userData;
        const tokenPair = await tokenService.generateTokenPair({ userId: id, userEmail: email });
        await tokenService.saveToken(id, tokenPair.refreshToken);

        return {
            ...tokenPair,
            userId: id,
            userEmail: email,
        };
    }
}

export const authService = new AuthService();
