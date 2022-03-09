import { IUser } from '../../entity/user';

export interface IUserRepository {
    createUser(user:IUser):Promise<IUser>;
    getUser(user:IUser):Promise<IUser[]>;
    getUserByEmail(email: string): Promise<IUser | undefined>;
    deleteUser(id:string):Promise<string | {}>;
    patchUser(id:string, user:IUser):Promise<string | {}>
}
