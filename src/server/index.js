import express from 'express';
import cors from 'cors';
import routes from '../routes/index.js';

const server = express();

server.use(cors("*"));
server.use(express.urlencoded({ extended: true }));
server.use(express.static('/public'));

server.get('/', (req, res) => res.send('Server is up!'));
server.use('/api', routes);

export default server;
