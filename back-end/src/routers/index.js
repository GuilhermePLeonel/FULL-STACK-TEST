const express = require('express');
const loginRouter = require('./login.router');

const routers = express.Router();
routers.use('/login', authRouter);

module.exports = routers;
