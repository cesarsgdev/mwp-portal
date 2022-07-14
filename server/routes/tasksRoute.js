const express = require("express");
const router = express.Router();
const Task = require("../models/taskModel");

// Endpoint to get all tasks. GET => /api/tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find()
      .populate({ path: "dev_id", select: "-password -devs" })
      .populate({ path: "user_id", select: "-password" })
      .populate("website_id");
    if (tasks) {
      res.status(200).json({ success: true, data: tasks });
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

// Endpoint to get a single task by :id. GET => /api/tasks/:id
router.get("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
      .populate({ path: "dev_id", select: "-password -devs" })
      .populate({ path: "user_id", select: "-password" })
      .populate("website_id");
    if (task) {
      res.status(200).json({ success: true, data: task });
      return;
    } else {
      res.status(200).json({ success: false, message: task });
      return;
    }
  } catch (e) {
    res.status(400).json({ success: false, message: `${e.message}` });
  }
});

// Endpoint to create a task. POST => /api/tasks
router.post("/", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(200).json({ success: true, data: task });
    return;
  } catch (e) {
    res.status(400).json({ success: false, message: `${e.message}` });
    return;
  }
});

// Endpoint to update a single task by :id. PUT => /api/tasks/:id
router.put("/", async (req, res) => {});

// Endpoint to delete a single task by :id. DELETE => /api/tasks/:id
router.delete("/", async (req, res) => {});

module.exports = router;
