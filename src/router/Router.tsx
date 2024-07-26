import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import Signup from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Guide from "../pages/Guide/Guide";
import Competition from "../pages/Competition/Competition";
import Main from "../pages/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [],
  },
  {
    path: "/main",
    element: <Main/>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/guide",
    element: <Guide />,
  },
  {
    path: "/competition",
    element: <Competition />,
  },
]);

export default router;