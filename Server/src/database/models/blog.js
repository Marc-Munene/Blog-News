import { Schema, model } from "mongoose";
import { Category } from "./category.js";

const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    content: { type: String, required: true },
    status: { type: String, enum: ["draft", "published"], default: "draft" },
    category: { type: Schema.Types.ObjectId, ref: "category" },
  },
  {
    timestamps: true,
  }
);

const Blog = new model("blog", blogSchema);

export { Blog };
