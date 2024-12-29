// import React from "react";
// import { useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const navigate = useNavigate();

//   const handleSignIn = () => {
//     navigate("/sign-in");
//   };

//   return (
//     <div className="flex flex-col justify-center items-center h-screen">
//       <h1 className="text-lg font-bold">Sign Up Page</h1>
//       <button className="bg-blue-600" onClick={handleSignIn}>
//         Sign In instead
//       </button>
//     </div>
//   );
// };

// export default SignUp;


import React, {useState, useContext} from "react";
import { useNavigate , Link} from "react-router-dom";
import NavBar from "../NavBar";
import axios from "axios";

import AuthContext from "./AuthContext";


// import { set } from "mongoose";



const SignUp = () => {
  const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    email: "",
    password: ""
  })
  const [msg, setMsg] = useState("");
  const { user, signup} = useContext(AuthContext);


  

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formdata,
      [name] : value,
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    var r = await signup(formdata.email, formdata.password, formdata.type);
    
    if(r){
      setMsg("sign-up successful");
    }
    else{
      setMsg("User already exists , sign-in instead");

    }


  };

  


  return (


    <div>

    <NavBar />

    {!(user && user.email) ? (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form  method="POST" className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                VoterId
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  value={formdata.email}
                  onChange={handleChange}
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  value={formdata.password}
                  onChange={handleChange}
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {msg && <p>{msg}</p>}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>

            </div>

          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Already a user ?{' '}
            <Link to="/sign-in" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Click here to sign-in instead !
            </Link>
            
          </p>

        
        </div>
      </div>
    ) : (
      <div>
      <h1>
        Logged in
      </h1>
      </div>
    )}
    
      </div>

   
  );
};

export default SignUp;

