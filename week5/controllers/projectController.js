const projectService = require("../services/projectService");

const getAllProjects = (req, res) => {
  const projects = projectService.getAllProjects();
  res.json({ statusCode: 200, data: projects, message: "Success" });
};

module.exports = { getAllProjects };
