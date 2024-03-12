import { RoutePaths } from "./RoutePaths";
import Home from "../Pages/Home";
import Auth from "../Pages/Auth";
import MyList from "../Pages/MyList";
import Watch from "../Pages/Watch";
import Browse from "../Pages/Browse";
import Search from "../Pages/Search";

export interface RouteItem {
  path: string;
  element: React.ComponentType;
}

export const PublicRoutes: RouteItem[] = [
  { path: RoutePaths.AUTH, element: Auth },
];

export const UserRoutes: RouteItem[] = [
  { path: RoutePaths.HOME, element: Home },
  { path: RoutePaths.MYLIST, element: MyList },
  { path: RoutePaths.WATCH, element: Watch },
  { path: RoutePaths.MOVIES, element: Browse },
  { path: RoutePaths.SERIES, element: Browse },
  { path: RoutePaths.SEARCH, element: Search },
];
