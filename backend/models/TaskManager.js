const mongoose = require("mongoose");
const TaskManagerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    default: "",
  },
  category: {
    type: String,
    enum: ["work", "private", "goals"],
    required: true,
  },
  date: {
    type: Date,
    required: false,
  },
  recurring: {
    type: String,
    enum: ["none", "daily", "weekly", "monthly"],
    default: "none",
  },
  priority: {
    type: String,
    enum: ["high", "medium", "low"],
    default: "medium",
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  }
}, {
  timestamps: true  // This adds createdAt and updatedAt automatically
});

module.exports = mongoose.model("TaskManager", TaskManagerSchema);