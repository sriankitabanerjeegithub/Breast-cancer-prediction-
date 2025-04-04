// const express = require("express");
// const router = express.Router();

// // Example Task Route
// router.get("/", (req, res) => {
//     res.json({ message: "Task Routes Working!" });
// });

// module.exports = router;

const express = require("express");
const Task = require("../models/Task"); // Import Task model
const router = express.Router();

// ✅ Route to get all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

// ✅ Route to add a new task
router.post("/add", async (req, res) => {
  try {
    const newTask = new Task({ task: req.body.task });
    await newTask.save();
    res.status(201).json({ message: "Task added successfully", task: newTask });
  } catch (err) {
    res.status(500).json({ error: "Failed to add task" });
  }
});

// ✅ Route to delete a task
router.delete("/delete/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete task" });
  }
});

module.exports = router;
