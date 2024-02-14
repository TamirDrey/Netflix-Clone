import User from "../models/user/user";
import Content from "../models/content/content";
import { Request, Response } from "express";
import { data } from "../data";

const seedData = async (req: Request, res: Response): Promise<void> => {
  await User.deleteMany({});
  await Content.deleteMany({});

  const users = await User.insertMany(data.users);
  const content = await Content.insertMany(data.content);

  res.send({ users, content });
};

export default seedData;
