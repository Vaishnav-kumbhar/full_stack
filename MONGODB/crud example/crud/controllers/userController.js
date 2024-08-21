const User = require("../models/userModel.js");
exports.home = (req, res) => {
  res.send("HELLO WORLD");
};

exports.createUser = async (req, res) => {
  // extract info
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      throw new Error("Name and email are required");
    }

    const userExists = User.findOne({ email });
    if (userExists) {
      throw new Error("user allready exist!");
    }

    const user = await User.create({
      name,
      email,
    });

    res.status(201).json({
      success: true,
      message: "User created Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      uccess: true,
      message: users,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

exports.editUser = async (req, res) => {
  try {
    const users = await User.find({});
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "user updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "error",
      error,
    });
  }
};

exports.deleteUsers = async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
