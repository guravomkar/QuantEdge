import React from 'react';
import { Link } from 'react-router-dom';

function Universe() {
    return ( 
      <div className="container border-bottom mb-7">
      <div className="row  text-center " style={{ lineHeight: "2" }}>
        <h1>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
      
      <div className="col-4 p-3  mt-5">
          <img src='media/images/smallcaseLogo.png' style={{ width: "200px", height: "50px" }}></img>
           <p className="text-small text-muted"> 
            Thematic investing platform
            that helps you invest in diversified
            baskets of stocks on ETFs.
            </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src='media/images/sensibullLogo.svg' style={{ width: "200px", height: "50px" }}></img>
         <p className="text-small text-muted">
    
            Options trading platform that lets you
            create strategies, analyze positions, and examine
            data points like open interest, FII/DII, and more.

         </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src='media/images/zerodhaFundhouse.png' style={{ width: "200px", height: "50px" }}></img>
        
        <p className="text-small text-muted">
      
            Our asset management venture
            that is creating simple and transparent index
            funds to help you save for your goals.
            .

         </p>
        </div>


        <div className="col-4 p-3 mt-3">
          <img src='media/images/streakLogo.png' style={{ width: "160px", height: "50px" }}></img>
           <p className="text-small text-muted"> 

            Systematic trading platform
            that allows you to create and backtest
            strategies without coding.
            
            </p>
        </div>

        <div className="col-4 p-3 mt-3">
          <img src='media/images/goldenpiLogo.png' style={{ width: "160px", height: "50px" }}></img>
         <p className="text-small text-muted">
     
            Investment research platform
            that offers detailed insights on stocks,
            sectors, supply chains, and more.

         </p>
        </div>

        <div className="col-4 p-3 mt-3">
          <img src='media/images/dittoLogo.png' style={{ width: "150px", height: "50px" }}></img>
        
        <p className="text-small text-muted">

            Personalized advice on life
            and health insurance. No spam
            and no mis-selling.

         </p>
        </div>

<Link 
    to="/signup" 
    className='btn btn-primary fs-6 fw-medium py-2 px-4' 
    style={{ 
        backgroundColor: "#387ed1", 
        color: "#ffffff",
        border: "1px solid #2a5a9e", 
        borderRadius: "3px", 
        boxShadow: "none",
        display: "inline-block",
        minWidth: "160px", // Reduced from 250px
        transition: "background-color 0.1s ease" 
    }}
    onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = "#2a5a9e";
    }}
    onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = "#387ed1";
    }}
>
    Signup Now
</Link>
        </div >
       
      
        </div>

     );
}

export default Universe;