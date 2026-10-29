require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const readline = require("readline");

const Admin = require("../models/Admin");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (question) =>
  new Promise((resolve) => rl.question(question, resolve));

const createAdmin = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing in .env");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected!");

    const name = (await ask("Enter admin name: ")).trim();
    const email = (await ask("Enter admin email: "))
      .trim()
      .toLowerCase();
    const password = await ask("Enter admin password: ");

    if (!name || !email || !password) {
      throw new Error("All fields are required.");
    }

    if (password.length < 12) {
      throw new Error(
        "Use a password with at least 12 characters."
      );
    }

    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      console.log("An admin with this email already exists.");
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await Admin.create({
      name,
      email,
      password: hashedPassword,
    });

    console.log("Admin account created successfully!");
    console.log(`Admin email: ${email}`);
  } catch (error) {
    console.error("Admin creation failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect().catch(() => {});
    rl.close();
  }
};

createAdmin();