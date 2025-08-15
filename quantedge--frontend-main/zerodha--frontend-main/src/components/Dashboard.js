import React from "react";
import Logout from "./Logout";
import { Routes, Route, Link } from "react-router-dom";

// Note: If you have sub-components like Summary, Orders, or Holdings, 
// you can import them here later.

const Dashboard = () => {
  const username = localStorage.getItem("user") || "Investor";

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* --- DASHBOARD HEADER --- */}
      <nav className="navbar navbar-expand-lg border-bottom bg-white sticky-top p-3 shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/dashboard" style={{ fontWeight: "bold", color: "#387ed1" }}>
            DASHBOARD
          </Link>
          
          <div className="d-flex align-items-center">
            <span className="me-3 text-muted">Hi, {username}</span>
            <Logout />
          </div>
        </div>
      </nav>

      <div style={{ display: "flex", flex: 1 }}>
        {/* --- SIDEBAR --- */}
        <aside className="border-end p-3" style={{ width: "240px", backgroundColor: "#fbfbfb" }}>
          <ul className="list-unstyled">
            <li className="mb-3">
              <Link to="/dashboard" className="text-decoration-none text-dark">Summary</Link>
            </li>
            <li className="mb-3">
              <Link to="/dashboard/holdings" className="text-decoration-none text-dark">Holdings</Link>
            </li>
            <li className="mb-3">
              <Link to="/dashboard/orders" className="text-decoration-none text-dark">Orders</Link>
            </li>
          </ul>
        </aside>

        {/* --- MAIN CONTENT AREA --- */}
        <main className="p-4" style={{ flex: 1, overflowY: "auto" }}>
          <Routes>
            <Route path="/" element={
              <div>
                <h3>Equity Summary</h3>
                <hr />
                <div className="row mt-4">
                  <div className="col-6 border-end">
                    <p className="text-muted">Margin Available</p>
                    <h2>₹0.00</h2>
                  </div>
                  <div className="col-6">
                    <p className="text-muted">Current Value</p>
                    <h2>₹0.00</h2>
                  </div>
                </div>
              </div>
            } />
            {/* You can add more sub-routes here for Holdings/Orders */}
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;