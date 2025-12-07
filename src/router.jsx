import { createBrowserRouter } from "react-router-dom";
import CategoryPage from "./abduvoris/Cat";

const router = createBrowserRouter([
  {
    path: "/category/:categoryName",
    element: <CategoryPage />,
  },
]);

export default router;
