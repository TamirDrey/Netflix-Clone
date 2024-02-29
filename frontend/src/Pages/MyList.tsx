import ContentList from "../components/ContentList";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import Error from "../components/Error";
import { useGetLikedContentQuery } from "../store/services/auth-api";
import { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import { selectUser } from "../store/reducers/authReducer";
import { IContent } from "../types/content-types";
import InfoModal from "../components/InfoModal";
import { selectIsOpenModal } from "../store/reducers/modalReducer";

const MyList = () => {
  const user = useAppSelector(selectUser);
  const { data, error, isLoading } = useGetLikedContentQuery(null);
  const [updatedList, setUpdatedList] = useState<IContent[]>([]);
  const isOpen = useAppSelector(selectIsOpenModal);

  const update = (data: IContent[]) => {
    const newList = data?.filter((item) =>
      user?.likedContent!.includes(item._id)
    );
    setUpdatedList(newList);
  };

  useEffect(() => {
    if (!user || !data) return;
    else update(data);
  }, [user?.likedContent, data]);

  return (
    <>
      <InfoModal visible={isOpen} />
      <NavBar />
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        data && (
          <>
            <div className="pb-40">
              <ContentList data={updatedList} title={"My List"} />
            </div>
          </>
        )
      )}
    </>
  );
};

export default MyList;
