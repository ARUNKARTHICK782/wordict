const express = require('express');


const fetch = (...args) => import('node-fetch').then(({ default: fetch }) =>
    fetch(...args));


const router = express.Router();

const {Word} = require('../models/word');
const auth = require('../middleware/auth');
const userWord = require('../models/user_word');
const searchInDB = require('../utilities/SearchWordInDB');

router.post('/search/:word',auth,async (req,res)=>
{
    const apiRoute = req.params.word;
    const found = await searchInDB(req.params.word);
    if(found)
    {
      const uw = new userWord({user_id:req.user._id,word_id:found._id});
      await uw.save();
      res.send(found);
      return;
    }
    const apiResponse = await fetch(
      'https://api.dictionaryapi.dev/api/v2/entries/en/'+apiRoute
    );
    try
    {
      const apiResponseJson = await apiResponse.json();
      const len = Object.keys(apiResponseJson[0].meanings).length;
      const meanings = [];
      for(var i=0;i<len;i++)
      {
        meanings.push(apiResponseJson[0].meanings[i].definitions[0].definition)
      }
      const data = 
      {
        "word" : apiRoute,
        "meanings" : meanings
      }
      const tword = Word(data);
      const uw = new userWord({user_id:req.user._id,word_id:tword._id});
      await uw.save();
      await tword.save();
      const response = {
        word_id : uw._id,
        meanings : meanings
      };
      console.log(response);
      res.send(response);
    }
    catch(e)
    {
      // console.log(e.message);
        res.send("No meanings found");
    }
});

router.get('/allwords',async(req,res)=>{
  const allwords = await Word.find();
  res.send(allwords);
});

// hello


module.exports = router;