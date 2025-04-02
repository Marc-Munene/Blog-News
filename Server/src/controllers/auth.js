import { compare, hash } from "bcrypt";
import { User } from "../database/models/user.js";

//Login
export const login = async (req, res) => {
  try {
    const { password, userName } = req.body;

    const user = await User.findOne({ userName });

    if (!user) {
      throw new Error("Invalid credentials!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordsMatch) {
      throw new Error("Invalid credentials");
    }
    return res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "someting went wrong!",
    });
  }
};

//SignUp
export const signUp = async (req, res) => {
  try {
    const { name, email, userName, phone, password } = req.body;

    const hashedPassword = await hash(password, 10);

    req.body.password = hashedPassword;

    const newUser = await User.create(req.body);

    return res.json({
      success: true,
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed!",
    });
  }
};
