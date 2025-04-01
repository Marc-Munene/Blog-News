import { Blog } from "../database/models/blog.js";

//Get all blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.status(200).json({
      success: true,
      message: "Blogs fetched successfully",
      data: blogs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Cannot get blogs",
    });
  }
};

//Get single blog
export const getSingleBlog = async (req, res) => {
  try {
    const blogId = req.params.id;

    const article = await Blog.findById(blogId);

    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog fetched successfully",
      data: article,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Cannot get blog",
    });
  }
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
