import { lazy } from "react";
import { routeUrl } from "./routesUrl";
const Login = lazy(() => import("../pages/login/login"));
const Home = lazy(() => import("../pages/HomePages/Home"));
const Investments = lazy(() => import("../pages/Investments/Investment"));
export const PAGE_ROUTE = [
  {
    id: 1,
    path: routeUrl.LOGIN,
    exact: true,
    Component: Login,
    isPrivate: false,
  },
  {
    id: 2,
    path: routeUrl.HOME,
    exact: true,
    Component: Home,
    isPrivate: true,
  },
  {
    id: 3,
    path: routeUrl.INVESTMENTS,
    exact: true,
    Component: Investments,
    isPrivate: true,
  },
];
