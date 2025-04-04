const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  task: { type: String, required: true,trim: true, minlength: 1, maxlength: 255},
});

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
