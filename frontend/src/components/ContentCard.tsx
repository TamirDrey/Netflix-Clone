import { IContent } from "../types/content-types";

const ContentCard: React.FC<IContent> = (data) => {
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <h1 className="text-white">{data.title}</h1>
      <img
        src={data.img}
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
        <img
          src={data.imgThumb}
          alt=""
          className="
          cursor-pointer
          object-cover
          transition
          duration
          shadow-xl
          rounded-t-md
          w-full
          h-[12vw]
        "
        />
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
            <div className="flex flex-row items-center gap-2 mt-4 text-[8px] text-white lg:text-sm">
              <p>{data.genre}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
