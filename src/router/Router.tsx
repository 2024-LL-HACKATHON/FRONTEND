import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import Signup from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Guide from "../pages/Guide/Guide";
<<<<<<< HEAD
import Main from "../pages/Main/Main";
import PromptDetail from "../pages/PromptDetail/PromptDetail";
import Competition from "../pages/Competition/Competition";
=======
import PromptDetail from "../pages/PromptDetail/PromptDetail";
import Competition from "../pages/Competition/Competition";
import Main from "../pages/Main/Main";
import CompetitionParticipation from "../pages/Competition/CompetitionParticipation";
import CompetitionList from "../pages/Competition/CompetitionList";
>>>>>>> 12b5cf23c1136e6df3c10aac4d4377d8129eabd0

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
    ],
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
    path: "/main",
    element: <Main />,
  },
  {
    path: "/detail_page",
    element: <PromptDetail />,
  },
  {
<<<<<<< HEAD
    path: "/competition",
    element: <Competition />,
=======
    path: "/competitionparticipation",
    element: <CompetitionParticipation />,
  },
  {
    path: "/competitionlist",
    element: <CompetitionList />,
>>>>>>> 12b5cf23c1136e6df3c10aac4d4377d8129eabd0
  },
]);

export default router;