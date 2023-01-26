import {
    createBrowserRouter,
   
  } from "react-router-dom";
import App from "./App";
import Detail from "./Component/Detail";
import EditReg from "./Component/EditReg";
import Img from "./Component/Img";
import Register from "./Component/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/edit/:id",
      element: <EditReg/>,
    },
    {
      path: "/detail/:id",
      element: <Detail/>,
    },
    {
      path: "/img",
      element: <Img/>,
    },
    {
        path: "/register",
      element: <Register/>,
    }
  ]);