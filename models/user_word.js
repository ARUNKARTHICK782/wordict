const mongoose =  require('mongoose');

const UserWord = mongoose.model('User-Word',new mongoose.Schema({
    user_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Users'
    },
    word_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Word'
    },
},{timestamps:true}));

module.exports = UserWord;