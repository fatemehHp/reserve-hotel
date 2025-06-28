import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./featuers/dashboard/Dashboard";
import Booking from "./featuers/bookings/Booking";
import Cabins from "./featuers/cabins/Cabins";
import LogIn from "./featuers/authentication/LogIn";
import SignUp from "./featuers/authentication/SignUp";
import Setting from "./featuers/settings/Setting";
import PageNotFound from "./ui/PageNotFound";
import AppLayout from "./ui/AppLayout";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "cabins",
        element: <Cabins />,
      },

      {
        path: "setting",
        element: <Setting />,
      },
    ],
  },
  {
    path: "logIn",
    element: <LogIn />,
  },
  {
    path: "signUp",
    element: <SignUp />,
  },
]);

const App = () => {
  return <RouterProvider router={routes}>App</RouterProvider>;
};

export default App;
