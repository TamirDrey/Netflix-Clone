import { PlusIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useLikeContentMutation } from "../store/services/auth-api";
import { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import { selectUser } from "../store/reducers/authReducer";

interface LikeButtonProps {
  contentId?: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({ contentId }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [LikeContent] = useLikeContentMutation();
  const user = useAppSelector(selectUser);

  const toggleFavorites = async () => {
    try {
      await LikeContent({
        contentId: contentId,
      });
    } catch (error) {
      console.error("Error toggling favorites:", error);
    }
  };
  useEffect(() => {
    if (user?.likedContent && user.likedContent.length > 0) {
      const found = user.likedContent.some((item) => item._id === contentId);
      setIsFavorite(found);
    } else {
      setIsFavorite(false);
    }
  }, [user]);

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
