const mongoose = require("mongoose");

const projectSchema = {
    projectID: String,
    title: String,
    img1: String,
    img2: String,
    date: String,
    client: String,
    technology: String,
    details: String

}

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;