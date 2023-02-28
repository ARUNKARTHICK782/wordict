const mongoose = require('mongoose');

const UserFolder = mongoose.model('User-Folder',new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'Users'
    },
    folder_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'Folders'
    }
}))

module.exports = UserFolder;