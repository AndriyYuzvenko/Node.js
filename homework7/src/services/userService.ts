import bcrypt from 'bcrypt';
import { IUser } from '../entity/user';
import { userRepository } from '../repositories/users/userRepository';

class UserService {
    public async createUser(user:IUser):Promise<IUser> {
        const { password } = user;

        const hashedPassword = await this._hashPassword(password);
        const dataSave = { ...user, password: hashedPassword };
        return userRepository.createUser(dataSave);
    }

    public async getUserByEmail(email: string):Promise<IUser | undefined> {
        return userRepository.getUserByEmail(email);
    }

    public getUser(user:IUser):Promise<IUser[]> {
        return userRepository.getUser(user);
    }

    public deleteUser(id:string):Promise<string | {}> {
        return userRepository.deleteUser(id);
    }

    public patchUser(id:string, user:IUser):Promise<string | {}> {
        return userRepository.patchUser(id, user);
    }

    private _hashPassword(password:string):Promise<string> {
        return bcrypt.hash(password, 10);
    }
}

export const userService = new UserService();
