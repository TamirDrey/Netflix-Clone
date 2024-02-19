import { RoutePaths } from "./RoutePaths";
import home from "../Pages/home";
import auth from "../Pages/auth";

export interface RouteItem {
  path: string;
  element: React.ComponentType;
}

export const PublicRoutes: RouteItem[] = [
  { path: RoutePaths.AUTH, element: auth },
];

export const UserRoutes: RouteItem[] = [
  { path: RoutePaths.HOME, element: home },
];
