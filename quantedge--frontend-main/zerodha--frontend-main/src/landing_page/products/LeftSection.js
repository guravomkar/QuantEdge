import React from 'react';

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  // Setting default values for the store links
  googlePlay = "https://play.google.com/store/apps/details?id=com.zerodha.kite3&hl=en_IN",
  appStore = "https://apps.apple.com/lk/app/zerodha-kite-trade-invest/id1449453802",
}) {
    return ( 
      <div className='container border-bottom mb-7'>
        <div className='row align-items-center'>
            <div className='col-6 p-5'>
                <img src={imageURL} alt={productName} style={{ width: "100%" }} />
            </div>

            <div className='col-1'>
            {/* spacer column */}
            </div>

            <div className='col-5 p-5 text-muted' style={{ lineHeight: "1.9"}}>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
            
                {/* Demo and Learn More Links (if applicable) */}
                <div className='mb-3'>
                    {tryDemo && <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo →</a>}
                    {learnMore && <a href={learnMore} style={{marginLeft:"50px" , textDecoration:"none"}}>Learn More →</a>}
                </div>
                
                {/* Store Badges */}
                <div className='mt-4 d-flex align-items-center'>
                    <a href={googlePlay} target="_blank" rel="noopener noreferrer">
                        <img src="media/images/googlePlayBadge.svg" alt="Google Play Store" />
                    </a>
                    <a href={appStore} target="_blank" rel="noopener noreferrer" style={{ marginLeft: "20px" }}>
                        <img src="media/images/appstoreBadge.svg" alt="App Store" />
                    </a>
                </div>
            </div>
        </div>
      </div>
    );
}

export default LeftSection;