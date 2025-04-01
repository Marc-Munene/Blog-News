import { Router } from "express";
import {
  deleteBlogs,
  getBlogs,
  getSingleBlog,
  postBlogs,
  putBlogs,
} from "../controllers/blogs.js";

const blogRouter = Router();

blogRouter
  .route("/blogs")
  .get(getBlogs)
  .get(getSingleBlog)
  .post(postBlogs)
  .put(putBlogs)
  .delete(deleteBlogs);

export { blogRouter };
