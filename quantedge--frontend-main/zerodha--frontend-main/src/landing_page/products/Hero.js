import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
       <div className='mb-5'>
           <div className='text-center p-5 mt-5 mb-5 border-bottom' >
               <h2>Zerodha Products</h2>
               <h3 className='text-muted mt-3'>Sleek, modern, and intuitive trading platforms</h3>
               <h4 className='text-muted mt-2 mb-5' style={{fontSize: "17px" , lineHeight: "3"}}>
                   Check out our 
                   {/* Points to the new route we are about to create */}
                   <Link to="/offerings" style={{textDecoration:"none"}}> investment offerings &rarr;</Link>
               </h4>
           </div>
       </div>
    );
}

export default Hero;