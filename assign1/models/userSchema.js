const mongoose = require("mongoose");

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    contact:Number,
    photo:String,
    skill:String,
    experience:String,
    projects:String,
    education:String,

});

module.exports = mongoose.model("resume", userSchema);