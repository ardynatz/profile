import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import HomePage from "./page";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <Navigate to="/" />,
    },
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
