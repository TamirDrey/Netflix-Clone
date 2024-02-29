import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PublicRoutes, UserRoutes } from "./RouteData";
import { selectIsAuthenticated } from "../store/reducers/authReducer";
import { useAppSelector } from "../store/hooks";
import SignIn from "../components/SignIn";

const AppRouter = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
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
              <Route path="/*"  element={<SignIn />} />
            </>
          )}
          {isAuthenticated && (
            <>
              {UserRoutes.map((route) => (
                <Route
                  path={route.path}
                  key={route.path}
                  element={<route.element />}
                />
              ))}
            </>
          )}
        </Routes>
      </I18nextProvider>
    </Router>
  );
};

export default AppRouter;
