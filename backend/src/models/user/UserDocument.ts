import { Document, Schema } from "mongoose";

// Interface representing the User document in MongoDB

export interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  profilePicture: String;
  createdAt: Date;
  updatedAt: Date;
  likedContents: [{ type: Schema.Types.ObjectId; ref: "Content" }];
}
