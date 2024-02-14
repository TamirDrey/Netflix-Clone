import { Model } from "mongoose";
import { ContentDocument } from "./ContentDocument";

// Interface representing the Content model
export interface ContentModel extends Model<ContentDocument> {}
