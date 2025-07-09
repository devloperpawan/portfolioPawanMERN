const Project = require("../models/Project");

exports.addProject = async (req, res) => {
  const { name, description } = req.body;
  const image = req.file ? req.file.filename : "";

  try {
    const newProject = new Project({ name, description, image });
    await newProject.save();
    res.status(201).json({ message: "Project added successfully" });
  } catch (err) {
      console.error("Project Add Error:", err.message);
      res.status(500).json({ message: "Error adding project" });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: "Error fetching projects" });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting project" });
  }
};