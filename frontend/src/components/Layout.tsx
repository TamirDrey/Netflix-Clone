import React, { ReactNode } from "react";
import NavBar from "./NavBar";
import BillBoard from "./BillBoard";
import InfoModal from "./InfoModal";

interface LayoutProps {
  children: ReactNode;
  showInfoModal?: boolean;
  showBillBoard?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  showInfoModal,
  showBillBoard = true,
}) => {
  return (
    <>
      <NavBar />
      {showBillBoard && <BillBoard />}
      <InfoModal visible={showInfoModal} />
      {children}
    </>
  );
};

export default Layout;
