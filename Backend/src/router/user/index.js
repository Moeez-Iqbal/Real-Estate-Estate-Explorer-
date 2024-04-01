
import { Router } from "express";
import userController from "../../controller/user/index.js";

const userRouter = Router();

userRouter.put('/update/:userId', userController.update);
userRouter.get('/get/:userId', userController.getUser);

export default userRouter;
