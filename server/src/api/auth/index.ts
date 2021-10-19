import Router from '@koa/router';
import { authMiddleware } from '../../lib';

import { AuthController } from './auth.controller';

const router: Router = new Router();

export const auth = (): Router => {
    const authController: AuthController = new AuthController();

    router.post('/register', authController.duplicatedById, authController.createUser);
    //router.post('/first_register', authController.duplicatedById, authController.first_createUser);
    router.post('/login', authController.login);
    router.get('/check', authMiddleware, authController.check);
    router.get('/test', async (ctx: any) => {
        ctx.body = 'test';
    });
    return router;
};
