const mongoose = require("mongoose");

const blogSchema = {
    blogID: String,
    title: String,
    img1: String,
    img2: String,
    date: String,
    details: String

}

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;