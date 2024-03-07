import { useLocation } from "react-router";
import Layout from "../components/Layout"
import { useGetSearchQuery } from "../store/services/content-api";
import Loading from "../components/Loading";
import Error from "../components/Error";
import ContentCard from "../components/ContentCard";



const Search = () => {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search); 
    const query = queryParams.get("q") || "";
    const { data, error, isLoading } = useGetSearchQuery(query);

  return (
    <Layout>
         <div className="px-4 md:px-12 mt-4">
        {isLoading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : data ? (
          <div className="grid grid-cols-5 gap-4">
            {data.map((item) => (
              <div key={item._id} >
                <ContentCard
                  genre={item.genre}
                  imgThumb={item.imgThumb}
                  duration={item.duration}
                  trailer={item.trailer}
                  _id={item._id}
                />
              </div>
            ))}
          </div>
        ) : (
          <div>No search results found.</div>
        )}
      </div>
    </Layout>
  )
}

// export default Search