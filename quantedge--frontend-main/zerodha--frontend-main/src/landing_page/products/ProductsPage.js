import React from "react";
import Hero from "./Hero.js";
import LeftSection from "./LeftSection.js";
import RightSection from "./RightSection.js";
import Universe from "./Universe";
import { Link } from "react-router-dom";
function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription={
        <>
         Our ultra-fast flagship trading platform with <br />
           streaming market data, advanced charts, an <br/>
          elegant UI, and more. Enjoy the Kite <br/>
          experience seamlessly on your Android and <br/>
           iOS devices.
         </>
  }
        tryDemo=""
         learnMore=""
       googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3&hl=en_IN"
  appStore="https://apps.apple.com/lk/app/zerodha-kite-trade-invest/id1449453802"

      />

        <RightSection
        
         imageURL="media/images/console.png"
        productName="Console"
        productDescription={
        <>
            The central dashboard for your Zerodha <br/>
         account. Gain insights into your trades and <br/>
         investments with in-depth reports and <br/>
         visualisations.
         </>
  }
       
        learnMore=""
    
         />


       <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription={
        <>
         Buy direct mutual funds online, commission- <br/>
         free, delivered directly to your Demat  <br/>
         account. Enjoy the investment experience <br/>
         on your Android and iOS devices.
         </>
  }
        tryDemo=""
        learnMore=""
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3&hl=en_IN"
  appStore="https://apps.apple.com/lk/app/zerodha-kite-trade-invest/id1449453802"
      />

        <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription={
        <>
        Build powerful trading platforms and<br/>
         experiences with our super simple <br/>
         HTTP/JSON APIs. If you are a startup, build <br/>
         your investment app and showcase it to our<br/> 
         clientbase.
         </>
        }

       kiteConnect=""
         />



       <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity mobile"
        productDescription={
        <>
         An easy to grasp, collection of stock market<br/>
          lessons with in-depth coverage and <br/>
          illustrations. Content is broken down into <br/>
           bite-size cards to help you learn on the go.
         </>
  }
        tryDemo=""
        learnMore=""
       googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3&hl=en_IN"
  appStore="https://apps.apple.com/lk/app/zerodha-kite-trade-invest/id1449453802"
      />

      <div className="text-center mt-5 mb-5 text-muted">
         <p>Want to know more about our technology stack? Check out the <Link>Zerodha.tech</Link> blog.</p>
      </div>
     

    
      <Universe />
    </>
  );
}

export default ProductsPage;
