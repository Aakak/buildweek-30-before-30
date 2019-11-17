const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const auth = require('../auth/auth-middleware');
const authRouter = require('../auth/auth-router');
const userRouter = require('../user/user-router');
const bucketlistRouter = require('../bucketlist/bucketlist-router');
const itemRouter = require('../item/item-router');
const commentRouter = require('../comment/comment-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);
server.use('/api/bucketlists', bucketlistRouter);
server.use('/api/bucketlists', itemRouter);
server.use('/api/comments', commentRouter);

module.exports = server;