import crypto from 'crypto';
import jwt, { Secret } from 'jsonwebtoken';
import { Context, Next } from 'koa';
import { Payload } from '../interface';
export const cryptoPassword = async (password: string) => {
    return await crypto
        .createHmac('sha512', (process.env.CRYPTO || 'srcret') as string)
        .update(password)
        .digest('hex');
};

export const generateToken = async (payload: Payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            process.env.JWT_SECRET as Secret,
            {
                expiresIn: '1h',
            },
            (error, token) => {
                if (error) reject(error);
                resolve(token);
            }
        );
    });
};

const decodedToken = async (token: string) => {
    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET as Secret);
        if (!decoded) {
            throw new Error('Error Message');
        }

        return decoded;
    } catch (e) {
        console.log(e);
    }
};

export const authMiddleware = async (ctx: Context, next: Next) => {
    const token: string = ctx.get('Authorization');
    if (!token) {
        ctx.status = 404;
        ctx.body = { message: 'token required' };
    }
    try {
        const decoded = await decodedToken(token);
        ctx.request.body.decoded = decoded;
    } catch (e: any) {
        ctx.status = 401;
        ctx.body = { message: 'token required' };
    }
    await next();
};
