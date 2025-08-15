import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top">
        {/* LEFT COLUMN: Brokerage Calculator & Rules */}
        <div className="col-8 p-4">
          <a href="#" className="fs-5 fw-medium mb-4 d-block text-center text-decoration-none" style={{ color: "#387ed1" }}>
            Brokerage calculator
          </a>
          <ul className="text-muted" style={{ textAlign: "left", lineHeight: "1.8", fontSize: "12px" }}>
            <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
            <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
            <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
          </ul>
        </div>

        {/* RIGHT COLUMN: List of Charges (Now Filled) */}
        <div className="col-4 p-4">
          <a href="#" className="fs-5 fw-medium mb-4 d-block text-center text-decoration-none" style={{ color: "#387ed1" }}>
            List of Charges
          </a>
          <ul className="text-muted" style={{ textAlign: "left", lineHeight: "1.8", fontSize: "12px" }}>
            <li>Equity Delivery: ₹0 (Free)</li>
            <li>Intraday & F&O: ₹20 or 0.03% (lower)</li>
            <li>Direct Mutual Funds: ₹0 (Free)</li>
            <li>STT/CTT: As per Government norms</li>
            <li>Transaction Charges: NSE/BSE fees</li>
            <li>Stamp Duty: As per State laws</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;