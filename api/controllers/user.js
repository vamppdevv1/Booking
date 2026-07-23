import User from "../models/User.js";
import { createError } from "../utils/error.js";
//update
export const updateUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { returnDocument: "after" },
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};
//delete
export const deleteUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.status(200).json("User has been deleted successfully");
  } catch (err) {
    next(err);
  }
};

//get one user
export const getOneUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    const foundUser = await User.findById(id);
    res.status(200).json(foundUser);
  } catch (err) {
    next(err);
  }
};

//get all users
export const getAllUsers = async (req, res, next) => {
  try {User
    const foundUsers = await User.find();
    res.status(200).json(foundUsers);
  } catch (err) {
    next(err);
  }
};
