import mongoose, { Document, Schema, Model } from "mongoose";

// Interface representing the User document in MongoDB
export interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  likedContents: Schema.Types.ObjectId[];
}

// Interface representing the User model
interface UserModel extends Model<UserDocument> {}

// Define the user schema
const userSchema = new Schema<UserDocument, UserModel>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    likedContents: [{ type: Schema.Types.ObjectId, ref: "Content" }],
  },
  {
    timestamps: true,
  }
);

// Define and export the User model
const User = mongoose.model<UserDocument, UserModel>("User", userSchema);

export default User;
