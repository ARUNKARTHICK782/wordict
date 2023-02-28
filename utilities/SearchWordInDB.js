const {Word} = require('../models/word');

async function searchInDB(w)
{
    const word = await Word.findOne({word:w});
    if(!word)
        return null;
    console.log("Already in DB");
    return word;
}
module.exports =  searchInDB;