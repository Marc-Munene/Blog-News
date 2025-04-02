import express from "express";
import { getHome } from "./controllers/home.js";
import { blogRouter } from "./routes/blogRoute.js";
import { connectDB } from "./database/config.js";
import { categoryRouter } from "./routes/categoryRourte.js";

const app = express();

const PORT = process.env.PORT;

//middleware
app.use(express.json());

//connecting to database
connectDB();

//Home Route
app.get("/", getHome);

//Routers
app.use("/api", blogRouter, categoryRouter);

app.listen(PORT, () => {
  console.log(`working Successfully at port no ${PORT}`);
});
