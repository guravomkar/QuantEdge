import React from 'react';
import { Link } from 'react-router-dom'; // Added this import

function Education() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    {/* this is for the image section */}
                    <img src='media/images/education.svg' alt="Education" style={{width:"70%"}} />
                </div>
                <div className='col-6 p-5'>
                     {/* this is for the right written section */}
                    <h1 className='mb-3 fs-2' >Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    
                    {/* Updated to Link */}
                    <Link to="/support" style={{textDecoration:"none"}}>Varsity &rarr;</Link>
                    
                    <p className="mt-4">TradingQ&A, the most active trading and investment community in India fr all your market related issues</p>
                    
                    {/* Updated to Link to open SupportPage */}
                    <Link to="/support" style={{textDecoration:"none"}}>TradingQ&A  &rarr;</Link>
                </div>
            </div>
        </div>
     );
}

export default Education;