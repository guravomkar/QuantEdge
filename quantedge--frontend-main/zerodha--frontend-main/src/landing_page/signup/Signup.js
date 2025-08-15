import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ email: "", password: "", username: "" });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://zerodha-pify.onrender.com/signup",
        { ...inputValue },
        { withCredentials: true }
      );
      if (data.success) {
        toast.success(data.message);
        setTimeout(() => navigate("/login"), 1500);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Server Error: Check your internet connection");
    }
  };

  return (
    <div className="container mt-lg-5 p-3 p-lg-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-4 border p-4 shadow-sm bg-white mt-5" style={{ borderRadius: "8px" }}>
          <h2 className="text-center mb-4">Signup</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" onChange={handleOnChange} className="form-control mb-3" required />
            <input type="email" name="email" placeholder="Email" onChange={handleOnChange} className="form-control mb-3" required />
            <input type="password" name="password" placeholder="Password" onChange={handleOnChange} className="form-control mb-3" required />
            <button type="submit" className="btn btn-primary w-100 py-2">Register</button>
            <p className="mt-3 text-center">Joined already? <Link to="/login">Login</Link></p>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
export default Signup;