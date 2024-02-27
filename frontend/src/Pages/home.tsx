import ContentList from "../components/ContentList";
import NavBar from "../components/NavBar";
import { useGetALLQuery } from "../store/services/content-api";

const Home = () => {
  const { data, error, isLoading } = useGetALLQuery(null);

  if (isLoading) {
    console.log("loading...");
  } else if (error) {
    console.log(error);
  } else {
    console.log(data);
  }

  return (
    <>
      <NavBar />
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        data && (
          <>
            <div  className="pb-40">
              <ContentList data={data} title={"kaka"} />
            </div>
          </>
        )
      )}
    </>
  );
};

export default Home;
