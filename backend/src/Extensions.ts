import { IContent } from "./types/content-type";
import { ContentDocument } from "./models/content/ContentDocument";
import { UserDocument } from "./models/user/UserDocument";
import { IUser } from "./types/user-type";

export class Extensions {
  static AsIContent(obj: ContentDocument): IContent {
    return {
      _id: obj._id,
      title: obj.title,
      description: obj.description,
      img: obj.img,
      imgTitle: obj.imgTitle,
      imgThumb: obj.imgThumb,
      imgVertical: obj.imgVertical,
      trailer: obj.trailer,
      movie: obj.movie,
      duration: obj.duration,
      year: obj.year,
      limit: obj.limit,
      genre: obj.genre,
      isSeries: obj.isSeries,
    };
  }

  static AsIUser(user: UserDocument): IUser {
    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      likedContent: user.likedContents || [],
    };
  }
}
