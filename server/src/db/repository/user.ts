import { EntityRepository, getRepository, Repository } from 'typeorm';
import connection from '..';
import { User } from '../entity';

@EntityRepository(User)
export class UserRepository {
    public async createByUser(name: string, id: string, password: string) {
        try {
            const user = new User();
            user.name = name;
            user.id = id;
            user.password = password;
            await (await connection).manager.save(user);
        } catch (e) {
            console.log(e);
        }
    }

    public async findOneByPassword(password: string) {
        try {
            return getRepository(User)
                .createQueryBuilder()
                .where('user.password = :passowrd', {
                    password: password,
                })
                .getOne();
        } catch (e) {
            console.log(e);
        }
    }


    public async findOneByName(name: string) {
        try {
            return getRepository(User)
                .createQueryBuilder()
                .where('user.name = :name', {
                    name: name,
                })
                .getOne();
        } catch (e) {
            console.log(e);
        }
    }

    public async findOneByIdAndPassword(id: string, password: string) {
        try {
            const postRepository = (await connection).manager.getRepository(User);

            return await postRepository.findOne({
                where: { id: id, password: password },
            });
        } catch (e) {
            console.log(e);
        }
    }
}
