import User from "../models/user/user";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils";
import { Request, Response } from "express";
import { RequestWithUser } from "../types/requests-type";
import { IUser } from "../types/user-type";
import Content from "../models/content/content";
import { Extensions } from "../Extensions";

//@route POST /api/v1/users/signup
//@access public
export const signup = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password, profilePicture } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.status(400).json({ message: "User already exists" });
  }

  const newUser = new User({
    name: name,
    email: email,
    profilePicture: profilePicture,
    password: bcrypt.hashSync(password),
  });

  await newUser.save();

  res.status(201).send({ message: "successfully registered" });
};

//@route POST /api/v1/users/signin
//@access public
export const signin = async (req: Request, res: Response): Promise<void> => {
  const { password, email } = req.body;

  const user = await User.findOne({ email }).populate("likedContents").exec();

  if (user && bcrypt.compareSync(password, user.password)) {
    res.send({
      user: Extensions.AsIUser(user),
      token: generateToken(user),
    });
  } else {
    res.status(401).send({ message: "Invalid User/Password" });
  }
};

//@route GET /api/v1/users/auth-me
//@access private
export const getUser = async (
  req: RequestWithUser,
  res: Response
): Promise<void> => {
  const token = req.headers.authorization;
  const email = req.user?.email;

  if (!token) {
    res.status(401).send({ message: "Not authorized, no token" });
  }
  const user = await User.findOne({ email }).populate("likedContents").exec();
  if (user) {
    res.status(200).send({ user: Extensions.AsIUser(user) });
  }
};

//@route POST /api/v1/users/likeContent
//@access private
export const likeContent = async (
  req: RequestWithUser,
  res: Response
): Promise<void> => {
  const { contentId } = req.body;
  const user = req.user;

  const userDB = await User.findById(user?._id)
    .populate("likedContents")
    .exec();

  if (!userDB) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  const contentToAdd: any = await Content.findById(contentId);
  if (!contentToAdd) {
    res.status(404).json({ message: "Content not found" });
    return;
  }

  const contentIndex = userDB.likedContents.findIndex(
    (content: any) => String(content._id) === contentId
  );

  if (contentIndex === -1) {
    // If contentId not found, add it to the list
    userDB.likedContents.push(contentToAdd);
  } else {
    // If contentId found, remove it from the list
    userDB.likedContents.splice(contentIndex, 1);
  }

  await userDB.save();

  res.status(200).send({ id: contentId, user: Extensions.AsIUser(userDB) });
};

//@route GET /api/v1/users/getUsersLikedContents
//@access private
export const getUsersLikedContents = async (
  req: RequestWithUser,
  res: Response
): Promise<void> => {
  const user = req.user;

  const userDB = await User.findById(user?._id)
    .populate("likedContents")
    .exec();

  if (!userDB) {
    res.status(404).json({ message: "User not found" });
    return;
  }
  res.status(200).send(userDB.likedContents);
};
