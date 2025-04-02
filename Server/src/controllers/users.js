import { User } from "../database/models/user.js";

//Get users
export const getUsers = async (req, res) => {
  try {
    const user = await User.find();

    res.status(200).json({
      success: true,
      message: "User found!",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to get users",
    });
  }
};

