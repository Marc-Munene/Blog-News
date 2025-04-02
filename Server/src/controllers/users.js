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

//Post Users
export const postUsers = async (req, res) => {
  try {
    const { username, password } = req.body;

    const userData = { username, password };

    const newUser = await User.create(userData);

    res.status(200).json({
      success: true,
      message: "User Added!",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to post users",
    });
  }
};
