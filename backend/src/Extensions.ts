import { IContent } from "./types/content-type";
import { ContentDocument } from "./models/content/ContentDocument";

export  class  Extensions {

    static AsIContent(obj :ContentDocument ) : IContent{
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
            isSeries: obj.isSeries
        };
    }
}