import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse.jsx";
import Login from "./Login.jsx";


const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};
export default Body;
