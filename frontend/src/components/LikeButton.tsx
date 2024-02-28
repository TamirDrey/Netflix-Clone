import { PlusIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useGetLikedContentQuery, useLikeContentMutation } from "../store/services/auth-api";
import { useEffect, useState } from "react";

interface LikeButtonProps {
  contentId?: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({ contentId }) => {
  //const user = useAppSelector(selectUser);
  const [isFavorite, setIsFavorite] = useState(false);
  const [LikeContent] = useLikeContentMutation();

  const { data, error, isLoading } = useGetLikedContentQuery(null);



  const toggleFavorites = async () => {
    await LikeContent({
      contentId: contentId,
    })
      .unwrap()
      .then((payload) => {
        if (payload == contentId) {
          setIsFavorite(true);
        } else if (payload.message == "Content unliked") {
          setIsFavorite(false);
        } else {
          setIsFavorite(false);
        }
      });
  };

  const checkInUserList = () => {
    data?.map((item) => {
      if(item._id == contentId) setIsFavorite(true);
    });
  };
  useEffect(() => {
    checkInUserList();
  }, [data]);

  const Icon = isFavorite ? CheckIcon : PlusIcon;

  return (
    <div>
      <div
        onClick={toggleFavorites}
        className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
      >
        <Icon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
      </div>
    </div>
  );
};

export default LikeButton;
