import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className=" p-3 " id="supportWrapper">
        <h4 className="mt-3 fs-5">Support Portal</h4>
        <a href="" className="mt-3 fs-5">Track Tickets</a>
      </div>

      <div className=" row m-5 p-5">
        <div className="col-6 mb-5 ">
          <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
          <input type="text" placeholder="Eg: how do I activate F&O, why is my order getting rejected.." />
          <br/>
          <a href="" className="ms-3">Track account opening</a>
          <a href="" className="ms-3">Track segment activation</a>
          <br/>
          <a href="" className="ms-3">Intraday margins</a>
          <a href="" className="ms-3">Kite user manual</a>
        </div>
        <div className="col-2"></div>
        <div className="col-4 mb-5  ">
          <h1 className="fs-3 mt-3">Featured</h1>
          <ol type="1" style={{lineHeight:"2.5"}}>
           <a href=""> <li>Current Takeovers and Delisting - January 2024</li></a>
           <a href=""> <li>Latest Intraday leverages - MIS & CO</li></a>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
