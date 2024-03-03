import { RoutePaths } from "./RoutePaths";
import Home from "../Pages/Home";
import Auth from "../Pages/Auth";
import MyList from "../Pages/MyList";
import Watch from "../Pages/Watch";
import Movies from "../Pages/Movies";



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
  { path: RoutePaths.MOVIES, element: Movies },
];
