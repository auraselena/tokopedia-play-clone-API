const express = require("express");
const router = express.Router();

const videoController = require("../controller/videoController");
const productController = require("../controller/productController");
const commentController = require("../controller/commentController");

// video
router.get("/all-videos", videoController.allVideos);
router.get("/video-searched", videoController.videoSearched);
router.get("/one-video/:videoID", videoController.aVideo);
router.post("/insert-video", videoController.insertVideo);

// product
router.post("/insert-product", productController.insertProduct);
router.get("/products/:videoID", productController.productList);
router.get("/products", productController.allProducts);

// comment
router.post("/upload-comment/:videoID", commentController.insertComment);
router.get("/comments/:videoID", commentController.comments);

module.exports = router;
