import { useEffect, useState } from "react";
import BillBaord from "../components/BillBoard";
import NavBar from "../components/NavBar";
import {
  useGetMoviesQuery,
  useGetSeriesQuery,
} from "../store/services/content-api";
import { groupByGenre } from "../store/services/content-api";
import { IContent } from "../types/content-types";
import ContentList from "../components/ContentList";
import Loading from "../components/Loading";
import Error from "../components/Error";
import SelectBox from "../components/SelectBox";
import { useLocation } from "react-router-dom";

const Browse = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { data, error, isLoading } =
    currentPath == "/movies"
      ? useGetMoviesQuery(null)
      : useGetSeriesQuery(null);

  const [groupedContents, setGroupedContents] = useState<{
    [key: string]: IContent[];
  }>({});

  const [selectedGenre, setSelectedGenre] = useState<string>("");

  useEffect(() => {
    if (!data) return;
    setGroupedContents(groupByGenre(data));
  }, [data]);

  const handleGenreChange = (genre: string) => {
    setSelectedGenre(genre);
  };

  return (
    <>
      <NavBar />
      <BillBaord />
      <div className="px-4 md:px-12 mt-4">
        <SelectBox
          options={[
            { value: "", label: "all" },
            ...Object.keys(groupedContents).map((genre) => ({
              value: genre,
              label: genre,
            })),
          ]}
          value={selectedGenre}
          onChange={handleGenreChange}
        />
      </div>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        data && (
          <>
            <div className="pb-40">
              {selectedGenre ? (
                <ContentList
                  data={groupedContents[selectedGenre]}
                  title={selectedGenre}
                />
              ) : (
                Object.keys(groupedContents).map((genre, index) => (
                  <ContentList
                    key={index}
                    data={groupedContents[genre]}
                    title={genre}
                  />
                ))
              )}
            </div>
          </>
        )
      )}
    </>
  );
};
export default Browse;
