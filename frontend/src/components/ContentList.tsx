import React from "react";
import { IContent } from "../types/content-types";
import ContentCard from "./ContentCard";

interface ContentListProps {
  data: IContent[];
  title?: string;
}

const ContentList: React.FC<ContentListProps> = ({ data, title }) => {

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {data.map((item) => (
            <ContentCard
              key={item._id}
              genre={item.genre}
              imgThumb={item.imgThumb}
              duration={item.duration}
              _id = {item._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentList;
