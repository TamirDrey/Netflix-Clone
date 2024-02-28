import ContentList from "../components/ContentList";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import Error from "../components/Error";
import { useGetLikedContentQuery } from "../store/services/auth-api";

const MyList = () => {
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
