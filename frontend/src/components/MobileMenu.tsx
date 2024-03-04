import { useTranslation } from "react-i18next";
import NavBarItem from "./NavBarItem";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  const { t } = useTranslation();
  if (!visible) {
    return null;
  }
  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white hover:underline">
          <NavBarItem label={t("navBar.home")} active route="/home" />
        </div>
        <div className="px-3 text-center text-white hover:underline">
          <NavBarItem label={t("navBar.series")} active route="/series" />
        </div>
        <div className="px-3 text-center text-white hover:underline">
          <NavBarItem label={t("navBar.movies")} active route="/movies" />
        </div>
        <div className="px-3 text-center text-white hover:underline">
        <NavBarItem label={t("navBar.mylist")} active route="/mylist" />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
