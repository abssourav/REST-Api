const mongoose = require('mongoose');
const config = require('./config');

const dbUrl = config.db.url ; 

mongoose.connect(dbUrl)
.then(()=>{
    console.log("Mongo Atlas connected")
})
.catch((err)=>{
    console.log("Database Connection Failed");
    console.log(err)
})


// then require this file to app.js 
            //require('./config/db')