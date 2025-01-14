import React from "react";
import { createBrowserRouter } from "react-router-dom";

const urlHome = import.meta.env.VITE_URL;
const router = createBrowserRouter([
  {
    path: "/",
    element: <h1 className="text-red-500">Welcome</h1>,
    errorElement: <h1 className="text-red-500">Error! Not Found</h1>,
  },
]);

export default router;
