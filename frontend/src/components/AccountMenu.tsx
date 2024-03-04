import React from "react";
import { logout, selectUser } from "../store/reducers/authReducer";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();
  const dispacth = useAppDispatch();
  const { t } = useTranslation();
  
  
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img
            className="w-8 rounded-md"
            src="/images/default-blue.png"
            alt=""
          />
          <p className="text-white text-sm group-hover/item:underline">
            {user?.name}
          </p>
        </div>
      </div>
      <hr className="bg-gray-600 border-0 h-px my-4" />
      <div
        onClick={() => {
          dispacth(logout());
          navigate("/");
        }}
        className="px-3 text-center text-white text-sm hover:underline"
      >
        {t("signOut")}
      </div>
    </div>
  );
};

export default AccountMenu;
