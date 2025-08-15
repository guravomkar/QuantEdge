import React from 'react';

function Hero({ searchTerm, onSearch, activeAnswer, setActiveAnswer }) {
    return ( 
       <section className='container-fluid' id="supportHero" style={{ backgroundColor: "#387ed1", color: "white", padding: "0 10%" }}>
        <div className='d-flex justify-content-between align-items-center py-5' id="supportWrapper">
          <h4 className='fs-5 fw-bold'>Support Portal</h4>
          <a href="" className='text-white' style={{textDecoration: "underline"}}>Track tickets</a>
        </div>

        <div className="row pb-5">
            <div className="col-lg-7 col-md-12 p-3">
                <h1 className='fs-3 mb-4 fw-normal'>Search for an answer or browse help topics</h1>
                
                <div className="position-relative mb-4">
                    <input 
                        className='form-control p-3 ps-4 fs-5' 
                        placeholder='Eg: how do i activate F&O...' 
                        value={searchTerm}
                        onChange={(e) => {
                            onSearch(e.target.value);
                            if(e.target.value === "") setActiveAnswer(null);
                        }}
                        style={{ borderRadius: "2px", border: "none" }}
                    />
                </div>

                {/* DYNAMIC ANSWER DISPLAY */}
                {activeAnswer && (
                    <div className="p-4 mb-4 bg-white text-dark rounded shadow-sm animate__animated animate__fadeIn">
                        <h5 className="text-primary">Answer:</h5>
                        <p className="mb-0">{activeAnswer}</p>
                        <button 
                            className="btn btn-sm btn-outline-secondary mt-3" 
                            onClick={() => {onSearch(""); setActiveAnswer(null);}}
                        >
                            Clear
                        </button>
                    </div>
                )}

                <div className='d-flex flex-wrap gap-3'>
                    <span className="text-white-50">Try:</span>
                    <a href="#" className='text-white border-bottom' onClick={() => onSearch("Intraday margins")}>Intraday margins</a>
                    <a href="#" className='text-white border-bottom'>Kite user manual</a>
                </div>
            </div>

            <div className="col-lg-5 col-md-12 p-3 ps-lg-5">
                <h1 className='fs-4 mb-4 fw-normal'>Featured</h1>
                <ul className='list-unstyled' style={{lineHeight: "2.5"}}>
                    <li><i className="fa-solid fa-bullhorn me-2"></i> <a href="#" className='text-white' style={{textDecoration: "underline"}}>Current Takeovers - Jan 2024</a></li>
                    <li><i className="fa-solid fa-circle-info me-2"></i> <a href="#" className='text-white' style={{textDecoration: "underline"}}>Latest Intraday leverages</a></li>
                </ul>
            </div>
        </div>
       </section>
     );
}

export default Hero;