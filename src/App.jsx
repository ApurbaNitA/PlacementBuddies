import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      {isAuthenticated && <Navbar />}
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
          </>
        )}
      </Routes>
      {isAuthenticated && <Footer />}
    </Router>
  );
};

export default App;
