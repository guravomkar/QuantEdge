import React, { useState } from "react";
import axios from "axios";

function OrderWindow({ stockName, stockPrice, closeWindow }) {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(stockPrice);
  const [orderType, setOrderType] = useState("MARKET"); // MARKET or LIMIT
  const [productMode, setProductMode] = useState("CNC"); // CNC or MIS

  const handleBuy = async () => {
    const orderData = {
      name: stockName,
      qty: qty,
      price: orderType === "MARKET" ? stockPrice : price,
      mode: "BUY",
      type: orderType,
      product: productMode
    };

    try {
      await axios.post("http://localhost:3002/newOrder", orderData);
      alert("Order Placed Successfully!");
      closeWindow();
    } catch (err) {
      alert("Error placing order");
    }
  };

  return (
    <div className="order-window shadow-lg p-4 bg-white border rounded">
      <div className="d-flex justify-content-between border-bottom pb-2 mb-3">
        <h5 className="text-primary">Buy {stockName} x {qty} Qty</h5>
        <button className="btn-close" onClick={closeWindow}></button>
      </div>

      <div className="modes mb-3">
        <button 
          className={`btn btn-sm me-2 ${productMode === "CNC" ? "btn-primary" : "btn-outline-secondary"}`}
          onClick={() => setProductMode("CNC")}
        >CNC (Longterm)</button>
        <button 
          className={`btn btn-sm ${productMode === "MIS" ? "btn-danger" : "btn-outline-secondary"}`}
          onClick={() => setProductMode("MIS")}
        >MIS (Intraday)</button>
      </div>

      <div className="row g-3">
        <div className="col-6">
          <label className="form-label">Qty</label>
          <input type="number" className="form-control" value={qty} onChange={(e) => setQty(e.target.value)} />
        </div>
        <div className="col-6">
          <label className="form-label">Price</label>
          <input 
            type="number" 
            className="form-control" 
            value={price} 
            disabled={orderType === "MARKET"} 
            onChange={(e) => setPrice(e.target.value)} 
          />
        </div>
      </div>

      <div className="order-types mt-3">
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="type" checked={orderType === "MARKET"} onClick={() => setOrderType("MARKET")} />
          <label className="form-check-label">Market</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="type" checked={orderType === "LIMIT"} onClick={() => setOrderType("LIMIT")} />
          <label className="form-check-label">Limit</label>
        </div>
      </div>

      <div className="mt-4 border-top pt-3 d-flex justify-content-between align-items-center">
        <span>Margin required: <strong>₹{(qty * (orderType === "MARKET" ? stockPrice : price)).toFixed(2)}</strong></span>
        <div>
            <button className="btn btn-primary me-2" onClick={handleBuy}>Buy</button>
            <button className="btn btn-outline-secondary" onClick={closeWindow}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default OrderWindow;