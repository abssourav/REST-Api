require('dotenv').config();
const express = require('express');
const cors = require('cors');

const userRoute  = require('./routes/user.route');
require('./config/db')

const app = express();

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/api/users" ,userRoute)





// /api/users     : GET
// /api/users/:id : GET
// /api/users/    : POST
// /api/users/:id : DELETE
// /api/users:/id : PACTH

//home route
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html')
});

// route not found error
app.use((req,res,next)=>{
    res.status(404).json({
        message : "Route not found"
    })
})
// server error
app.use((err,req,res,next)=>{
    res.status(500).json({
        message : "Something Broken"
    })
})

module.exports = app;
