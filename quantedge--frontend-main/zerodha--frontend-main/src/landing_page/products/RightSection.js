import React from "react";
function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
  kiteConnect,
}) {
  return (
    <div className="container border-bottom mb-7">
      <div className="row ">

        <div className="col-5 p-5 mt-5  text-muted" style={{ lineHeight: "1.9" }}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>


            <div>
             <a
            href={learnMore}
            style={{textDecoration: "none" }}
            >
            Learn More →
            </a>
            </div>

            <div>
             <a
            href={kiteConnect}
            style={{ marginLeft: "50px", textDecoration: "none" }}
            >
            Kite Connect →
            </a>
            </div>
        </div >

        <div className="col-1">
          {/* this is for the padding in between the two cols */}
        </div>


        <div className="col-6 ">
          <img src={imageURL}  alt=""></img>
        </div>

      </div>
    </div>
  );
}

export default RightSection;
