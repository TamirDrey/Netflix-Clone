import React from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


interface PlayButtonProps {
    contentId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ contentId }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();


  return (
    <button 
      onClick={() => navigate(`/watch/${contentId}`)}
      className="
        bg-white 
        rounded-md 
        py-1 md:py-2 
        px-2 md:px-4
        w-auto 
        text-xs lg:text-lg 
        font-semibold
        flex
        flex-row
        items-center
        hover:bg-neutral-300
        transition
        "
      >
        <PlayIcon className="w-4 md:w-7 text-black mr-1" />
        {t("play")}
    </button>
  );
}

export default PlayButton;