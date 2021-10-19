import Koa from "koa";
import './config/env.ts';
import { createServer } from "http";
import { Server } from "socket.io";
import Router from '@koa/router';
import cors from '@koa/cors';
import logger from 'koa-logger';
import bodyparser from 'koa-body';
import db from "./db"
import api from "./api";
import { MessageRepository, RoomRepository, UserRepository } from "./db/repository";
const app = new Koa();
const router = new Router();
router.use('/api', api.routes())
const httpServer = createServer(app.callback());

const koaOptions = {
    origin: 'http://localhost:8080',
    credentials: true,
};

export const SocketServer = new Server(httpServer, { cors: { origin: 'http://localhost:8080' } });

const createdAt = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const date = ('0' + today.getDate()).slice(-2);

    const hours = ('0' + today.getHours()).slice(-2);
    const minutes = ('0' + today.getMinutes()).slice(-2);
    const seconds = ('0' + today.getSeconds()).slice(-2);
    const milliseconds = ('0' + today.getMilliseconds()).slice(-3);
    const day: string = year + ':' + month + ':' + date + ':' + hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
    return day;
}
SocketServer.on("connection", async (socket) => {

    const username = socket.handshake.auth.username;

    console.log("server" + socket.id + ", username" + username); // x8WIv7-mJelg7on_ALbx

    socket.on('leaveRoom', (room: string) => {
        console.log(room);
        socket.leave(room)
    });

    socket.on('joinRoom', async (roomUid: string) => {
        const roomRepository = new RoomRepository();
        const room = await roomRepository.findOneByRoomUid(roomUid);

        const checkUserName = (element: any) => {
            if (element.name === username) {
                return true;
            }
        }

        if (room?.member.some(checkUserName)) {
            socket.join(roomUid)
            console.log(`${roomUid} connected succcess`);
        }
        else {
            socket.join(roomUid)

            console.log(`${roomUid} connected false`);
        }
    });
    socket.on('chat_message2', async (socketId, room, name, msg) => {
        const messageRepository = new MessageRepository();
        const clients = SocketServer.sockets.adapter.rooms.get(room);
        if (clients?.has(socketId)) {
            0
            SocketServer.to(room).emit('chat_message', msg);
            await messageRepository.createByMessage(name, msg, createdAt())
        }
    });
});

app.use(bodyparser())
    .use(cors(koaOptions))
    .use(logger())
    .use(router.routes())
    .use(router.allowedMethods())


db.then(() => httpServer.listen(3000, () => { console.log("server listen : 3000 port") }));