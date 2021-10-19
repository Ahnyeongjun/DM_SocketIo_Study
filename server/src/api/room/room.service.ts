import { Room } from '../../db/entity';
import { RoomRepository } from '../../db/repository';
import { CreateRoomRequest, RoomRequest } from '../../interface/type/room';
import { cryptoPassword } from '../../lib';

export class RoomService {
    constructor(private readonly roomRepository: RoomRepository) { }

    public async createRoom(request: RoomRequest) {
        await this.roomRepository.createByRoom(request.name, request.creater, request.member);
    }

}
