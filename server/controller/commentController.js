const Comment = require("../model/commentModel");

module.exports = {
  insertComment: async (req, res) => {
    try {
      const { videoID } = req.params;
      const { comment } = req.body;

      const newComment = new Comment({
        videoID,
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

      res.json({ success: true, data: commentList, message: "Get comments success!" });
    } catch (error) {
      console.error();
      res.status(500).send({ success: false, message: error.message });
    }
  },
};
