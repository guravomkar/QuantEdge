import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return ( 
        /*this is pasted from the hero.js since it was the same format with only minute changes*/
    <div className='container p-5 text-center mb-5'>
            <div className='row'>
                
               <img src='media/images/homeHero.png'  alt='Hero Image' className='mb-5'/>

            <h1 className='mt-5'>Open a Zerodha account</h1>

            <p>Modern platform and apps, rs 0 investments, and flat rs 2 intraday and F&0 trades</p>
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
            </div>
        </div> 
);
}

export default OpenAccount;