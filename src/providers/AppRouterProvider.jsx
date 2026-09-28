import { RouterProvider } from "react-router-dom";
import routes from "../routes";

const AppRouterProvider = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};

export default AppRouterProvider;
