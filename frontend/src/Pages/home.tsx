import { useAppSelector } from "../store/hooks";
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
  return <div>home</div>;
};

export default Home;
