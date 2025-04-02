import { Router } from "express";
import {
  deleteCategory,
  getCategories,
  postCategories,
  putCategory,
} from "../controllers/categories.js";

const categoryRouter = Router();

categoryRouter
  .route("/category")
  .get(getCategories)
  .post(postCategories)
  .put(putCategory)
  .delete(deleteCategory);

export { categoryRouter };
