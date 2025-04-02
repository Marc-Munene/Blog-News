import { Router } from "express";
import { getUsers, postUsers } from "../controllers/users.js";

const usersRoute = Router();

usersRoute.route("/users").get(getUsers).post(postUsers);

export { usersRoute };
