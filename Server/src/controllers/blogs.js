//Get blogs
export const getBlogs = (req, res) => {
  res.json({
    message: "Getting Blogs ",
  });
};

//post blogs
export const postBlogs = (req, res) => {
  res.json({
    message: "Creating Blogs",
  });
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
