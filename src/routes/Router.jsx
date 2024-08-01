import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MainHome from "../pages/main/MainHome";
import MalaJope from "../pages/malajope/MalaJope";
import Montro from "../pages/montro/Montro";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHome></MainHome>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/mala-jope",
        element: <MalaJope></MalaJope>,
      },
      {
        path: "/montro",
        element: <Montro></Montro>,
      },
    ],
  },
]);
