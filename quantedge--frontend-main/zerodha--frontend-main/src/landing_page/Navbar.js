import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom sticky-top" style={{ backgroundColor: "#FFF" }}>
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            style={{ width: "150px" }} // Fixed width for better mobile scaling
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>

            {userName ? (
              <>
                <li className="nav-item">
                  <span className="nav-link text-primary fw-bold">Hi, {userName}</span>
                </li>
                <li className="nav-item">
                  <button 
                    className="btn btn-outline-danger btn-sm ms-lg-3" 
                    onClick={handleLogout}
                    style={{ borderRadius: "2px", padding: "5px 15px" }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Signup/Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <style>{`
        @media (max-width: 991px) {
          .nav-link { margin-left: 0 !important; padding: 10px 0; border-bottom: 1px solid #f8f9fa; width: 100%; text-align: center; }
          .navbar-collapse { background: #fff; padding: 15px; }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;