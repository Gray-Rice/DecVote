import React from "react";
import {
  CalendarDays,
  Users,
  Bed,
  Stethoscope,
  ClipboardList,
  UserCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";



const HomePage = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/sign-in");
  };
  const handleSignUp = () => {
    navigate("/sign-up");
  };

  const goToVotePage = () => {
    navigate("/vote");
  }

  
  

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <header className="bg-white shadow-lg py-4 sticky top-0 z-10">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            Decentrallized voting system
          </h1>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#features"
                  className="text-gray-700 hover:text-indigo-600 transition duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-700 hover:text-indigo-600 transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/admin"
                  className="text-gray-700 hover:text-indigo-600 transition duration-300"
                >
                  Admin
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold mb-8">
            Revolutionize Our Voting system
            </h2>
            {/* <p className="text-xl mb-12 max-w-2xl mx-auto">
              Streamline operations, enhance patient care, and boost efficiency
              with our cutting-edge solution.
            </p> */}
            <div className="flex justify-center space-x-6">
              <button
                className="bg-white text-indigo-600 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition duration-300 shadow-lg"
                onClick={handleSignIn}
              >
                Sign In
              </button>
              <button
                className="bg-white text-indigo-600 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition duration-300 shadow-lg"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>
          </div>
        </section>

        

        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">
              Ready to Cast ur Vote ??
            </h2>
            <p className="text-xl mb-12">
              Cast your precious vote using blockchain technology
            </p>
            <button className="bg-white text-indigo-600 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition duration-300 shadow-lg" onClick={goToVotePage}>
              Click here
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition duration-300"
                >
                  Integrations
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition duration-300"
                >
                  About Us
                </a>
              </li>
              
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition duration-300"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition duration-300"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition duration-300"
                >
                  Terms of Service
                </a>
              </li>
              
            </ul>
          </div>
        </div>
       
      </footer>
    </div>
  );
};

export default HomePage;
