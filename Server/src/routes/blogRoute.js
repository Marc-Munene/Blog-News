import { Router } from "express";
import {
  deleteBlogs,
  getBlogs,
  postBlogs,
  putBlogs,
} from "../controllers/blogs.js";

const blogRouter = Router();

blogRouter
  .route("/blogs")
  .get(getBlogs)
  .post(postBlogs)
  .put(putBlogs)
  .delete(deleteBlogs);

export { blogRouter };
