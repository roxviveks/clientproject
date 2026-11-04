import React from "react";
import rods from "../pics/rods.jpg";
const Bodys = () => {
  return (
    <div className="homebody">
      <div className="bgrid">
        <div className="write">
          <h1 className="head1">
            Buy the gear. <br />
            Learn to use it.
          </h1>
          <br />
          <p className="dmbp">
            Dumbbells, barbells, plates and bands, plus online coaches who build
            your plan and track your progress. All in one place.
          </p>
          <div className="btns">
            <button className="buy">Add to Cart</button>
            <button className="info">Learn more</button>
          </div>
        </div>
        <div className="imge1"></div>
      </div>
      <div className="homeitems">
        <div className="rod">
          <img className="rods" src={rods} />
          <span className="itemrod">  
            <br />
            <h1 className="rodhead">RODS & BARBELLS</h1>
            <br />
            <span className="RP">
            <p className="rodprice">From ₹2,499</p>
            <a href="#" className="cartadd">↗ </a>
            </span>

          </span>

        </div>
        <div className="plate"></div>
        <div className="bags"></div>
        <div className="kettbell"></div>
      </div>
    </div>
  );
};

export default Bodys;
