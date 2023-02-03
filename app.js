const express = require("express");
const app = express();
const ejs = require("ejs");
const lodash = require("lodash");
const PORT = process.env.PORT || 3000;
const mongoose=require("mongoose");
mongoose.set('strictQuery',false);
mongoose.connect("mongodb+srv://Abeed:2101072@cluster0.ta0otmm.mongodb.net/blogs",{useNewUrlParser:true})
const blogModel=new mongoose.Schema({
    title:String,
    postContent:String
})
const Blog=mongoose.model("Blog",blogModel);
// const blog1=new Blog({
//     title:"abeed",
//     content:"IIT"
// })
// blog1.save();
app.set("view engine", "ejs");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));
var posts=[];
Blog.find(function(err,blogs){
if(err){
    console.log(err);
}
else{
    blogs.forEach(function(bg){
        if(err){
          console.log(err);
        }else{
          posts.push(bg);
        }
      })
    }
})

const p1 = "Here goes your Journals."
const p2 = "This is a daily journal of Mr.Abeed.He is currently doing his B.Tech in C.S.E department from IIT bhubaneswar";
const p3 = "Contact us at phone-7569177013 or email us at mullaabeed@gmail.com"
app.get("/", function (req, res) {
    res.render("index", {
        heading: "Home",
        p1: p1,
        posts:posts
    })
})
app.get("/about", function (req, res) {
    res.render("about", {
        heading: "About",
        p1: p2,
    })
})
app.get("/contact", function (req, res) {
    res.render("contact", {
        heading: "Contact",
        contact_1: "Phone-7569177013",
        contact_2: "Mail-mullaabeed2004@gmail.com",
    })
})
app.get("/compose", function (req, res) {
    let last_post = "";
    if (posts.length === 0) last_post = "No previous post";
    else last_post = "Your last post was " + posts[posts.length-1].title;
    res.render("compose", {
        heading: "Compose",
        last_journal: last_post
    })
})
app.post("/compose", function (req, res) {
    const post=new Blog({
        title:req.body.heading,
        postContent:req.body.post
    })
    posts.push(post);
    post.save();
    res.redirect("/");
})
app.get("/:postTitle", function (req, res) {
    const reqTitle=lodash.lowerCase(req.params.postTitle);
    let i=0;
    let j=0,flag=0;
    for(i=0;i<posts.length;i++){
        if(lodash.lowerCase(posts[i].title)===reqTitle){
            j=i;
            flag=1;
        }
    }
    if(flag===1){
        res.render("posts",{
            title:posts[j].title,
            post_content:posts[j].postContent
        })
    }
})
app.listen(PORT, function (request, response) { })
