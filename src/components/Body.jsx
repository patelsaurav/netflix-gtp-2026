import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse.jsx";
import Login from "./Login.jsx";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUser, deleteUser } from "../utils/userSlice.js";

const Body = () => {
  const dispatch = useDispatch()
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

  /*this called when state chnage like signin ,signup*/
  useEffect(() => {
    console.log("we are here called")
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }))
      } else {
        dispatch(deleteUser())
      }
    });
  }, [])

  return <RouterProvider router={appRouter} />;
};
export default Body;
