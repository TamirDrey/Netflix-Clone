import ContentList from "../components/ContentList";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useGetALLQuery } from "../store/services/content-api";
import { useAppSelector } from "../store/hooks";
import { selectIsOpenModal } from "../store/reducers/modalReducer";
import { useEffect, useState } from "react";
import { IContent } from "../types/content-types";
import Layout from '../components/Layout';

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
    <Layout showInfoModal={isOpen} >
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error message={error}/>
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
    </Layout>
  );
};

export default Home;
