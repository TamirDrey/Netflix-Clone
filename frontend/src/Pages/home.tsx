import ContentList from "../components/ContentList";
import Loading from "../components/Loading";
import Error from "../components/Error";
import NavBar from "../components/NavBar";
import { useGetALLQuery } from "../store/services/content-api";

const Home = () => {
  const { data, error, isLoading } = useGetALLQuery(null);

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
              <ContentList data={data} title={"kaka"} />
            </div>
          </>
        )
      )}
    </>
  );
};

export default Home;
