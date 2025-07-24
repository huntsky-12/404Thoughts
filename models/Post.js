import mongoose from "mongoose";


const postSchema= new mongoose.Schema({
  title: String, 
  author: String,
  content: String,
  date: { type: Date, default: Date.now },

});
const Post = mongoose.model("Post", postSchema);
export default Post;