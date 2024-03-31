import { Router } from "express";
import authRouter from "./Auth/index.js";
import userRouter from "./user/index.js";

const allRouter = Router();

allRouter.use(authRouter);
allRouter.use(userRouter);

export default allRouter;
