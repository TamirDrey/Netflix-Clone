import ContentList from "../components/ContentList";
import Loading from "../components/Loading";
import Error from "../components/Error";
import NavBar from "../components/NavBar";
import { useGetALLQuery } from "../store/services/content-api";
import InfoModal from "../components/InfoModal";
import { useAppSelector } from "../store/hooks";
import { selectIsOpenModal } from "../store/reducers/modalReducer";
import BillBaord from "../components/BillBoard";
import { useEffect, useState } from "react";
import { IContent } from "../types/content-types";

const Home = () => {
  const { data, error, isLoading } = useGetALLQuery(null);
  const isOpen = useAppSelector(selectIsOpenModal);
  const [groupedContents, setGroupedContents] = useState<{
    [key: string]: IContent[];
  }>({});

  useEffect(() => {
    if (!data) return;
    const groupByGenre = (contentList: IContent[]) => {
      const grouped: { [key: string]: IContent[] } = {};
      contentList.forEach((content) => {
        if (!grouped[content.genre!]) {
          grouped[content.genre!] = [];
        }
        grouped[content.genre!].push(content);
      });
      return grouped;
    };
    setGroupedContents(groupByGenre(data));
  }, [data]);

  return (
    <>
      <InfoModal visible={isOpen} />
      <NavBar />
      <BillBaord />
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        data && (
          <>
            <div className="pb-40">
              {Object.keys(groupedContents).map((genre, index) => (
                <ContentList
                  key={index}
                  data={groupedContents[genre]}
                  title={genre}
                />
              ))}
            </div>
          </>
        )
      )}
    </>
  );
};

export default Home;
