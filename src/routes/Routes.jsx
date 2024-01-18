import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/Error/NotFound";
import Layout from "../layouts/Layout";
import Home from "../pages/Home/Home";

import DetailsPage from "../pages/details/DetailsPage";

import RecipeForm from "../pages/recipeForm/RecipeForm";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
         path: "/:id",
        element: <DetailsPage />,
      },
      {
         path: "/recipeform",
        element: <RecipeForm />,
      },
    ],
  },
 
]);

export default router;
