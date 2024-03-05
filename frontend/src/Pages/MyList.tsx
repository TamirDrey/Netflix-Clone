import ContentList from "../components/ContentList";
import NavBar from "../components/NavBar";
import { useAppSelector } from "../store/hooks";
import { selectUser } from "../store/reducers/authReducer";
import InfoModal from "../components/InfoModal";
import { selectIsOpenModal } from "../store/reducers/modalReducer";

const MyList = () => {
  const user = useAppSelector(selectUser);
  const isOpen = useAppSelector(selectIsOpenModal);
 
  return (
    <>
      <InfoModal visible={isOpen} />
      <NavBar />
      <div className="pb-40">
        <ContentList data={user?.likedContent!} title={"myList"} />
      </div>
    </>
  );
};

export default MyList;
