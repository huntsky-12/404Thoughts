require('dotenv').config();
const mongoose = require("mongoose");

const postSchema= new mongoose.Schema({
  title: String, 
  author: String,
  content: String,
  date: { type: Date, default: Date.now },

});
module.export=mongoose.model("Post",postSchema)