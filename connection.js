const mongoose  = require('mongoose');


async function connectToMongoDB()
{
    await mongoose.connect('mongodb+srv://arunkarthickm:arunkarthick007@mak.psstokh.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{
            console.log("Connected to MongoDB");
    });
}

module.exports = connectToMongoDB;