import express from "express"
import { isAuth, loginUser, logoutUser, registerUser } from "../controllers/userController.js";
import authUser from "../middleware/authUser.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/is-auth", authUser, isAuth);
userRouter.post("/logout", authUser, logoutUser);


export default userRouter