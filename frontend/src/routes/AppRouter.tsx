import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PublicRoutes, UserRoutes } from "./RouteData";
import { selectIsAuthenticated } from "../store/reducers/authReducer";
import { useAppSelector } from "../store/hooks";
import SignIn from "../components/SignIn";
import Home from "../Pages/Home";
import Auth from "../Pages/Auth";

const AppRouter = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const token = localStorage.getItem("accessToken");

  return (
    <Router>
      <I18nextProvider i18n={i18n}>
        <Routes>
          {!isAuthenticated && (
            <>
              {PublicRoutes.map((route) => (
                <Route
                  path={route.path}
                  key={route.path}
                  element={<route.element />}
                />
              ))}
              <Route path="/*" element={<Auth />} />
            </>
          )}
          {isAuthenticated && token && (
            <>
              {UserRoutes.map((route) => (
                <Route
                  path={route.path}
                  key={route.path}
                  element={<route.element />}
                />
              ))}
              <Route path="/*" element={<Home />} />
            </>
          )}
        </Routes>
      </I18nextProvider>
    </Router>
  );
};

export default AppRouter;
