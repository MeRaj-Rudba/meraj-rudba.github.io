const express = require("express");
const Blog = require("../models/blogsModel");
const router = express.Router();


//
router.route("/createBlog").post((req, res) => {
    const blogID = req.body.blogID;
    const title = req.body.title;
    const img1 = req.body.img1;
    const img2 = req.body.img2;
    const date = req.body.date;
    const details = req.body.details;

    const newBlog = new Blog({
        blogID,
        title,
        img1,
        img2,
        date,
        details
    });
    newBlog.save();


});
router.route("/allBlogs").get(async (req, res) => {
    await Blog.find()
        .then(foundBlogs => res.json(foundBlogs));
})


router.route("/allBlogs/:id").get(async (req, res) => {
    await Blog.find({ blogID: req.params.id })
        .then(foundBlog => res.json(foundBlog[0]));

})

module.exports = router;