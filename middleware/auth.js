const userModel = require('../models/user');

async function auth(req,res,next){
    const user = await userModel.findById(req.body._id);
    if(!user) return res.send({Error : "Unauthorized access"});

    console.log(user);
    req.user = user;
    next();
}

module.exports = auth;