import User from "../models/user/user";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils";
import { Request, Response } from "express";

export const signup = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.status(400).json({ message: "User already exists" });
    return;
  }

  const newUser = new User({
    name: name,
    email: email,
    password: bcrypt.hashSync(password),
  });

  const user = await newUser.save();

  res.status(201).send({
    token: generateToken(user),
  });
};

export const signin = async (req: Request, res: Response): Promise<void> => {
  const { password, email } = req.body;

  const user = await User.findOne({ email });
  if (user && bcrypt.compareSync(password, user.password)) {
    res.send({
      token: generateToken(user),
    });
  } else {
    res.status(401).send({ message: "Invalid User/Password" });
  }
};

export const likeContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { contentId, userId } = req.body;

  const user = await User.findById(userId);

  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  if (user.likedContents.includes(contentId)) {
    res.status(400).json({ message: "Content already liked" });
    return;
  }

  user.likedContents.push(contentId);
  await user.save();

  res.status(200).json({ message: "Liked" });
};

export const getUsersLikedContents = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.body;

  const user = await User.findById(userId).populate("likedContents").exec();

  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  res.status(200).json(user.likedContents);
};
