import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import HomePage from "./components/Home";
import AboutPage from "./components/About";

import SignIn from "./components/Auth/sign-in";
import SignUp from "./components/Auth/sign-up";
import { AuthProvider } from "./components/Auth/AuthContext";



import VoteHome from "./components/VoteStuff/VoteHome";
import AddCandidate from "./components/Admin/AddCandidate";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vote" element={<VoteHome />} />

        <Route path="admin" element={<AddCandidate />}/>
      </Routes>
    </AuthProvider>
  );
}

export default App;
