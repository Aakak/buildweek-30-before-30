const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const auth = require('../auth/auth-middleware.js');
const authRouter = require('../auth/auth-router.js');
const bucketList = require('../bucketList/bucketlist-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/list', auth, bucketList);

module.exports = server;