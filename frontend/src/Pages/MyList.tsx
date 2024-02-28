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
              <ContentList data={data} title={"My List"} />
            </div>
          </>
        )
      )}
    </>
  );
};

export default MyList;
