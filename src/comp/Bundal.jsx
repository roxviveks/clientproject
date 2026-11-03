import React from "react";
import bndal from "../pics/bndl.png";
import bndl2 from '../pics/bndl2.png'
const Bundal = () => {
  return (
    <div className="bundalmain">
      <p className="bundaltext">LESS PIECING TOGETHER. MORE GETTING STARTED.</p>
      <br />
      <h1 className="bundalheading">BUILD MORE. SPEND LESS.</h1>
      <br />
      <p className="bndlp">
        Considered combinations for the way you train. Compare the setup. Keep
        the savings.
      </p>
      <br />
      <div className="bitem1">
        <div className="picdiv">
          <img className="bpic" src={bndal} />
        </div>
        <div className="picinfo">
          <p className="topofinfo">THE HOME GYM PACKAGE</p>
          <br />
          <h1 className="headinfo">
            ALL IN. <br />
            AT HOME.
          </h1>
          <p className="infoline">
            20 kg adjustable dumbbell set, 5 kg barbell , 10 kg plate pair and
            an adjustable bench.
          </p>
          <p className="reviewinfo">★ 4.9 (22 example reviews) · In stock</p>
          <br />
          <div className="bprice">
            <span className="price1">₹14,999</span>
            <span className="price2">₹17,496</span>
          </div>
          <p className="pricedep">
            Individual items: ₹5,999 + ₹2,499 + ₹1,999 + ₹6,999
          </p>
          <button className="addcart">Add bundle to cart</button>
          <button className="more">Compare</button>
        </div>
      </div>
      <h1 className="combo">FIND YOUR COMBINATION.</h1>
      <div className="combobtn">
        <button className="cbtn">All bundles</button>
        <button className="cbtn">Beginner kits</button>
        <button className="cbtn">Home gyms</button>
        <button className="cbtn">Dumbbell sets</button>
        <button className="cbtn">Bar & plate</button>
        <button className="cbtn">Bands</button>
      </div>
    <div className="bndlflex">
        <div className="bdumb">
            <img  className="bndl2" src={bndl2}  />
            <span className="item1sp">
                <p className="review">★ 4.8 (18)</p>
                <br />
                <h1 className="itemhead">BEGINNER GYM KIT</h1>
                <br />
                <p className="infolines">5 kg dumbbell pair + band set + training mat</p>
                <br />
                <div className="bdprice">
                <p className="prices1">₹3,999</p>
                <p className="prices2">₹4,497</p>
                </div>
                <button className="addtcart">Add bundle to cart</button>
                <button className="buynow">Buy now</button>
            </span>
        </div>
    </div>
    </div>
  );
};

export default Bundal;
