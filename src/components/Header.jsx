import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, deleteUser } from "../utils/userSlice.js";
import { useEffect } from "react";
import { logo } from "../utils/constant.js";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid, displayName, email }));
        navigate("/browse");
      } else {
        dispatch(deleteUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signoutclick = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-between absolute z-10 w-full">
      <div className="w-40 m-3 p-3">
        <img src={logo} alt="logo" />
      </div>

      {location.pathname === "/browse" && (
        <button
          onClick={signoutclick}
          className="text-white bg-red-500 rounded-md m-3 p-3"
        >
          Signout
        </button>
      )}
    </div>
  );
};

export default Header;