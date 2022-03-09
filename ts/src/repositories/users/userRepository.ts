import { EntityRepository, getManager, Repository } from 'typeorm';
import { IUser, User } from '../../entity/user';
import { IUserRepository } from './userRepository.interface';

@EntityRepository(User)

class UserRepository extends Repository<User> implements IUserRepository {
    public async createUser(user:IUser):Promise<IUser> {
        return getManager().getRepository(User).save(user);
    }

    public async getUser(user:IUser):Promise<IUser[]> {
        return getManager().getRepository(User)
            .createQueryBuilder('user')
            .leftJoin('Posts', 'posts', 'posts.userId = user.id')
            .getMany();
    }

    public async getUserByEmail(email: string): Promise<IUser | undefined> {
        return getManager().getRepository(User)
            .createQueryBuilder('user')
            .where('user.email = :email', { email })
            .andWhere('user.deletedAt IS NULL')
            .getOne();
    }

    public async deleteUser(id:string):Promise<string | {}> {
        return getManager()
            .getRepository(User)
            .softDelete({ id: Number(id) });
    }

    public async patchUser(id:string, user:IUser):Promise<string | {}> {
        const { password, email } = user;
        return getManager()
            .getRepository(User)
            .update({ id: Number(id) }, {
                password,
                email,
            });
    }
}

export const userRepository = new UserRepository();
