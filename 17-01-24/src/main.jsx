import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Page404 from "./routes/Page404";
import Homepage from "./routes/homepage";
import Product from "./routes/product";
import About from "./routes/about";
import Contacts from "./routes/contacts";

import "./index.module.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Page404 />,
  },
  {
    path: "products/:productId",
    element: <Product />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
