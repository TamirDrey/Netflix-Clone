import mongoose, { Document, Schema, Model } from "mongoose";

// Interface representing the Content document in MongoDB
interface ContentDocument extends Document {
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

// Interface representing the Content model
interface ContentModel extends Model<ContentDocument> {}

// Define the content schema
const contentSchema = new Schema<ContentDocument, ContentModel>(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    imgTitle: { type: String, required: true },
    imgThumb: { type: String, required: true },
    imgVertical: { type: String, required: true },
    trailer: { type: String, required: true },
    movie: { type: String, required: true },
    duration: { type: String, required: true },
    year: { type: String, required: true },
    limit: { type: String, required: true },
    genre: { type: String, required: true },
    isSeries: { type: Boolean, required: true },
  },
  { timestamps: true }
);

// Define and export the Content model
const Content = mongoose.model<ContentDocument, ContentModel>(
  "Content",
  contentSchema
);

export default Content;
