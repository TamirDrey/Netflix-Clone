import ContentCard from "../components/ContentCard";
import ContentList from "../components/ContentList";
import { useGetALLQuery } from "../store/services/content-api";
import { IContent } from "../types/content-types";

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
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        data && (
          <>
            <ContentList data= {data}/>
          </>
        )
      )}
    </div>
  );
};

export default Home;
