import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Login";
import ProductDetails from "./components/Login";
import Cart from "./components/Cart";

const routes = createBrowserRouter([
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "Products",
    element: <Products />,
  },
  {
    path: "ProductDetails",
    element: <ProductDetails />,
  },
  {
    path: "Cart",
    element: <Cart />,
  },
]);

export default routes;
