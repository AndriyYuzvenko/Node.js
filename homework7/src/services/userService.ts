import bcrypt from 'bcrypt';
import { IUser } from '../entity/user';
import { userRepository } from '../repositories/users/userRepository';

class UserService {
    public async createUser(user:IUser):Promise<IUser> {
        const { password } = user;

        const hashedPassword = await this._hashPassword(password);
        const dataSave = { ...user, password: hashedPassword };
        const createdUser = await userRepository.createUser(dataSave);
        return createdUser;
    }

    public async getUserByEmail(email: string):Promise<IUser | undefined> {
        const getByIdUser = await userRepository.getUserByEmail(email);
        return getByIdUser;
    }

    public async getUser(user:IUser):Promise<IUser[]> {
        const getUser = await userRepository.getUser(user);
        return getUser;
    }

    public async deleteUser(id:string):Promise<string | {}> {
        const deleteUser = await userRepository.deleteUser(id);
        return deleteUser;
    }

    public async patchUser(id:string, user:IUser):Promise<string | {}> {
        const patchUser = await userRepository.patchUser(id, user);
        return patchUser;
    }

    private async _hashPassword(password:string):Promise<string> {
        return bcrypt.hash(password, 10);
    }
}

export const userService = new UserService();
