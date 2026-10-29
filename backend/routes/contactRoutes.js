const express = require("express");
const router = express.Router();

const {
  createContact,
  getAllContacts,
  deleteContact,
} = require("../controllers/contactController");

const { adminAuth } = require("../middleware/adminAuth");

// Public route: website visitors can submit enquiries
router.post("/", createContact);

// Protected routes: only logged-in admins
router.get("/", adminAuth, getAllContacts);
router.delete("/:id", adminAuth, deleteContact);

module.exports = router;