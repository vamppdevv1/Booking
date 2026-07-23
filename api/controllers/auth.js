import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";
//register
export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    next(err);
  }
};
//login
export const login = async (req, res, next) => {
  try {
    const foundUser = await User.findOne({ username: req.body.username });
    if (!foundUser) return next(createError(404, "User not found!"));
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      foundUser.password,
    );
    if (!isPasswordCorrect)
      return next(createError(404, "Wrong password or username"));
    const token = jwt.sign(
      { id: foundUser._id, isAdmin: foundUser.isAdmin },
      process.env.JWT_SECRET,
    );
    const { password, isAdmin, ...otherDetails } = foundUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};
