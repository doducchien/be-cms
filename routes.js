const userController = require('./controller/user-controller');

module.exports = function(app){
    app.route("/users").get(userController.getAllUser)
}