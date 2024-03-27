import { Router } from "express";
import authRouter from "./Auth/index.js";

const allRouter = Router();

allRouter.use(authRouter);


export default allRouter;