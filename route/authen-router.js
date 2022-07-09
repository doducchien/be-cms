const express = require("express")
const authenRouter = express.Router();

const authenController = require("../controller/authen-controller")

authenRouter.route("/login").post(authenController.login);
authenRouter.route("/profile").post(authenController.getDetailAdmin);
authenRouter.route("/profile").put(authenController.updateInfoAdmin)
authenRouter.route("/password").put(authenController.updatePassAdmin);

module.exports = authenRouter;