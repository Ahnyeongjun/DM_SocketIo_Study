import { io } from 'socket.io-client';
import Router from '@koa/router';
import { SocketServer } from '../../';
const router = new Router();


export const socketTest = (): Router => {
    router.get('/test', ctx => {
        const count = SocketServer.of("/").sockets.size;
        console.log(count)
        ctx.body = count || 0;
    })

    router.post('/test', ctx => {
        try {
            const socket = io('http://localhost:3000');

            socket.on('connect', () => {
                console.log(socket.id); // x8WIv7-mJelg7on_ALbx

            })
            socket.disconnect();

            ctx.body = "success";
        } catch (error) { console.error(error) }

    })

    return router;
};
