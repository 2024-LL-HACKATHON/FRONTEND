import { createBrowserRouter } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';
import Signup from '../pages/Singup';
import Login from '../pages/Login';
import Guide from '../pages/Guide/Guide';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "guide",
    element: <Guide />
  },
]);

export default router;
