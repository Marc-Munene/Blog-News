import { Router } from "express";
import { getUsers } from "../controllers/users.js";

const usersRoute = Router();

usersRoute.get("/users", getUsers);

export { usersRoute };
