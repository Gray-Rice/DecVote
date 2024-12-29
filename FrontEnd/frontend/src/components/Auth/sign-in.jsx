import React, {useState, useContext} from "react";
import { useNavigate , Link} from "react-router-dom";
import NavBar from "../NavBar";
import axios from "axios";
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import AuthContext from "./AuthContext";
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

// import { set } from "mongoose";

const people = [
  {name : "Voter",
    id : 1
  },
  {name: "Admin",
    id: 2
  },
  
];

const SignIn = () => {
  const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
    type: ""
  })
  const [msg, setMsg] = useState("");
  const {login, user, logout} = useContext(AuthContext);
  const [selected, setSelected] = useState(people[0]);

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    login(formdata.email, formdata.password, selected.name).then((res) => {
      console.log(user);
      console.log(selected);
      if(res == 1){
        setMsg("Login successful : login as " + selected.name);
      }
      else if(res == 0){
        setMsg("Invalid login Create an account");

      }
      else if(res == -1){
        setMsg("Server Error");
      }
    });
    


  };

  const handleList = async (e) => {
    console.log(e);
    setSelected({
      name: e.name,
      id: e.id
    });
  }


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
            <form method="POST" className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Voters id
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
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm"></div>
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
          
            <Listbox value={selected} onChange={handleList}>
      <Label className="block text-sm font-medium leading-6 text-gray-900">User Type</Label>
      <div className="relative mt-2">
        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
          <span className="flex items-center">
            
            <span className="ml-3 block truncate">{selected.name}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {people.map((person) => (
            <ListboxOption
              key={person.id}
              value={person}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <div className="flex items-center">
                
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  {person.name}
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
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
            New to this platform ?{' '}
            <Link to="/sign-up" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Click here to sign-up instead !
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

export default SignIn;
