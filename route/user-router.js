const express = require('express');
const userRouter = express.Router();

const userController = require('../controller/user-controller')

userRouter.route("").get(userController.getAllUser)

module.exports = userRouter;