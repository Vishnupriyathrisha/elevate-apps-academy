
const Course = require("../models/Course");

// GET all courses - public
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().sort({ number: 1 });

    res.status(200).json({
      success: true,
      count: courses.length,
      data: courses,
    });
  } catch (error) {
    console.error("Get courses error:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch courses",
    });
  }
};

// GET one course - public
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({ success: true, data: course });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid course ID",
    });
  }
};

// CREATE course - admin only
const createCourse = async (req, res) => {
  try {
    const {
      number,
      title,
      description,
      level,
      duration,
      color,
      image,
      technologies,
      syllabus,
      outcomes,
      project,
      prerequisites,
    } = req.body;

    if (
      !number?.trim() ||
      !title?.trim() ||
      !description?.trim() ||
      !level?.trim() ||
      !duration?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Number, title, description, level and duration are required.",
      });
    }

    const course = await Course.create({
      number: number.trim(),
      title: title.trim(),
      description: description.trim(),
      level: level.trim(),
      duration: duration.trim(),
      color,
      image,
      technologies,
      syllabus,
      outcomes,
      project,
      prerequisites,
    });

    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: course,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "A course with this title already exists.",
      });
    }

    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    console.error("Create course error:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create course",
    });
  }
};

// UPDATE course - admin only
const updateCourse = async (req, res) => {
  try {
    const updates = { ...req.body };

    // Do not allow MongoDB internal fields to be changed.
    delete updates._id;
    delete updates.__v;
    delete updates.createdAt;
    delete updates.updatedAt;

    const course = await Course.findByIdAndUpdate(
      req.params.id,
      updates,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      data: course,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "A course with this title already exists.",
      });
    }

    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    console.error("Update course error:", error.message);
    res.status(400).json({
      success: false,
      message: "Failed to update course",
    });
  }
};

// DELETE course - admin only
const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course deleted successfully",
      data: course,
    });
  } catch (error) {
    console.error("Delete course error:", error.message);
    res.status(400).json({
      success: false,
      message: "Failed to delete course",
    });
  }
};

module.exports = {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
