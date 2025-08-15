import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://zerodha-pify.onrender.com/login", 
        { email: inputValue.email, password: inputValue.password },
        { withCredentials: true }
      );
      
      if (data.success) {
        toast.success(data.message);
        localStorage.setItem("userEmail", inputValue.email);
        
        setTimeout(() => {
          // UPDATED: Pointing to your live Vercel dashboard URL from screenshot
          window.location.href = `https://zerodha-dashboard-eta.vercel.app?email=${inputValue.email}`; 
        }, 1000);
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
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input 
                type="email" 
                name="email" 
                className="form-control" 
                value={inputValue.email} 
                onChange={handleOnChange} 
                required 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input 
                type="password" 
                name="password" 
                className="form-control" 
                value={inputValue.password} 
                onChange={handleOnChange} 
                required 
              />
            </div>
            <button 
              type="submit" 
              className="btn btn-primary w-100 py-2" 
              style={{backgroundColor: "#387ed1", border: "none"}}
            >
              Login
            </button>
            <p className="mt-3 text-center">
              New user? <Link to="/signup">Signup</Link>
            </p>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Login;