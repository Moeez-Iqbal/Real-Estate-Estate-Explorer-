import UserModel from "../../model/user/index.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const authController =  {
  SignUp: async (req, res) => {

    const payload = req.body;
    const saltRounds = 10;
    const hPassword = await bcrypt.hash(payload.password, saltRounds);

   const user = await UserModel.create({
    username: payload.username,
    email: payload.email,
    password: hPassword
   });

   res.json({
    message: "User is SignUp"
   })
  }
}

export default authController