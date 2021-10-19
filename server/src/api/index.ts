import Router from '@koa/router';
import { auth } from './auth';
import { room } from './room';
import { socketTest } from './socket_test';

const api = new Router();
api.use('/auth', auth().routes());
api.use('/socket', socketTest().routes());
api.use('/room', room().routes());
api.get('/test', ctx => {
    ctx.body = "test"
})
export default api;