import { useAppSelector } from "../store/hooks";

const Home = () => {
  const user = useAppSelector(state => state.auth.user)
  console.log(user)
  return <div>home</div>;
};

export default Home;
