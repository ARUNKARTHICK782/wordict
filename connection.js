const mongoose  = require('mongoose');
const config = require('config');

async function connectToMongoDB()
{
    const username = config.get("DB_USERNAME");
    const password = config.get("DB_PASSWORD");
    const CONNECTION_STRING = `mongodb+srv://${username}:${password}@mak.psstokh.mongodb.net/?retryWrites=true&w=majority`;
    await mongoose.connect(CONNECTION_STRING)
    .then(()=>{
            console.log("Connected to MongoDB");
    });
}

module.exports = connectToMongoDB;