import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import Signup from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Guide from "../pages/Guide/Guide";
import PromptDetail from "../pages/PromptDetail/PromptDetail";
import Competition from "../pages/Competition/Competition";
import Main from "../pages/Main/Main";
import CompetitionParticipation from "../pages/Competition/CompetitionParticipation";
import CompetitionList from "../pages/Competition/CompetitionList";
import PrivateRoute from "../pages/Private";
import PromptRegisterPage from "../pages/PromptDetail/PromptRegister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/main",
    element: <Main />,
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
    path: "/detail_page",
    element: <PromptDetail />,
  },
  {
    path: "/competition",
    element: <Competition />,
  },
  {
    path: "/competitionparticipation",
    element:  <PrivateRoute element={<CompetitionParticipation />}/>,
  },
  {
    path: "/competitionlist",
    element: <CompetitionList />,
  },
  {
    path: "/prompt_register",
    element: <PromptRegisterPage />,
  },
]);

export default router;
