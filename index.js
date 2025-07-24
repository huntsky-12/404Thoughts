import express from "express"
import bodyParser from "body-parser";
const app=express()
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
let posts=[];


app.get("/", (req, res) => {
  res.render("index.ejs", { posts, page: "home" });
});

app.get("/create", (req, res) => {
  res.render("create.ejs", { page: "create" });
});

app.post("/create",(req,res)=>{
    const{title,author,content}=req.body;
    posts.push({title,author,content});
    res.redirect("/");
});
app.post("/delete",(req,res)=>{
    const index=req.body.index;
    posts.splice(index,1);
    res.redirect("/");
})
app.get("/update", (req, res) => {
    const index = req.query.index; // Use query instead of body
    const post = posts[index]; // Assuming posts is an array
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("edit.ejs", { post, index }); // You probably meant to render an edit form
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

