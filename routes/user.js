const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


const userModel = require('../models/user');
const userFolder = require('../models/user_folder');
const userWord = require('../models/user_word');
const folderWord = require('../models/folder_word');
const auth = require('../middleware/auth');

router.get('/mywords/:user_id',async(req,res)=>{
    const user = await userModel.findById(req.params.user_id);
    if(!user) return res.send({Error : "Unauthorized access"});

    const mywords = await userWord.find({"user_id":req.params.user_id})
                  .populate('word_id',"-_id")
                  .select('-user_id -_id')
    if(!mywords) return res.send('No words to show');
    res.send(mywords);
});


// SVGDefsElement;
router.get('/myfolders',auth,async(req,res)=>{
    const myfolders = await userFolder.find({user_id:req.user_id})
                            .populate('folder_id');
                            
    if(!myfolders) return res.send("No folders to show");
    res.send(myfolders);
});


router.get('/myfolders/:id',auth,async (req,res)=>{
    const wordsInFolders = await folderWord.find({folder_id:req.params.id}).populate('word_id');
    if(!wordsInFolders) return res.send("No words in folder");
    res.send(wordsInFolders);
});

module.exports = router;