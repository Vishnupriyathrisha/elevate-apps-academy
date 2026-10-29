const Contact = require("../models/Contact");

// Submit contact enquiry
const createContact = async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !course || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    // Save enquiry to MongoDB
    const enquiry = await Contact.create({
      name,
      email,
      phone,
      course,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Your enquiry has been submitted successfully!",
      data: enquiry,
    });
  } catch (error) {
    console.error("Contact enquiry error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to submit enquiry. Please try again.",
    });
  }
};

// Get all enquiries (latest first)
const getAllContacts = async (req, res) => {
  try {
    const enquiries = await Contact.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: enquiries.length,
      data: enquiries,
    });
  } catch (error) {
    console.error("Fetch enquiries error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch enquiries.",
    });
  }
};

// Delete an enquiry by ID
const deleteContact = async (req, res) => {
  try {
    const enquiry = await Contact.findByIdAndDelete(req.params.id);

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Enquiry deleted successfully.",
    });
  } catch (error) {
    console.error("Delete enquiry error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to delete enquiry.",
    });
  }
};

module.exports = {
  createContact,
  getAllContacts,
  deleteContact,
};