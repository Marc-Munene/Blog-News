import express from "express";

const app = express();

const PORT = process.env.PORT;

//Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Home Route",
  });
});

//Get blogs
app.get("/blogs", (req, res) => {
  res.json({
    message: "Getting Blogs ",
  });
});

//post blogs
app.post("/blogs", (req, res) => {
  res.json({
    message: "Creating Blogs",
  });
});

//put blogs
app.put("/blogs", (req, res) => {
  res.json({
    message: "Updating Blogs",
  });
});

//delete blogs
app.delete("/blogs", (req, res) => {
  res.json({
    message: "Deleting Blogs",
  });
});

app.listen(PORT, () => {
  console.log(`working Successfully at port no ${PORT}`);
});
