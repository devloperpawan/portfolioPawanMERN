
const express = require("express");
const multer = require("multer");
const { addProject, getProjects, deleteProject } = require("../controllers/projectController");
const { verifyAdmin } = require("../middleware/auth");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

router.post("/project", verifyAdmin, upload.single("image"), addProject);
router.get("/project", getProjects);
router.delete("/project/:id", verifyAdmin, deleteProject);

module.exports = router;
