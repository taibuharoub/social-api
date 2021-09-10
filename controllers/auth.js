/* eslint-disable no-unused-vars */
import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const register = async (req, res, next) => {
  const { username, password, email } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    !user && res.status(404).json("User not found!");

    const validPassword = await bcrypt.compare(password, user?.password);
    !validPassword && res.status(400).json("Wrong User Credintials");

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
