import { IContent } from "../types/content-types";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";
import LikeButton from "./LikeButton";
import { useAppDispatch } from "../store/hooks";
import { openModal } from "../store/reducers/modalReducer";
import { useState } from "react";

const ContentCard: React.FC<IContent> = (data) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <div
      className="group bg-zinc-900 col-span relative h-[12vw]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={data.imgThumb}
        alt=""
        className="
        cursor-pointer
        object-cover
        transition
        duration
        shadow-xl
        rounded-md
        group-hover:opacity-90
        sm:group-hover:opacity-0
        delay-300
        w-full
        h-[12vw]
      "
      />
      {isHovered && (
        <div
          className="
        opacity-0
        absolute
        top-0
        transition
        duration-200
        z-10
        invisible
        sm:visible
        delay-300
        w-full
        scale-0
        group-hover:scale-110
        group-hover:-translate-y-[6vw]
        group-hover:translate-x-[2vw]
        group-hover:opacity-100
      "
        >
          <iframe
            width="100%"
            height="100%"
            src={data.trailer}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <div
            className="
          z-10
          bg-zinc-800
          p-2
          lg:p-4
          absolute
          w-full
          transition
          shadow-md
          rounded-b-md
          "
          >
            <div className="flex flex-row items-center gap-3">
              <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300">
                <PlayIcon className="text-black w-4 lg:w-6" />
              </div>
              <LikeButton contentId={data._id} />
              <div
                onClick={() => dispatch(openModal(data._id!))}
                className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
              >
                <ChevronDownIcon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
              </div>
            </div>
            <div className="flex flex-row mt-4 gap-2 items-center">
              <p className="text-white text-[10px] lg:text-sm">
                {data.duration}
              </p>
            </div>
            <div className="flex flex-row items-center gap-2 mt-4 text-[8px] text-white lg:text-sm">
              <p>{data.genre}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentCard;
