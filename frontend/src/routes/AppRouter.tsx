import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PublicRoutes, UserRoutes } from "./RouteData";

const AppRouter = () => {
  return (
    <Router>
      <I18nextProvider i18n={i18n}>
        <Routes>
          {PublicRoutes.map((routes) => (
            <Route
              path={routes.path}
              key={routes.path}
              element={<routes.element />}
            />
          ))}
          {UserRoutes.map((routes) => (
            <Route
              path={routes.path}
              key={routes.path}
              element={<routes.element />}
            />
          ))}
        </Routes>
      </I18nextProvider>
    </Router>
  );
};

export default AppRouter;
