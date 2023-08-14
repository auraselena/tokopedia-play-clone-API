const Video = require("../model/videoModel");


async function allVideos (req, res) {
  try {
    const videoData = await Video.find();
    res.json({data: videoData});
  } catch (error) {
    console.error("Error fetching video data:", error);
    res.status(500).send({ success: false, message: "Failed to fetch video data." });
  }
};

async function videoSearched (req, res) {
  try {
    const id = req.query.id;
    const videoData = await Video.find({videoID:id});
    res.json({data: videoData});
  } catch (error) {
    console.error("Error fetching video data:", error);
    res.status(500).send({ success: false, message: "Failed to fetch video data." });
  }
};

async function insertVideo (req, res) {
  try {
    const {videoID, thumbnailUrl} = req.body;

    const newVideo = new Video({
      videoID,
      thumbnailUrl
    })
    const savedVideo = await newVideo.save()

    res.json(savedVideo)
  } catch (error) {
    console.error()
    res.status(500).json(error.message)
  }
}

const aVideo = async (req, res) => {
  try {
    const videoId = req.params.videoID;
    const videoDetail = await Video.find({ videoID: videoId });
    res.send({ success: true, message: "Get video detail success!", videoDetail });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ success: false, message: "Something is wrong!" });
  }
};

module.exports = { allVideos, aVideo, insertVideo, videoSearched };
