import { RoomService } from './room.service';
import { MessageRepository, RoomRepository, UserRepository } from '../../db/repository';
import { Context, Next } from 'koa';
import { CreateRoomRequest } from '../../interface/type/room';
import { AuthService } from '../auth/auth.service';
import { User } from '../../db/entity';

export class RoomController {
    private roomRepository: RoomRepository = new RoomRepository();
    private userRepository: UserRepository = new UserRepository();
    private messageRepository: MessageRepository = new MessageRepository();
    private roomService: RoomService = new RoomService(this.roomRepository, this.messageRepository);
    private userService: AuthService = new AuthService(this.userRepository);
    public createRoom = async (ctx: Context) => {
        try {
            const roomData: CreateRoomRequest = ctx.request.body;
            const userArray: User[] = [];
            const user = await this.userService.findOneByName(roomData.creater)
            if (user)
                await userArray.push(user);
            else {
                ctx.status = 400;
            }
            console.log(user)
            await this.roomService.createRoom({ name: roomData.name, creater: roomData.creater, member: userArray });
            ctx.status = 201;
        } catch (error) {
            console.log(error);
            ctx.status = 400;
        }
    };
    public findAllByUserName = async (ctx: Context) => {
        const username = ctx.params.username;

        const room = await this.roomService.findAllByUsername(username);
        ctx.body = { room: room };
    }
    public findAllMessageByRoomId = async (ctx: Context) => {
        console.log(ctx.params.roomId)
        let { page, pageSize } = ctx.query;
        const numPage = Number(page) || 1;
        const numPageSize = Number(pageSize) || 10;
        const room = await this.roomService.findAllMessageByRoomId(ctx.params.roomId, numPage, numPageSize)
        console.log(room);
        ctx.body = { message: room };
    }
}
