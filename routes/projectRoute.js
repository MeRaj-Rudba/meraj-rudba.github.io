const express = require("express");
const router = express.Router();
const Project = require("../models/projectsModel");

//
router.route("/createProject").post((req, res) => {
    const projectID = req.body.projectID;
    const title = req.body.title;
    const img1 = req.body.img1;
    const img2 = req.body.img2;
    const date = req.body.date;
    const client = req.body.client;
    const technology = req.body.technology;
    const details = req.body.details;

    const newProject = new Project({
        projectID,
        title,
        img1,
        img2,
        date,
        client,
        technology,
        details
    });
    newProject.save();


});
router.route("/allProjects").get(async (req, res) => {
    await Project.find()
        .then(foundProjects => res.json(foundProjects));
});

router.route("/allProjects/:id").get(async (req, res) => {
    await Project.find({ projectID: req.params.id })
        .then(foundProject => res.json(foundProject[0]));

})

module.exports = router;