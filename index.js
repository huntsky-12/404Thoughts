import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Post from "./models/Post.js";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));//used to parse incoming form data (like from <form method="POST">) and make it available in req.body.
app.use(express.static("public"));//Without this line, your CSS/JS won't load in the browser.
app.set("view engine", "ejs");// This tells Express to use EJS (Embedded JavaScript) as your templating engine for dynamic html.
console.log("Connecting to:", process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});


app.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.render("index.ejs", { posts, page: "home" }); 
  } catch (err) {
    console.error(err);
    res.status(500).send("Error loading posts.");
  }
});


app.get("/create", (req, res) => {
  res.render("create.ejs", { page: "create" });
});

app.post("/create",async (req,res)=>{
    const{title,author,content}=req.body;
    try{
      const newPost= new Post({title:title.trim(),author:author.trim(),content:content.trim()});
      await newPost.save();
      res.redirect("/");

    }catch (err) {
    console.error(err);
    res.status(500).send("Failed to save post.");
    }
});
app.post("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Post.findByIdAndDelete(id);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to delete post.");
  }
});

app.get("/update", async (req, res) => {
  const id = req.query.index; 
  try {
    const post = await Post.findById(id);
    if (!post) return res.status(404).send("Post not found");
    res.render("partials/edit.ejs", { post, page: "edit" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error loading update form.");
  }
});

app.post("/update", async (req,res)=>{
  const {id,title,author,content}=req.body;
  try{
    await Post.findByIdAndUpdate(id,{title:title.trim(),author:author.trim(),content:content.trim()});
    res.redirect("/");
  }catch(err){
    console.error(err);
    res.status(500).send("Failed to Update Post.")
  }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

