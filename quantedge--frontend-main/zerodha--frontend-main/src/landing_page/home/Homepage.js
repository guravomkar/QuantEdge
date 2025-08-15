import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing'; // Re-added
import Education from './Education'; // Added for complete landing page look

function Homepage() {
    return (
        <>
            <Hero /> 
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Stats />
                    </div>
                </div>
            </div>
            {/* Added Pricing section so you can click the link */}
            <Pricing /> 
            <Education />
        </>
    );
}

export default Homepage;