import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

const Header = () => {

    const navigate = useNavigate()
    const signoutclick = () => {
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
        });
    }

    return (
        <div className="flex justify-between absolute z-10  w-full">
            <div className="w-40  m-3 p-3"><img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-04-16/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" /></div>
            <button onClick={signoutclick} className="text-white bg-red-500 rounded-md m-3 p-3">Signout</button>
        </div>


    );
};
export default Header;