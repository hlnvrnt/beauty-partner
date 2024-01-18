import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Offres from "./pages/Offres";
import Engagements from "./pages/Engagements";
import Partenaires from "./pages/Partenaires";
import InnovationAI from "./pages/InnovationAI";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Borne from "./pages/Borne";
import Ai from "./pages/Ai";

import "./styles/index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/offres",
        element: <Offres />,
      },
      {
        path: "/engagements",
        element: <Engagements />,
      },
      {
        path: "/partenaires",
        element: <Partenaires />,
      },
      {
        path: "/innovation",
        element: <InnovationAI />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/borne",
        element: <Borne />,
      },
      {
        path: "/ai",
        element: <Ai />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
