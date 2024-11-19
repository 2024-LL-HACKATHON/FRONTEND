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
import Layout from "../components/Layout/Layout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Landing />,
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
          path: "/detail_page/:prompt_id",
          element: <PromptDetail />,
        },
        {
          path: "/competition",
          element: <Competition />,
        },
        {
          path: "/competitionparticipation",
          element: <PrivateRoute element={<CompetitionParticipation />} />,
        },
        {
          path: "/competitionlist",
          element: <CompetitionList />,
        },
        {
          path: "/prompt_register",
          element: <PrivateRoute element={<PromptRegisterPage />} />,
        },
      ],
    },
  ],
  {
    basename: "/promfren_front",
  }
);

export default router;
