const mongoose = require('mongoose');
const wordSchema = new mongoose.Schema({
    word : String,
    meanings: [String],
});

const Word = mongoose.model("Word",wordSchema);

module.exports.Word = Word;