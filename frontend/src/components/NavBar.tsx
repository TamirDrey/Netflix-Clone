import { useCallback, useEffect, useState } from "react";
import {
  BellIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import MobileMenu from "./MobileMenu";
import NavBarItem from "./NavBarItem";
import AccountMenu from "./AccountMenu";
import { useTranslation } from "react-i18next";
import SearchBox from "./SearchBox";
import { useDispatch } from "react-redux";
import {
  selectIsSearchBoxOpen,
  toggleSearchBox,
} from "@/store/reducers/searchReducer";
import { useAppSelector } from "@/store/hooks";
import LanguagePicker from "./LanguagePicker";

const TOP_OFFSET = 66;

const NavBar = () => {
  const dispatch = useDispatch();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const isSearchBoxOpen = useAppSelector(selectIsSearchBoxOpen);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <img src="/images/logo.png" className="h-4 lg:h-7" alt="Logo" />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavBarItem label={t("navBar.home")} active route="/home" />
          <NavBarItem label={t("navBar.series")} route="/series" />
          <NavBarItem label={t("navBar.movies")} route="/movies" />
          <NavBarItem label={t("navBar.mylist")} route="/mylist" />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">{t("navBar.browse")}</p>
          <ChevronDownIcon
            className={`w-4 text-white fill-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div
            onClick={() => dispatch(toggleSearchBox())}
            className="text-gray-200 hover:text-gray-300 cursor-pointer transition"
          >
            <MagnifyingGlassIcon className="w-6" />
          </div>
          {isSearchBoxOpen && <SearchBox />}
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <LanguagePicker />
          </div>
          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-blue.png" alt="" />
            </div>
            <ChevronDownIcon
              className={`w-4 text-white fill-white transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
