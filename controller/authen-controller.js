const e = require('express');
const BaseResponse = require('../dto/base-response');
const AdminAccount = require('../entity/AdminUser')

async function login(req, res) {
    const { body } = req;
    const { username, password } = body;
    const adminAccount = await AdminAccount.findOne({
        where: {
            username: username,
            password: password
        }
    });
    console.log("adminUser", adminAccount);
    let result;
    if (adminAccount) {
        result = new BaseResponse(adminAccount.toJSON(), "Login success")
        res.status(200).json(result);
    }
    else {
        result = new BaseResponse({}, "Username or password is incorrect")
        res.status(401).json(result)
    }


}

async function getDetailAdmin(req, res) {
    const username = req.body.username;
    const detailAdmin = await AdminAccount.findOne({
        where: {
            username
        }
    });
    let result;
    if (detailAdmin) {
        result = new BaseResponse(detailAdmin, "Get detail admin success");
        res.status(200).json(result);
    }
    else {
        result = new BaseResponse({}, "User is notfound in system")

        res.status(404).json(result);
    }
}

async function updateInfoAdmin(req, res) {
    const { username, firstname, lastname, email, createdAt } = req.body;
    const result = await AdminAccount.update(
        {
            firstname, lastname, email,
        },
        {
            where: {
                username
            }
        }
    )
    let response;

    if(result){
        response = new BaseResponse({}, "Update detail admin success");
        res.status(204).json(response);
    }
    else{
        response = new BaseResponse({}, "Update detail admin failure");
        res.status(400).json(response);
    }
}

async function updatePassAdmin(req, res) {
    let response;
    const { username, currentPassword, newPassword } = req.body;
    const user = await AdminAccount.findOne({
        where:{username}
    })
    if(user.password != currentPassword){
        response = new BaseResponse({}, "Current password is incorrect");

        res.status(400).json(response)
    }
    else if(user.password == newPassword){
        response = new BaseResponse({}, "New password must be difference from current password");

        res.status(400).json(response)
    }
    else{
        const result = await AdminAccount.update(
            {password: newPassword}, {where: {username}}
        )

        if(result){
            response = new BaseResponse({}, "Update password  success");
            res.status(204).json(response);
        }
        else{
            response = new BaseResponse({}, "Update password failure");
            res.status(500).json(response);
        }
    }


}

module.exports = {
    login,
    getDetailAdmin,
    updateInfoAdmin,
    updatePassAdmin
}