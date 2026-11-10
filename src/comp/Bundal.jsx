import React from "react";
import bndal from "../pics/bndl.png";
import bndl2 from "../pics/bndl2.png";
import kit3 from "../pics/kit1.png";
import kit2 from "../pics/KIT3.png";

const Bundal = () => {
   window.scrollTo({top:0, behavior:'smooth'})
  return (
    <div className="bmainbody">
      <div className="bundalmain">
        <p className="bundaltext">
          LESS PIECING TOGETHER. MORE GETTING STARTED.
        </p>
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
              <span className="prices1">₹14,999</span>
              <span className="prices2">₹17,496</span>
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
            <img className="bndl2" src={bndl2} />
            <span className="item1sp">
              <p className="review">★ 4.3 (12)</p>
              <br />
              <h1 className="itemhead">BEGINNER GYM KIT</h1>
              <br />
              <p className="infolines">
                5 kg dumbbell pair + band set + training mat
                <br />
                <br />
                <br />
              </p>
              <br />
              <div className="bdprice">
                <p className="price1">₹3,999</p>
                <p className="price2">₹4,497</p>
              </div>
              <div className="bndlbtns">
                <button className="addtcart">Add bundle to cart</button>
                <button className="buynow">Buy now</button>
              </div>
            </span>
          </div>
          <div className="bdumb">
            <img className="bndl2" src={kit2} />
            <span className="item1sp">
              <p className="review">★ 4.5 (16)</p>
              <br />
              <h1 className="itemhead">INTERMIDIATE GYM KIT</h1>
              <br />
              <p className="infolines">
                Barbell Rod 7ft, Weight Plates (20kg,10kg,5kg,2.5kg) <br />{" "}
                Spring Collars (Clips).
              </p>
              <br />
              <br />
              <div className="bdprice">
                <p className="price1">₹5,999</p>
                <p className="price2">₹8,490</p>
              </div>
              <div className="bndlbtns">
                <button className="addtcart">Add bundle to cart</button>
                <button className="buynow">Buy now</button>
              </div>
            </span>
          </div>
          <div className="bdumb">
            <img className="bndl2" src={kit3} />
            <span className="item1sp">
              <p className="review">★ 4.9 (19)</p>
              <br />
              <h1 className="itemhead">ADVANCE GYM KIT</h1>
              <br />
              <p className="infolines">
                Gym loded Bag + Dumbbells 10kg + Kettlebell 16kg <br /> Yoga Mat
                + Weightlifting Belt + Jump Rope <br />
                Gym Gloves + Resistance Bands + Lifting Straps.
              </p>
              <br />
              <div className="bdprice">
                <p className="price1">₹9,999</p>
                <p className="price2">₹15,499</p>
              </div>
              <div className="bndlbtns">
                <button className="addtcart">Add bundle to cart</button>
                <button className="buynow">Buy now</button>
              </div>
            </span>
          </div>
        </div>
        <h2 className="bmidhead">CHOOSE WHAT FITS.</h2>
        <div className="bundalheadmid">
          <div className="btablediv">
            <p className="parabndal">SETUP</p>
            <p className="parabndal">BEGINNER KIT</p>
            <p className="parabndal">INTERMIDIATE KIT</p>
            <p className="parabndal">ADVANCE KIT</p>
          </div>
          <div className="btablediv2">
            <p className="parabndal">Best for</p>
            <p className="parabndal">Getting started</p>
            <p className="parabndal">Weight progression</p>
            <p className="parabndal">Dedicated training space</p>
          </div>
          <div className="btablediv3">
            <p className="parabndal">Included</p>
            <p className="parabndal">basic equipment </p>
            <p className="parabndal">fixed-weight pairs</p>
            <p className="parabndal">Basic equipment bench</p>
          </div>
          <div className="btablediv4">
            <p className="parabndal">Individual total</p>
            <p className="parabndal">₹4,497</p>
            <p className="parabndal">₹5,498</p>
            <p className="parabndal">₹17,496</p>
          </div>
          <div className="btablediv5">
            <p className="parabndal">Bundle Price</p>
            <p className="parabndal">₹3,999</p>
            <p className="parabndal">₹4,999</p>
            <p className="parabndal">₹14,999</p>
          </div>
          <div className="btablediv6">
            <p className="parabndal">You save</p>
            <p className="parabndal">₹498</p>
            <p className="parabndal">₹499</p>
            <p className="parabndal">₹2,497</p>
          </div>
        </div>
        <div className="bndlend">
          <div className="enddivbndl1">
            <p className="endhpara">YOUR SETUP, YOUR STORY</p>
            <br />
            <h2 className="endhead">
              STARTING <br />
              STRONG.
            </h2>
          </div>
          <div className="enddivbndl">
            <p className="paraeb">★★★★★</p>
            <br />
            <p className="ebpara">
              “The comparison made it easy to choose the kit that actually fits
              my room.”
            </p>
            <br />
            <p className="ebpara1">Meera K. · Beginner kit · Example review</p>
          </div>
          <div className="enddivbndl">
            <p className="paraeb">★★★★★</p>
            <br />
            <p className="ebpara">
              “A useful mix of weights, with room to build a routine around
              them.”
            </p>
            <br />
            <p className="ebpara1">
              Kabir S. · Home gym package · Example review
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bundal;
