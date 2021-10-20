import { Room } from '../../db/entity';
import { MessageRepository, RoomRepository } from '../../db/repository';
import { CreateRoomRequest, RoomRequest } from '../../interface/type/room';
import { cryptoPassword } from '../../lib';

export class RoomService {
    constructor(private readonly roomRepository: RoomRepository,
        private readonly messageRepository: MessageRepository
    ) { }

    public async createRoom(request: RoomRequest) {
        await this.roomRepository.createByRoom(request.name, request.creater, request.member);
    }
    public async findAllMessageByRoomId(roomId: string, numPage: number, numPageSize: number) {
        return await this.messageRepository.findAllMessageByRoomId(roomId, numPage, numPageSize);
    }
    public async findAllByUsername(username: string) {
        return await this.roomRepository.findAllByUsername(username);
    }
}
