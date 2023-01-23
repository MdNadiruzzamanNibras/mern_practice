import {
    createBrowserRouter,
   
  } from "react-router-dom";
import App from "./App";
import Detail from "./Component/Detail";
import EditReg from "./Component/EditReg";
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
      path: "/view/:id",
      element: <Detail/>,
    },
    {
        path: "/register",
      element: <Register/>,
    }
  ]);