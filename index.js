const express = require('express');
const app = express();
const word = require('./routes/word');
const user = require('./routes/user');
const folder = require('./routes/folder');
const auth = require('./routes/auth');
const ctdb = require('./connection');
const cors = require('cors');

app.use(express.json());
app.use(cors());



app.get("/health", async (req,res)=>{
    res.send("Working Fine 😁");
});

ctdb();

app.use('/api',word);
app.use('/api/users',user);
app.use('/api/auth',auth);
app.use('/api/folders',folder);


const port= process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
})