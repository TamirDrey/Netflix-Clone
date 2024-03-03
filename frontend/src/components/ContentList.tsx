import React from "react";
import { IContent } from "../types/content-types";
import ContentCard from "./ContentCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface ContentListProps {
  data: IContent[];
  title?: string;
}

const ContentList: React.FC<ContentListProps> = ({ data, title }) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft + 500;
  };

  return (
    <div>
      <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
        {title}
      </p>
      <div className="relative flex items-center">
        <ChevronLeftIcon
          className="opacity-50 cursor-pointer hover:opacity-100 w-12 h-12"
          onClick={slideLeft}
        />
        <div
          id="slider"
          className="w-full h-full  scroll whitespace-nowrap scroll-smooth scrollbar-hide "
        >
          <div className="flex flex-row  gap-2">
            {data.map((item) => (
              <ContentCard
                key={item._id}
                genre={item.genre}
                imgThumb={item.imgThumb}
                duration={item.duration}
                trailer={item.trailer}
                _id={item._id}
              />
            ))}
          </div>
        </div>
        <ChevronRightIcon
          className="opacity-50 cursor-pointer hover:opacity-100 w-12 h-12"
          onClick={slideRight}
        />
      </div>
    </div>
  );
};

export default ContentList;
