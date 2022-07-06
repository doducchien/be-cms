const express = require("express")
const authenRouter = express.Router();

const authenController = require("../controller/authen-controller")

authenRouter.route("/login").post(authenController.login);
authenRouter.route("/profile").post(authenController.getDetailAdmin);
authenRouter.route("/profile").put(authenController.updateInfoAdmin)

module.exports = authenRouter;