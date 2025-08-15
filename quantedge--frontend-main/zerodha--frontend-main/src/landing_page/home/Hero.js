import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        <div className='container-fluid p-0'>
            <div className='container p-5 text-center mt-lg-5'>
                <div className='row justify-content-center'>
                    <div className='col-12'> 
                        <img 
                            src='media/images/homeHero.png' 
                            alt='Hero' 
                            className='img-fluid mb-5' 
                            style={{ width: "100%", maxWidth: "800px" }}
                        />
                        <h1 className='display-5 fw-semibold mt-3 mt-lg-5' style={{ color: "#424242" }}>Invest in everything</h1>
                        <p className='fs-5 text-muted mb-5'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                        
                        <Link 
                            to="/signup" 
                            className='btn btn-primary fs-5 fw-medium py-3 px-5' 
                            style={{ 
                                backgroundColor: "#387ed1", 
                                color: "#ffffff",
                                border: "1px solid #2a5a9e",
                                borderRadius: "3px", 
                                minWidth: "250px",
                                display: "inline-block"
                            }}
                        >
                            Signup Now
                        </Link>
                    </div>
                </div>
            </div>

            <div className='container mt-5 py-5 border-top'>
                <div className='row align-items-center flex-column-reverse flex-lg-row'>
                    <div className='col-lg-6 p-4 p-lg-5'>
                        <h2 className='display-6 mb-4 mb-lg-5 fw-semibold'>Trust with confidence</h2>
                        
                        <div className='mb-4'>
                            <h3 className='fs-4 fw-bold'>Customer-first always</h3>
                            <p className='text-muted fs-5'>That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.</p>
                        </div>
                        
                        <div className='mb-4'>
                            <h3 className='fs-4 fw-bold'>Experience the calm</h3>
                            <p className='text-muted fs-5'>We value your attention. With zero distractions and no pushy notifications.</p>
                        </div>
                    </div>
                    <div className='col-lg-6 p-4 p-lg-5 text-center'>
                        <img src='media/images/ecosystem.png' alt='Ecosystem' className='img-fluid' />
                    </div>
                </div>
            </div>
            
            <style>{`
                @media (max-width: 768px) {
                    .display-5 { font-size: 2rem; }
                    .fs-5 { font-size: 1rem !important; }
                    .container { padding-left: 15px; padding-right: 15px; }
                }
            `}</style>
        </div>
    );
}

export default Hero;