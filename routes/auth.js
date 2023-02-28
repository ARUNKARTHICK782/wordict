const express = require('express');
const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const router = express.Router();


router.post('/signup', async (req,res)=>{
    const user = await userModel.findOne({email_id:req.body.email_id});
    if(user) return res.send({Error:"Email id already registered"});

    const newUser = userModel(req.body);
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password,salt);
    await newUser
        .save()
        .then(()=>{
            res.send({Success : "User registered successfully",user:newUser});
        });
});

router.post('/login',async (req,res)=>{

    const user = await userModel.findOne({email_id:req.body.email_id});
    if(!user) return res.send({Error : "Invalid username or password"});

    const validPassword = await bcrypt.compare(req.body.password,user.password);
    if(!validPassword) return res.send({Error : "Invalid username or password"});
    res.send({Success:"Logged In",user : user});
});

module.exports = router;