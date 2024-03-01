import ContentList from "../components/ContentList";
import Loading from "../components/Loading";
import Error from "../components/Error";
import NavBar from "../components/NavBar";
import { useGetALLQuery } from "../store/services/content-api";
import InfoModal from "../components/InfoModal";
import { useAppSelector } from "../store/hooks";
import { selectIsOpenModal } from "../store/reducers/modalReducer";
import BillBaord from "../components/BillBoard";

const Home = () => {
  const { data, error, isLoading } = useGetALLQuery(null);
  const isOpen = useAppSelector(selectIsOpenModal);

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
              <ContentList data={data} title={"kaka"} />
            </div>
          </>
        )
      )}
    </>
  );
};

export default Home;
