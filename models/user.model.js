const mongoose = require('mongoose')

//Schema
const userSchema = mongoose.Schema({
    id:{
        type : String,
        require : true
    },
    name:{
        type : String,
        require : true
    },
    age:{
        type:Number,
        require: true
    },
    createdOn:{
        type: Date,
        default: Date.now
    }
})

            // model
module.exports = mongoose.model("User",userSchema)