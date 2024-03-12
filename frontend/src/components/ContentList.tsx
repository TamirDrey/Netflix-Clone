import React from "react";
import { IContent } from "../types/content-types";
import ContentCard from "./ContentCard";
import { useTranslation } from "react-i18next";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ContentListProps {
  data: IContent[];
  title?: string;
}

const ContentList: React.FC<ContentListProps> = ({ data, title }) => {
  const { t } = useTranslation();

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {t(`selectBox.items.${title}`)}
        </p>
        <Carousel
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {data.map((item) => (
              <CarouselItem className="pl-1 sm:basis-1/4 md:basis-1/4 lg:basis-1/4">
                <ContentCard
                  genre={item.genre}
                  imgThumb={item.imgThumb}
                  duration={item.duration}
                  trailer={item.trailer}
                  _id={item._id}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default ContentList;
