import UserModel from "../../model/user/index.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const authController = {
  SignUp: async (req, res) => {

    const payload = req.body;
    const saltRounds = 10;
    const hPassword = await bcrypt.hash(payload.password, saltRounds);

    const user = await UserModel.create({
      username: payload.username,
      email: payload.email,
      password: hPassword
    });

    res.status(201).json({
      message: "User is signed up"
    });
  },

  SignIn: async (req, res) => {
    const payload = req.body;

    const user = await UserModel.findOne({
      where: { email: payload.email }
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const result = await bcrypt.compare(payload.password, user.password);

    if (!result) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    const token = jwt.sign({
      id: user.id,
      username: user.username,
      email: user.email
    },
      process.env.JWT_SECRET, {
      expiresIn: "50m"
    });

    res.json({
      message: "User logged in",
      token,
    });
  }
}

export default authController;