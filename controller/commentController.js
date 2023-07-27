const Comment = require("../model/commentModel");

module.exports = {
  insertComment: async (req, res) => {
    try {
      const { videoID } = req.params;
      const { username, comment } = req.body;

      const newComment = new Comment({
        videoID,
        username,
        comment,
      });

      const saveComment = newComment.save();
      res.json({ status: "Success", data: newComment, message: "Upload comment success!" });
    } catch (error) {
      console.error();
      res.status(500).json({ status: "Fail", message: error.message });
    }
  },
  comments: async (req, res) => {
    try {
      const { videoID } = req.params;

      const commentList = await Comment.find({ videoID });
      const data = {};
      data.username = commentList[0].username;
      data.comment = commentList[0].comment;
      data.timestamps = commentList[0].timestamp;

      res.json({ success: true, data: data, message: "Get comments success!" });
    } catch (error) {
      console.error();
      res.status(500).send({ success: false, message: error.message });
    }
  },
};
