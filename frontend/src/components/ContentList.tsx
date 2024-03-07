import React from "react";
import { IContent } from "../types/content-types";
import ContentCard from "./ContentCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

interface ContentListProps {
  data: IContent[];
  title?: string;
}

const ContentList: React.FC<ContentListProps> = ({ data, title }) => {
  const { t } = useTranslation();

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
        {t(`selectBox.items.${title}`)}
      </p>
      <div className="flex items-center scrollbar-hide">
        <ChevronLeftIcon
          className=" opacity-50 scroll scroll-smooth cursor-pointer hover:opacity-100 w-20 h-20 bg-gray-50"
          onClick={slideLeft}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-auto whitespace-nowrap scrollbar-hide "
        >
          <div className="flex flex-row gap-3">
            {data.map((item) => (
              <div className="flex-shrink-0">
                <ContentCard
                  key={item._id}
                  genre={item.genre}
                  imgThumb={item.imgThumb}
                  duration={item.duration}
                  trailer={item.trailer}
                  _id={item._id}
                />
              </div>
            ))}
          </div>
        </div>
        <ChevronRightIcon
          className="absolute right-0 opacity-50 cursor-pointer hover:opacity-100 w-20 h-20  bg-gray-50"
          onClick={slideRight}
        />
      </div>
    </div>
  );
};

export default ContentList;
