
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    number: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#059669",
    },
    image: {
      type: String,
      default: "",
    },
    technologies: {
      type: [String],
      default: [],
    },
    syllabus: {
      type: [String],
      default: [],
    },
    outcomes: {
      type: [String],
      default: [],
    },
    project: {
      type: String,
      default: "",
    },
    prerequisites: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseSchema);
