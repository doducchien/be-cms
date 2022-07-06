const userController = require('./controller/user-controller');
const authenController = require('./controller/authen-controller');
module.exports = function(app){
    app.route("/api/users").get(userController.getAllUser);
    // app.route("/authen/login").post(authenController.login)
}