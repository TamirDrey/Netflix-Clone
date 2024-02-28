import AppRouter from "./routes/AppRouter";
import "./App.css";
import { useAuthMeQuery } from "./store/services/auth-api";

function App() {
  const token = localStorage.getItem("accessToken");
  const { data, error, isLoading } = useAuthMeQuery(null, {
    skip: token ? false : true,
  });

  return (
    <>
      {isLoading ? (
        <h1>Loading... </h1>
      ) : error ? (
        <h1>Error occoured while fetching</h1>
      ) : (
        <AppRouter />
      )}
    </>
  );
}

export default App;
