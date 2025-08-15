import React from 'react';

function CreateTicket({ onTopicClick }) {
    const ticketData = [
        {
            title: "Account Opening",
            icon: "fa-solid fa-circle-plus",
            links: [
                { q: "How to open account online?", a: "Visit the Signup page, enter your mobile, and complete E-KYC with PAN/Aadhaar." },
                { q: "What are the account opening charges?", a: "Equity delivery is free. Intraday/F&O opening fee is ₹200." },
                { q: "NRI Account Opening", a: "NRIs must submit physical documents to our HQ. Check the NRI checklist for details." },
                { q: "Minor Account Opening", a: "A Guardian can open a Minor account by providing the Minor's birth certificate and PAN." },
                { q: "Re-activating a dormant account", a: "If you haven't traded in 12 months, complete the IPV (In-Person Verification) online to reactivate." }
            ]
        },
        {
            title: "Your Zerodha Account",
            icon: "fa-solid fa-user",
            links: [
                { q: "How to reset password?", a: "Click 'Forgot Password' on Kite, enter PAN/Email, and use the reset link sent." },
                { q: "How to change bank account?", a: "Go to Console > Account > Bank. Upload a cancelled cheque for instant verification." },
                { q: "What is my DP ID?", a: "Find your 16-digit Demat ID in Console > Profile under 'Demat details'." },
                { q: "Nominee Addition", a: "You can add up to 3 nominees online via Console using eSign (Aadhaar OTP)." },
                { q: "Updating Mobile/Email", a: "Change your contact details in the Profile section. It takes 24 hours to sync across platforms." }
            ]
        },
        {
            title: "Trading & Platforms",
            icon: "fa-solid fa-chart-line",
            links: [
                { q: "What is GTT?", a: "GTT lets you set price triggers valid for 1 year. Great for long-term targets." },
                { q: "Kite Mobile features", a: "Enjoy biometric login, TradingView charts, and instant order execution." },
                { q: "Order types (CNC, MIS)?", a: "CNC is for long-term delivery; MIS is for intraday (auto-square off at 3:20 PM)." },
                { q: "Iceberg Orders", a: "Iceberg orders allow you to split large quantity orders into smaller legs to avoid price impact." },
                { q: "TradingView vs ChartIQ", a: "Switch between chart types in Kite Settings. TradingView offers more technical indicators." }
            ]
        },
        {
            title: "Funds & Withdrawals",
            icon: "fa-solid fa-wallet",
            links: [
                { q: "How to add funds?", a: "Use UPI (Instant & Free), Netbanking, or NEFT/RTGS for larger transfers." },
                { q: "Withdrawal timeline", a: "Requests before 9 PM hit your bank by the next morning. Weekend requests take longer." },
                { q: "Instant Withdrawal", a: "Withdraw up to ₹25,000 instantly to your bank account once per day (9 AM - 4 PM)." },
                { q: "Why is my fund balance negative?", a: "This usually happens due to unpaid AMC charges or marking-to-market (MTM) losses." }
            ]
        },
        {
            title: "Commodities & Segments",
            icon: "fa-solid fa-leaf",
            links: [
                { q: "How to activate F&O?", a: "Upload your last 6 months' bank statement in the 'Segments' section of Console." },
                { q: "Commodity trading hours", a: "MCX trading is open from 9:00 AM to 11:30 PM (or 11:55 PM during daylight savings)." },
                { q: "What is Pledging?", a: "Pledge your stocks to get collateral margin for F&O trading. A flat fee of ₹30+GST applies." }
            ]
        },
        {
            title: "Console & Reporting",
            icon: "fa-solid fa-circle-notch",
            links: [
                { q: "Download Tax P&L", a: "Go to Console > Reports > Tax P&L. Select the year and download the Excel/PDF." },
                { q: "The 60-Day Challenge", a: "Trade profitably for 60 days to win a certificate and broker fee waivers." },
                { q: "STT & Stamp Duty charges", a: "Check the 'Charges' page for a breakdown of Government taxes like STT and SEBI fees." },
                { q: "Corporate Actions (Dividends)", a: "Dividends are credited directly to your bank account, not your trading account." }
            ]
        },
        {
            title: "Coin (Mutual Funds)",
            icon: "fa-solid fa-coins",
            links: [
                { q: "Direct vs Regular Funds?", a: "Coin only offers Direct plans, saving you 1% commission annually compared to Regular plans." },
                { q: "Start a SIP", a: "Select a fund, click 'Direct SIP', set the date, and set up an eMandate for automation." },
                { q: "Lumpsum vs SIP", a: "Lumpsum is a one-time investment; SIP is a recurring monthly investment for rupee-cost averaging." }
            ]
        },
        {
            title: "Security & Privacy",
            icon: "fa-solid fa-shield-halved",
            links: [
                { q: "Two-Factor Auth (2FA)", a: "Kite uses TOTP (External app like Google Authenticator) or Mobile Biometrics for security." },
                { q: "Kill Switch", a: "Instantly disable a segment for 12 hours to prevent over-trading or emotional trading." },
                { q: "Reporting unauthorized trades", a: "Contact our compliance team immediately at support@zerodhaclone.com if you see unknown trades." }
            ]
        }
    ];

    return ( 
        <div className='container' style={{ marginTop: "50px" }}>
            <div className='row p-4'>
                <h1 className='fs-4 text-muted mb-5 fw-normal'>To create a ticket, select a relevant topic</h1>

                {ticketData.map((category, index) => (
                    <div className='col-lg-3 col-md-6 mb-5 px-4' key={index}>
                        <h2 className='fs-6 mb-4 fw-bold' style={{ color: "#444" }}>
                            <i className={`${category.icon} me-2 text-muted`}></i> {category.title}
                        </h2>
                        <div className='d-flex flex-column gap-2'>
                            {category.links.map((item, i) => (
                                <button 
                                    key={i}
                                    onClick={() => onTopicClick(item.q, item.a)}
                                    className='btn btn-link text-start p-0 text-decoration-none' 
                                    style={{ color: "#387ed1", fontSize: "0.85rem" }}
                                >
                                    {item.q}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}

export default CreateTicket;