import React from 'react';
import { Link } from 'react-router-dom';

function OfferingsPage() {
    return (
        <div className='container p-5 mt-5 mb-5'>
            {/* 1. HERO SECTION */}
            <div className='text-center mb-5'>
                <h1 className='fs-2'>Investment Offerings</h1>
                <p className='text-muted mt-3 fs-5'>Discover specialized segments and tools to build your portfolio.</p>
            </div>

            {/* 2. CORE PRODUCTS */}
            <div className='row text-center mt-5'>
                <div className='col-md-4 p-5'>
                    <i className="fa fa-line-chart mb-3" style={{fontSize: "3rem", color: "#387ed1"}}></i>
                    <h3 className='fw-normal'>Stocks & IPOs</h3>
                    <p className='text-muted'>Invest in direct equity or apply for the latest IPOs with a seamless UPI-based process.</p>
                </div>
                <div className='col-md-4 p-5'>
                    <i className="fa fa-pie-chart mb-3" style={{fontSize: "3rem", color: "#387ed1"}}></i>
                    <h3 className='fw-normal'>Direct Mutual Funds</h3>
                    <p className='text-muted'>Enjoy 0% commission on direct mutual funds and earn up to 1% more returns every year.</p>
                </div>
                <div className='col-md-4 p-5'>
                    <i className="fa fa-university mb-3" style={{fontSize: "3rem", color: "#387ed1"}}></i>
                    <h3 className='fw-normal'>Govt. Securities</h3>
                    <p className='text-muted'>Invest in Gold Bonds, T-Bills, and State Development Loans directly through your account.</p>
                </div>
            </div>

            {/* 3. UPDATED SECTION: MARKET SEGMENTS (With Working Image) */}
            <div className='row mt-5 pt-5 border-top align-items-center'>
                <div className='col-md-6 p-5'>
                    <h2 className='mb-4'>Advanced Segments</h2>
                    <p className='text-muted'>Go beyond simple delivery and explore high-leverage trading opportunities in various asset classes.</p>
                    <div className='d-flex mb-3'>
                        <div className='me-3 text-primary'><i className="fa fa-bolt"></i></div>
                        <div><strong>Futures & Options:</strong> Trade in equity, currency, and commodity derivatives.</div>
                    </div>
                    <div className='d-flex mb-3'>
                        <div className='me-3 text-primary'><i className="fa fa-globe"></i></div>
                        <div><strong>Currency:</strong> Hedge your risks or speculate on USDINR, EURINR, and more.</div>
                    </div>
                    <div className='d-flex mb-3'>
                        <div className='me-3 text-primary'><i className="fa fa-leaf"></i></div>
                        <div><strong>Commodities:</strong> Trade in metals, energy, and agricultural products via MCX.</div>
                    </div>
                </div>
                <div className='col-md-6 text-center'>
                    {/* STABLE ZERODHA ASSET LINK */}
                    <img 
                        src='https://zerodha.com/static/images/products-kite.png' 
                        alt='Trading Analytics Dashboard' 
                        className='img-fluid' 
                        style={{maxHeight: "450px"}} 
                    />
                </div>
            </div>

            {/* 4. INVESTOR TOOLS SECTION */}
            <div className='row mt-5 pt-5 align-items-center'>
                 <div className='col-md-5 text-center order-2 order-md-1'>
                    <img 
                        src='https://zerodha.com/static/images/varsity-products.png' 
                        alt='Learning Tools' 
                        style={{width: "80%"}} 
                    />
                </div>
                <div className='col-md-7 p-5 order-1 order-md-2'>
                    <h2 className='mb-4'>Smart Tools for Success</h2>
                    <div className='row'>
                        <div className='col-sm-6 mb-4'>
                            <h5>Basket Orders</h5>
                            <p className='small text-muted'>Place multiple orders at once to execute complex strategies instantly.</p>
                        </div>
                        <div className='col-sm-6 mb-4'>
                            <h5>GTT Orders</h5>
                            <p className='small text-muted'>Set "Good Till Triggered" orders that stay active until your price is hit.</p>
                        </div>
                        <div className='col-sm-6 mb-4'>
                            <h5>SIP in Stocks</h5>
                            <p className='small text-muted'>Automate your stock investments just like a Mutual Fund SIP.</p>
                        </div>
                        <div className='col-sm-6 mb-4'>
                            <h5>Pledging</h5>
                            <p className='small text-muted'>Pledge your holdings to get extra margin for intraday trading.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. CALL TO ACTION */}
            <div className='text-center mt-5 p-5 border-top'>
                <h2 className='mb-4'>Ready to start?</h2>
                <Link to="/signup" className='btn btn-primary fs-5 px-5 py-2' style={{backgroundColor: "#387ed1", border: "none"}}>
                    Open an account
                </Link>
            </div>
        </div>
    );
}

export default OfferingsPage;