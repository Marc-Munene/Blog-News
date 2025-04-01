import express from "express";
import { getHome } from "./controllers/home.js";
import {
  deleteBlogs,
  getBlogs,
  postBlogs,
  putBlogs,
} from "./controllers/blogs.js";

const app = express();

const PORT = process.env.PORT;

//Home Route
app.get("/", getHome);

//Get blogs
app.get("/blogs", getBlogs);

//post blogs
app.post("/blogs", postBlogs);

//put blogs
app.put("/blogs", putBlogs);

//delete blogs
app.delete("/blogs", deleteBlogs);

app.listen(PORT, () => {
  console.log(`working Successfully at port no ${PORT}`);
});
