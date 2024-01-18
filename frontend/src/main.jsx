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
<<<<<<< HEAD
import Salon from "./pages/Salon";
=======
import Borne from "./pages/Borne";
>>>>>>> 753ca880cb70066acee14f6ed75c4b547568a015

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
<<<<<<< HEAD
        path: "/salon",
        element: <Salon />,
=======
        path: "/borne",
        element: <Borne />,
>>>>>>> 753ca880cb70066acee14f6ed75c4b547568a015
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
