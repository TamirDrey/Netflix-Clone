import mongoose, { Schema } from "mongoose";
import { ContentDocument } from "./ContentDocument";
import { ContentModel } from "./ContentModel";

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
