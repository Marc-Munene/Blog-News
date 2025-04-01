import express from "express";
import { getHome } from "./controllers/home.js";

import { blogRouter } from "./routes/blogRoute.js";
import { connectDB } from "./database/config.js";

const app = express();

const PORT = process.env.PORT;

//connecting to database
connectDB();

//Home Route
app.get("/", getHome);

app.use("/api", blogRouter);

app.listen(PORT, () => {
  console.log(`working Successfully at port no ${PORT}`);
});
