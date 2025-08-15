import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 1. Remove the token and user info from storage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // 2. Show a quick notification
    toast.info("Logged out successfully");

    // 3. Redirect to the homepage or login page
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <button 
      onClick={handleLogout} 
      className="btn btn-outline-danger btn-sm"
      style={{ fontWeight: "500" }}
    >
      Logout
    </button>
  );
};

export default Logout;