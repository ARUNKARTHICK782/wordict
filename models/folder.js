const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
    name : String,
    desc : String, 
},{timestamps:true}
);

const folderModel = mongoose.model('Folders',folderSchema);

module.exports = folderModel;