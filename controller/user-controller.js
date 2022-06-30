const BaseResponse = require('../dto/base-response');
const User = require('../entity/User')

async function getAllUser(req, res){
    const users = await User.findAll();
    const result = new BaseResponse(users, "Get list user success")
    res.status(200).json(result)

}

module.exports ={
    getAllUser
}