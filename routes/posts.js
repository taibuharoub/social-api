import express from "express";
import {
  createPost,
  updatePost,
  deletePost,
  likeOrDislikePost,
  getPost,
  getTimeline,
} from "../controllers/posts.js";
const router = express.Router();

router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.get("/:id", getPost);
router.get("/timeline/all", getTimeline);
router.put("/:id/like", likeOrDislikePost);

export default router;
