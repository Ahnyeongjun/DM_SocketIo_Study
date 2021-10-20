import { EntityRepository, getRepository, Repository } from 'typeorm';
import connection from '..';
import { Room, User } from '../entity';

@EntityRepository(Room)
export class RoomRepository {
    public async createByRoom(name: string, creater: string, member: User[]) {
        try {
            const room = new Room();
            room.name = name;
            room.creater = creater;
            room.member = member
            await (await connection).manager.save(room);
        } catch (e) {
            console.log(e);
        }
    }
    public async findOneByRoomUid(uid: string) {
        try {
            const roomRepository = (await connection).manager.getRepository(Room);

            return await roomRepository.findOne({
                relations: ['member'],
                where: { uid: uid },
            });

        } catch (e) {
            console.log(e);
        }

    }
    public async findAllByUsername(username: string) {
        try {
            const roomRepository = (await connection).manager.getRepository(Room);

            return await roomRepository.createQueryBuilder('room')
                .leftJoinAndSelect('room.member', 'user')
                .select(['room.uid', 'room.name', 'room.creater'])
                .where('user.name = :name', { name: username })
                .getMany();

        } catch (e) {
            console.log(e);
        }

    }

}