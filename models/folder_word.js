const mongoose = require('mongoose');

const FolderWord = mongoose.model('FolderWord',new mongoose.Schema({
    folder_id :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Folders'
    },
    word_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Word'
    }
}));

module.exports = FolderWord;