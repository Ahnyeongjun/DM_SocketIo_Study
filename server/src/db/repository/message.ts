import { EntityRepository, getRepository, Repository } from 'typeorm';
import connection from '..';
import { Message, } from '../entity';

@EntityRepository(Message)
export class MessageRepository {
    public async createByMessage(writer: string, roomId: string, createdAt: string) {
        try {
            const message = new Message();
            message.writer = writer;
            message.roomId = roomId;
            message.createdAt = createdAt;
            await (await connection).manager.save(message);
        } catch (e) {
            console.log(e);
        }
    }
    public async findOneByRoomUid(roomId: string) {
        try {
            const messageRepository = (await connection).manager.getRepository(Message);

            return await messageRepository.findOne({
                where: { roomId: roomId },
            });

        } catch (e) {
            console.log(e);
        }

    }
}