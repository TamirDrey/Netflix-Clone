import AppRouter from "./routes/AppRouter";
import { useAuthMeQuery } from "./store/services/auth-api";
import Loading from "./components/Loading";
import Error from "./components/Error";

function App() {
  const token = localStorage.getItem("accessToken");
  const { error, isLoading } = useAuthMeQuery(null, {
    skip: token ? false : true,
  });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error message={error} />
      ) : (
        <AppRouter />
      )}
    </>
  );
}

export default App;
