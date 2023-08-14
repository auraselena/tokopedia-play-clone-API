const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  videoID: {
    required: true,
    type: Number,
  },
  username: {
    default: "user",
    type: String,
  },
  comment: {
    required: true,
    type: String,
  },
  timestamp: {
    required: true,
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
