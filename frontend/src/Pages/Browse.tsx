import { useEffect, useState } from "react";
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
import Layout from "../components/Layout";
import { useAppSelector } from "@/store/hooks";
import { selectIsOpenModal } from "@/store/reducers/modalReducer";

const Browse = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const {
    data: moviesData,
    error: moviesError,
    isLoading: moviesLoading,
  } = useGetMoviesQuery(null);
  const {
    data: seriesData,
    error: seriesError,
    isLoading: seriesLoading,
  } = useGetSeriesQuery(null);

  const [groupedContents, setGroupedContents] = useState<{
    [key: string]: IContent[];
  }>({});
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const isOpen = useAppSelector(selectIsOpenModal);

  useEffect(() => {
    const data = currentPath === "/movies" ? moviesData : seriesData;
    if (!data) return;
    setGroupedContents(groupByGenre(data));
    setSelectedGenre("");
  }, [currentPath, moviesData, seriesData]);

  const handleGenreChange = (genre: string) => {
    setSelectedGenre(genre);
  };

  const isLoading = currentPath === "/movies" ? moviesLoading : seriesLoading;
  const error = currentPath === "/movies" ? moviesError : seriesError;

  return (
    <Layout showInfoModal={isOpen}>
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
        <Error message={error} />
      ) : (
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
      )}
    </Layout>
  );
};
export default Browse;
