import ContentList from "../components/ContentList";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import Error from "../components/Error";
import { useGetLikedContentQuery } from "../store/services/auth-api";
import { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import { selectUser } from "../store/reducers/authReducer";
import { IContent } from "../types/content-types";

const MyList = () => {
  const user = useAppSelector(selectUser);
  const { data, error, isLoading } = useGetLikedContentQuery(null);
  const [updatedList, setUpdatedList] = useState<IContent[]>([]);

  useEffect(() => {
    console.log(user?.likedContent);
    // console.log(data?.length);
    if (!user || !data) return;
    // Filter the data to include only the liked content by the user
    const newList = data.filter((item) =>
      user.likedContent!.includes(item._id)
    );
    setUpdatedList(newList);
    console.log(newList);
  }, [user,data]);

  return (
    <>
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
