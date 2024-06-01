import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Apartment from "../pages/Apartment/Apartment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apartment",
        element: <Apartment />,
      },
    ],
  },
]);
export default router;
