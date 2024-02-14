import { Model } from "mongoose";
import { UserDocument } from "./UserDocument";

// Interface representing the User model
export interface UserModel extends Model<UserDocument> {}
