import { RoutePaths } from "./RoutePaths";
import Home from "../Pages/Home";
import Auth from "../Pages/Auth";

export interface RouteItem {
  path: string;
  element: React.ComponentType;
}

export const PublicRoutes: RouteItem[] = [
  { path: RoutePaths.AUTH, element: Auth },
];

export const UserRoutes: RouteItem[] = [
  { path: RoutePaths.HOME, element: Home },
];
