const express = require("express");
const Controllers = require("../controllers");
const router = express.Router();

router.get("/", Controllers.projectController.getAllProjects);

module.exports = router;
