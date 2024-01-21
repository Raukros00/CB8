import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./routes/homepage";
import Book from "./routes/book/[id]";
import Page404 from "./routes/page404";
import Privacy from "./routes/privacy/Privacy";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Page404 />,
  },
  {
    path: "book/:bookId",
    element: <Book />,
  },
  {
    path: "privacy",
    element: <Privacy />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
