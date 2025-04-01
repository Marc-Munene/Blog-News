import { Blog } from "../database/models/blog.js";

//Get blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("Category");
  } catch (error) {}
};

//post blogs
export const postBlogs = async (req, res) => {
  try {
    const { title, description, image, content } = req.body;

    const blogData = { title, description, image, content };

    const newBlog = await Blog.create(blogData);
    
    if (!newBlog) {
      return res.status(400).json({
        success: false,
        message: "Failed to create blog",
      });
    }

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: newBlog,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

//put blogs
export const putBlogs = (req, res) => {
  res.json({
    message: "Updating Blogs",
  });
};

//delete blogs
export const deleteBlogs = (req, res) => {
  res.json({
    message: "Deleting Blogs",
  });
};
