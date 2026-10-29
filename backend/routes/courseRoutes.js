
const express = require("express");
const router = express.Router();

const {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

const { adminAuth } = require("../middleware/adminAuth");

// Public routes
router.get("/", getCourses);
router.get("/:id", getCourseById);

// Admin-only routes
router.post("/", adminAuth, createCourse);
router.put("/:id", adminAuth, updateCourse);
router.delete("/:id", adminAuth, deleteCourse);

module.exports = router;
