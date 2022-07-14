const express = require("express");
const router = express.Router();
const Website = require("../models/websiteModel");

// Endpoint to get all websites. GET => /api/websites
router.get("/", async (req, res) => {
  try {
    const websites = await Website.find().populate({
      path: "user_id",
      select: "-password",
    });
    if (websites) {
      res.status(200).json({ success: true, data: websites });
      return;
    } else {
      res.status(200).json({ success: false, message: tasks });
      return;
    }
  } catch (e) {
    res.status(400).json({ success: false, message: `${e.message}` });
    return;
  }
});

// Endpoint to get a single website by :id. GET => /api/websites/:id
router.get("/:id", async (req, res) => {
  try {
    const website = await Website.findById(req.params.id);
    if (website) {
      res.status(200).json({ success: true, data: website });
      return;
    } else {
      res.status(200).json({ success: false, message: website });
      return;
    }
  } catch (e) {
    res.status(400).json({ success: false, message: `${e.message}` });
  }
});

// Endpoint to create a new website. POST => /api/websites/
router.post("/", async (req, res) => {
  try {
    const website = new Website(req.body);
    await website.save();
    res.status(200).json({ success: true, data: website });
  } catch (e) {
    res.status(400).json({ success: false, message: `${e}` });
    return;
  }
});

// Endpoint to update a single website by :id. PUT => /api/websites/:id
router.put("/:id", async (req, res) => {});

//Endpoint to delete a single website by :id. DELETE => /api/websites/:id
router.delete("/:id", async (req, res) => {});

module.exports = router;
