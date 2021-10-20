import { EntityRepository, getRepository, Repository } from 'typeorm';
import connection from '..';
import { Message, } from '../entity';

@EntityRepository(Message)
export class MessageRepository {
    public async createByMessage(writer: string, roomId: string, createdAt: string, msg: string) {
        try {
            const message = new Message();
            message.writer = writer;
            message.roomId = roomId;
            message.createdAt = createdAt;
            message.msg = msg;
            await (await connection).manager.save(message);
        } catch (e) {
            console.log(e);
        }
    }
    public async findAllMessageByRoomId(roomId: string, page: number, pageSize: number) {
        try {
            const messageRepository = (await connection).manager.getRepository(Message);

            return await messageRepository.find({
                order: {
                    createdAt: 'DESC',
                },
                where: { roomId: roomId },
                take: pageSize,
                skip: (page - 1) * pageSize,
            });

        } catch (e) {
            console.log(e);
        }

    }
}