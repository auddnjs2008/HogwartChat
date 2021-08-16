import express from "express";
import { createToken, createUser } from "../controller/users.controller";

const userRouter = express.Router();

userRouter.post("/login", createToken);
userRouter.post("/register", createUser);
export default userRouter;
