import { closeSearchBox, setQuery } from "@/store/reducers/searchReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface NavbarItemProps {
  label: string;
  route?: string;
  active?: boolean;
}

const NavBarItem: React.FC<NavbarItemProps> = ({ label, active, route }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const moveToRoute = () => {
    dispatch(closeSearchBox())
    dispatch(setQuery(""))
    if (route) {
      navigate(route);
    }
  };

  return (
    <div
      className={
        active
          ? "text-white cursor-default"
          : "text-gray-200 hover:text-gray-300 cursor-pointer transition"
      }
      onClick={moveToRoute}
    >
      {label}
    </div>
  );
};

export default NavBarItem;
