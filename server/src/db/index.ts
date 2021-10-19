import { createConnection, ConnectionOptions, Connection } from 'typeorm';

const connectionOpts: ConnectionOptions = {
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'dksdudwns',
    database: process.env.DB_NAME || 'socket_test',
    synchronize: true,
    logging: false,
    charset: 'utf8',
    extra: { connectionLimit: 100 },
    entities: ['src/db/entity/*.ts'],
};

const connection: Promise<Connection> = createConnection(connectionOpts);

export default connection;
