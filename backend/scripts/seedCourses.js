
require("dotenv").config();
const mongoose = require("mongoose");
const Course = require("../models/Course");

const courses = [
  {
    number: "01",
    title: "Full Stack Development",
    description:
      "Build complete modern web applications from frontend interfaces to powerful backend systems.",
    level: "Advanced",
    duration: "6 Months",
    color: "#059669",
    image: "/images/course-fullstack.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    syllabus: [
      "HTML, CSS and responsive layouts",
      "JavaScript fundamentals and ES6+",
      "React components, hooks and routing",
      "Node.js, Express and REST APIs",
      "MongoDB and Mongoose",
      "Authentication and full-stack project deployment",
    ],
    outcomes: [
      "Build responsive frontend applications",
      "Create and connect REST APIs",
      "Store and manage data with MongoDB",
      "Develop a complete full-stack project",
    ],
    project:
      "Build and deploy a complete full-stack web application.",
    prerequisites:
      "Basic computer skills; prior coding experience is helpful but not required.",
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "Create responsive, interactive and user-friendly web experiences using modern frontend technologies.",
    level: "Intermediate",
    duration: "4 Months",
    color: "#2563EB",
    image: "/images/course-frontend.jpg",
    technologies: ["HTML", "CSS", "React"],
    syllabus: [
      "HTML structure and semantic elements",
      "CSS styling, Flexbox and Grid",
      "Responsive design for mobile and desktop",
      "JavaScript and DOM interaction",
      "React components, props and state",
      "Build an interactive frontend project",
    ],
    outcomes: [
      "Create responsive websites",
      "Build interactive user interfaces",
      "Understand reusable React components",
      "Improve accessibility and usability",
    ],
    project:
      "Create a responsive multi-page website with interactive React components.",
    prerequisites:
      "No advanced coding knowledge required; basic computer skills are useful.",
  },
  {
    number: "03",
    title: "Backend Development",
    description:
      "Learn to design APIs, manage databases and build secure scalable server-side applications.",
    level: "Intermediate",
    duration: "4 Months",
    color: "#0F766E",
    image: "/images/course-backend.png",
    technologies: ["Node.js", "Express", "MongoDB"],
    syllabus: [
      "JavaScript for server-side development",
      "Node.js runtime and npm",
      "Express routes and middleware",
      "REST API design and testing",
      "MongoDB, Mongoose and data validation",
      "Authentication, authorization and error handling",
    ],
    outcomes: [
      "Design and build REST APIs",
      "Connect applications to databases",
      "Implement authentication and authorization",
      "Structure maintainable backend services",
    ],
    project:
      "Build a secure REST API connected to a MongoDB database.",
    prerequisites:
      "Basic programming knowledge is recommended.",
  },
  {
    number: "04",
    title: "UI / UX Design",
    description:
      "Transform ideas into intuitive digital experiences through research, design systems and prototyping.",
    level: "Beginner",
    duration: "3 Months",
    color: "#7C3AED",
    image: "/images/course-uiux.webp",
    technologies: ["Figma", "UX", "Prototyping"],
    syllabus: [
      "Design thinking and user research",
      "User personas and journey mapping",
      "Information architecture and user flows",
      "Wireframing and visual hierarchy",
      "UI design systems and responsive layouts",
      "Figma prototyping and usability testing",
    ],
    outcomes: [
      "Understand user needs and design goals",
      "Create wireframes and high-fidelity screens",
      "Build clickable prototypes in Figma",
      "Present design decisions clearly",
    ],
    project:
      "Design and prototype a user-friendly app or website experience.",
    prerequisites:
      "No design experience required; curiosity and creativity are welcome.",
  },
];

const seedCourses = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing from backend/.env");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully!");

    for (const course of courses) {
      await Course.updateOne(
        { title: course.title },
        { $set: course },
        { upsert: true, runValidators: true }
      );

      console.log(`Saved: ${course.title}`);
    }

    console.log("All 4 courses seeded successfully!");
  } catch (error) {
    console.error("Course seeding failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

seedCourses();
