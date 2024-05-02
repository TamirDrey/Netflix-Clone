import { useLocation } from "react-router";
import Layout from "../components/Layout";
import { useGetSearchQuery } from "../store/services/content-api";
import Loading from "../components/Loading";
import Error from "../components/Error";
import ContentCard from "../components/ContentCard";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { selectIsOpenModal } from "@/store/reducers/modalReducer";

const Search = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  const { data, error, isLoading } = useGetSearchQuery(searchQuery);
  const isOpen = useAppSelector(selectIsOpenModal);

  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

  return (
    <Layout showBillBoard={false} showInfoModal={isOpen}>
      <div className="absolute px-4 md:px-12 mt-20 space-y-8 ">
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-10">
          Search
        </p>
        {isLoading ? (
          <Loading />
        ) : error ? (
          <Error message ={error} />
        ) : (
          data &&  (
            <div className="grid grid-cols-5 gap-4">
              {data.map((item) => (
                <div key={item._id}>
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
          )
        )}
      </div>
    </Layout>
  );
};

export default Search;
