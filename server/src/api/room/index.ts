import Router from '@koa/router';
import { authMiddleware } from '../../lib';

import { RoomController } from './room.controller';

const router: Router = new Router();

export const room = (): Router => {
    const roomController: RoomController = new RoomController();

    router.post('/', roomController.createRoom);
    router.get('/all/:username', roomController.findAllByUserName);
    router.get('/:roomId', roomController.findAllMessageByRoomId);
    router.get('/test', ctx => {
        ctx.body = "test"
    })
    return router;
};
