import { createBrowserRouter } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';
import Login from '../pages/Login';
import Signup from '../pages/Singup';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
