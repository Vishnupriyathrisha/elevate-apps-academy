const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

// Contact Routes
const contactRoutes = require("./routes/contactRoutes");
const adminRoutes = require("./routes/adminRoutes");
const courseRoutes = require("./routes/courseRoutes");

app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/courses", courseRoutes);

// Root Health Check
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Elevate App Academy backend is running!",
  });
});

// API Health Check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is working successfully!",
  });
});

// Server Configuration
const PORT = process.env.PORT || 5000;

// Connect MongoDB and Start Server
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully!");

    app.listen(PORT, () => {
      console.log(
        `Elevate backend running on http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error(
      "MongoDB connection failed:",
      error.message
    );

    process.exit(1);
  }
};

startServer();