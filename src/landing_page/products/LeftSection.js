import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore}
) {
  return (
    <div className="container p-5 border-top">
      <div className="row p-5">
        <div className="col-6 p-5">
            <img src={imageURL} />
          
        </div>

        <div className="col-2"></div>

        <div className="col-4 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div>
          <a href={tryDemo}>Try Demo<i class="fa-solid fa-arrow-right"></i></a>
          <a href={learnMore} style={{marginLeft: "50px"}}>Learn more<i class="fa-solid fa-arrow-right"></i></a>
          </div>


          <div className="mt-5" >
          <a href={googlePlay}>
            <img src="media\images\googlePlayBadge.svg" />
          </a>
          <a href={appStore} className="ms-3"  >
            <img src="media/images\appstoreBadge.svg" />
          </a>
          </div>


        </div>
      </div>
    </div>
  );
}

export default LeftSection;
