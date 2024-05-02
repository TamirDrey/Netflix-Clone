import { Document } from "mongoose";

// Interface representing the Content document in MongoDB
export interface ContentDocument extends Document {
  _id: string;
  title: string;
  description: string;
  img: string;
  imgTitle: string;
  imgThumb: string;
  imgVertical: string;
  trailer: string;
  movie: string;
  duration: string;
  year: string;
  limit: string;
  genre: string;
  isSeries: boolean;
  createdAt: Date;
  updatedAt: Date;
}
