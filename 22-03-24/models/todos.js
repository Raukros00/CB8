const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
    default: "Do something",
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  user: {
    type: String,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
