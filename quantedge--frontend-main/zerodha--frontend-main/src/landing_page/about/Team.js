import React from 'react';

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h2 className="text-center mt-5">People</h2>
      </div>

      <div className="row p-3 p-md-5 text-muted" style={{ lineHeight: "1.9" }}>
        {/* Profile Column */}
        <div className="col-12 col-md-6 text-center mb-5 mb-md-0">
          <img 
            src="media/images/nithinKamath.jpg" 
            alt="Founder"
            style={{ borderRadius: "100%", width: "200px" }} // Reduced size
          />
          <h4 className="mt-4">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>

        {/* Bio Column - appears below image on mobile */}
        <div className="col-12 col-md-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. 
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
            Connect on: 
            <a href='' className="ms-2" style={{ textDecoration: "none" }}>Homepage</a> / 
            <a href='' className="ms-2" style={{ textDecoration: "none" }}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;