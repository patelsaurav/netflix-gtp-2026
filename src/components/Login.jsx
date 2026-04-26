import Header from "./Header";
import { useState, useRef } from "react";
const Login = () => {
  const [isSignin, setIsSignin] = useState(true)

  /*useRef use*/
  const email = useRef(null);
  const password = useRef(null);


  const toggleInputBox = () => {
    setIsSignin(!isSignin)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("password", password.current?.value);
  }

  return (
    <div>
      {/* <Header /> */}

      <div className="relative h-screen">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5bd3572a-0d1b-4228-aaa7-5b2dc45952b2/web/IN-en-20260413-TRIFECTA-perspective_4100808f-7dc6-4c78-8677-18db2989f7bc_large.jpg"
          alt="hero"
        />

        <form onSubmit={handleSubmit} className="opacity-90 absolute inset-0 m-auto w-1/2 h-1/2 bg-linear-to-r from-zinc-500 via-stone-600 to-zinc-900 bg-opacity-80 flex flex-col  rounded-lg p-4">
          <h1 className="text-white text-4xl font-bold m-3">{isSignin ? "Signin" : "Sign up"}  </h1>
          <input ref={email} type="text" className="m-3 p-2 bg-white rounded-md w-2/3" placeholder="Enter your email" />
          <input ref={password} type="password" className="m-3 p-2 bg-white rounded-md w-2/3" placeholder="Enter your password"></input>
          <button type="submit" className="bg-gray-400 w-30 rounded-md p-2 m-3 cursor-pointer">Submitt</button>
          <h5 onClick={toggleInputBox} className="m-3 p-2">{isSignin ? "Are You New to Netflix ? Signup" : "Login to your account"}</h5>
        </form>
      </div>
    </div>
  );
};

export default Login;