import { Category } from "../database/models/category.js";

export const postCategories = async (req, res) => {
  try {
    const { title, status } = req.body;

    const categoryData = { title, status };

    const category = await Category.create(categoryData);

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Cannot add category",
    });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(200).json({
      success: true,
      message: "Categories fetched successfully",
      data: categories,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Cannot fetch categories",
    });
  }
};

export const putCategory = async (req, res) => {
  try {
    const blogId = req.query.id;
    const { title, status } = req.body;

    const updatedCategory = await Category.findByIdAndUpdate(
      { _id: blogId },
      req.body,
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Category updated successfully",
      data: updatedCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Cannot update category",
    });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const blogId = req.query.id;

    const deletedCategory = await Category.deleteOne({ _id: blogId });

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
      deletedCount: deletedCategory.deletedCount,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Cannot delete category",
    });
  }
};
