import React from 'react';

function Stats() {
    return (
        <div className='container py-5 mt-5'>
            <div className='row align-items-center'>
                {/* 1. Statistics & Mission Text */}
                <div className='col-lg-6 p-5'>
                    <h1 className='display-5 fw-bold mb-4' style={{ color: "#424242" }}>
                        Democratizing the Indian <br/>Capital Markets
                    </h1>
                    
                    <p className='fs-5 text-muted mb-5' style={{ lineHeight: "1.8" }}>
                        From a pioneering discount broker to India’s largest financial services 
                        ecosystem, Zerodha’s journey is built on <strong>technology</strong>, 
                        <strong>transparency</strong>, and a focus on the <strong>investor experience</strong>. 
                        We don't just facilitate trades; we empower a generation.
                    </p>

                    <div className='row mt-5'>
                        <div className='col-6 mb-4'>
                            <h2 className='fw-bold mb-0' style={{ color: "#387ed1" }}>1.3 Crore+</h2>
                            <p className='text-muted'>Verified Clients</p>
                        </div>
                        <div className='col-6 mb-4'>
                            <h2 className='fw-bold mb-0' style={{ color: "#387ed1" }}>₹3.5L Cr+</h2>
                            <p className='text-muted'>Assets Under Management</p>
                        </div>
                        <div className='col-6'>
                            <h2 className='fw-bold mb-0' style={{ color: "#387ed1" }}>15% +</h2>
                            <p className='text-muted'>Retail Order Volume</p>
                        </div>
                        <div className='col-6'>
                            <h2 className='fw-bold mb-0' style={{ color: "#387ed1" }}>30+</h2>
                            <p className='text-muted'>Fintech Partners</p>
                        </div>
                    </div>
                </div>

                {/* 2. Dashboard & Graph Visuals */}
                <div className='col-lg-6 p-5'>
                    <div className="position-relative">
                        {/* Main Dashboard Image */}
                        <img 
                            src='media/images/homeee.png' 
                            alt='Zerodha Dashboard' 
                            className='img-fluid shadow-lg rounded-3 mb-4'
                            style={{ width: "100%", border: "1px solid #eee" }}
                        />
                        
                        {/* Interactive Graph/Analytics Section Inspired by your screenshots */}
                        <div className='row g-3'>
                            <div className='col-12'>
                                <div className='p-4 bg-white border rounded shadow-sm d-flex justify-content-between align-items-center'>
                                    <div>
                                        <h6 className='text-muted mb-1'>Portfolio Distribution</h6>
                                        <h4 className='fw-bold mb-0'>Balanced Diversity</h4>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <div className="rounded-circle" style={{width: "12px", height: "12px", background: "#387ed1"}}></div>
                                        <div className="rounded-circle" style={{width: "12px", height: "12px", background: "#f8bb31"}}></div>
                                        <div className="rounded-circle" style={{width: "12px", height: "12px", background: "#4caf50"}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;