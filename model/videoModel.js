const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  videoID: {
    required: true,
    type: Number,
  },
  thumbnailUrl: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Video", videoSchema);
