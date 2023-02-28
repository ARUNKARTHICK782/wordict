const mongoose = require('mongoose');
const jwt  = require('jsonwebtoken');
const config = require('config');
const userSchema = new mongoose.Schema(
    {
    name : String,
    email_id : String,
    password : String,
    },
    {timestamps:true}
);

userSchema.methods.generateAuthToken = async function () {
    const payload = {
        _id : this._id,
        name : this.name,
        email_id : this.email_id,
    }
    const token = await jwt.sign(payload,config.get('jwtPrivateKey'));
    return token;
}

const userModel = mongoose.model('Users',userSchema);

module.exports = userModel;