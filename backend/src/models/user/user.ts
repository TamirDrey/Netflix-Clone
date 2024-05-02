import mongoose, { Schema } from "mongoose";
import { UserDocument } from "./UserDocument";
import { UserModel } from "./UserModel";

// Define the user schema
const userSchema = new Schema<UserDocument, UserModel>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String, required: false },
    likedContents: [{ type: Schema.Types.ObjectId, ref: "Content" }],
  },
  {
    timestamps: true,
  }
);

// Define and export the User model
const User = mongoose.model<UserDocument, UserModel>("User", userSchema);

export default User;
