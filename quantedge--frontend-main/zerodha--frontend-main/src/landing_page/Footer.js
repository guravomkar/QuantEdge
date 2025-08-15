import React from "react";
import { Link } from "react-router-dom";

function Footer() {

  // Add this helper function inside the component
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // Use "smooth" if you want it to glide up
    });
  };

  return (
    <div className="container mt-5 border-top" style={{ backgroundColor: "rgb(240, 240, 240)" }}>
      <div className="row mt-5">
        <div className="col">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            style={{ width: "50%" }}
          />
          <p className="mt-3">
            &copy; 2010 - 2026, Not Zerodha Broking Ltd. All rights reserved.
          </p>
        </div>
        
        {/* Column 1: Company - Removed Careers and Press */}
        <div className="col text-muted">
          <p style={{ fontWeight: "500", color: "#424242" }}>Company</p>
          <Link to="/about"  onClick={scrollToTop}className="text-muted d-block mb-2" style={{ textDecoration: "none" }}>About</Link>
          <Link to="/product" onClick={scrollToTop}className="text-muted d-block mb-2" style={{ textDecoration: "none" }}>Products</Link>
          <Link to="/pricing" onClick={scrollToTop}className="text-muted d-block mb-2" style={{ textDecoration: "none" }}>Pricing</Link>
          <Link to="/offerings" onClick={scrollToTop}className="text-muted d-block mb-2" style={{ textDecoration: "none" }}>Referral programs</Link>
        </div>

        {/* Column 2: Support - Removed Z-Connect and Resources */}
        <div className="col text-muted">
          <p style={{ fontWeight: "500", color: "#424242" }}>Support</p>
          <Link to="/support" onClick={scrollToTop}className="text-muted d-block mb-2" style={{ textDecoration: "none" }}>Support portal</Link>
          
          <Link to="/pricing" onClick={scrollToTop}className="text-muted d-block mb-2" style={{ textDecoration: "none" }}>List of Charges</Link>
        </div>

        {/* Column 3: Accounts - Removed Fund Transfer */}
        <div className="col text-muted">
          <p style={{ fontWeight: "500", color: "#424242" }}>Accounts</p>
          <Link to="/signup"onClick={scrollToTop} className="text-muted d-block mb-2" style={{ textDecoration: "none" }}>Open an account</Link>
          <Link to="/login" onClick={scrollToTop}className="text-muted d-block mb-2" style={{ textDecoration: "none" }}>Login</Link>
          <Link to="/signup"onClick={scrollToTop} className="text-muted d-block mb-2" style={{ textDecoration: "none" }}>60 days challenge</Link>
        </div>
      </div>

      <div className="mt-5 text-muted" style={{ fontSize: "13px" }}>
        <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.:
        INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. –
        SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha
        Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238
        Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars
        Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
        560078, Karnataka, India.</p>
        
        <p>Investments in securities market are subject to market risks; read all the related
        documents carefully before investing.</p>
      </div>
    </div>
  );
}

export default Footer;