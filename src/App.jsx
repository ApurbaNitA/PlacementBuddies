import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import Materials from "./components/Materials";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [theme, setTheme]= useState(localStorage.getItem("theme")||"light");
  useEffect(()=>{
    document.documentElement.classList.toggle("dark", theme=="dark");
    localStorage.setItem("theme", theme);
  },[theme]);
  const toggleTheme=()=>{
    setTheme((prev)=>(prev==="light"?"dark":"light"));
  }

  return (
    <div className={`${theme}`}>
    <Router>
      {isAuthenticated && <Navbar toggleTheme={toggleTheme} theme={theme}/>}
      <Routes>
        {/* Authentication Page */}
        <Route path="/auth" element={<Auth />} />

        {/* Home Component */}
        <Route
          path="/"
          element={<Home showLoginButton={!isAuthenticated} />}
        />
        {/* Redirect unauthorized users */}
        {!isAuthenticated && (
          <Route path="/courses" element={<Navigate to="/auth" replace />} />
        )}
        {/* Protected Routes */}
        {isAuthenticated && (
          <>
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="*" element={<Navigate to="/auth" replace />} />
          </>
        )}
      </Routes>
      {isAuthenticated && <Footer />}
    </Router>
    </div>
  );
};

export default App;
