const express = require('express');
const router = express.Router();

const folderModel = require('../models/folder');
const auth = require('../middleware/auth');
const userFolder = require('../models/user_folder');
const folderWord = require('../models/folder_word');

router.post('/new',auth,async (req,res)=>{
    const newFolder = new folderModel(req.body);

    const uf = new userFolder({user_id:req.user._id,folder_id:newFolder._id});
    await uf.save();
    
    await newFolder.save().then(()=>{
        res.send("Folder Created");
    })
});


router.post('/new-word',auth,async(req,res)=>{
    const newFolderWord = new folderWord(req.body);
    await newFolderWord.save();
    res.send("Word added");
});



module.exports = router;