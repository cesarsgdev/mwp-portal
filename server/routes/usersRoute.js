const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// Endpoint to get all users. GET => /api/users
router.get("/", async (req, res) => {
  try {
    const users = await User.find({}, "-password");
    if (users) {
      res.status(200).json({ success: true, data: users });
      return;
    } else {
      res.status(200).json({ success: false, message: users });
      return;
    }
  } catch (e) {
    res.status(400).json({ success: false, message: `${e.message}` });
    return;
  }
});

// Endpoint to get a single user by :id. GET => /api/users/:id
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id, "-password").populate(
      "devs",
      "-password"
    );
    if (user) {
      res.status(200).json({ success: true, data: user });
      return;
    } else {
      res.status(200).json({ success: false, message: user });
      return;
    }
  } catch (e) {
    res.status(400).json({ success: false, message: `${e.message}` });
    return;
  }
});

// Endpoint to create a single user. POST => /api/users
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).json({ success: true, data: user });
    return;
  } catch (e) {
    res.status(400).json({ success: false, message: `${e.message}` });
    return;
  }
});

// Endpoint to update a single user by :id. PUT => /api/users/:id
router.put("/:id", async (req, res) => {});

//Endpoint to delete a single user by :id. PUT=> /api/users:id
router.delete("/:id", async (req, res) => {});

module.exports = router;
