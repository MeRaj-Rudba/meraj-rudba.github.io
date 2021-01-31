const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connect to mongoose

mongoose.connect("mongodb+srv://portfolioAdmin:adminDB@cluster0.5t4kc.mongodb.net/portfolioDB");



app.use("/projects", require("./routes/projectRoute"));
app.use("/blogs", require("./routes/blogRoute"));


//require route
app.listen(3001, function(){
    console.log("Express is running on port 3001");
})