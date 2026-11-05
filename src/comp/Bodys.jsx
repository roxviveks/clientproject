import React from "react";
import rods from "../pics/rods.jpg";
import weight from "../pics/plate.jpg";
import dmble from "../pics/dmb.png";
import grip from "../pics/grip.jpg";
import band from "../pics/band.jpg";
import push from "../pics/pushupbar.jpg";
import pull from "../pics/pullupbaar.jpg";
import roll from "../pics/roller.jpg";
import boll from "../pics/ball.jpg";
import sech from "../pics/homesecpic.png";

const Bodys = () => {
  return (
    <div className="homebody">
      <div className="bgrid">
        <div className="write">
          <h1 className="head1">
            <span className="gear">Buy the gear. </span>
            <br />
            Learn to use it.
          </h1>
          <br />
          <p className="dmbp">
            <span className="deolf">
              DEOL FITNESS <br />
            </span>
            Gives you dumbbells, barbells, plates and bands, plus online coaches
            who build your plan and track your progress.{" "}
            <span className="gear">All in one place.</span>
          </p>
          <div className="btns">
            <button className="buy">Add to Cart</button>
            <button className="info">Learn more</button>
          </div>
        </div>
        <div className="imge1"></div>
      </div>
      <div className="homeshop">
        <p className="homeitemp">01 / EQUIP YOUR AMBITION</p>
        <h1 className="homeitemsheading">YOUR SPACE. YOUR SETUP.</h1>
        <span className="deolf1">
          DEOL FITNESS
          <br />
          <br />
          <br />
        </span>
      </div>
      <div className="homeitems">
        <div className="homegymitems">
          <img className="rods" src={rods} />
          <span className="itemgym">
            <br />
            <h1 className="gymitemhead">RODS & BARBELLS</h1>
            <br />
            <span className="GI">
              <p className="gymitemprice">From ₹2,499</p>
              <a href="#" className="cartadd">
                ↗
              </a>
            </span>
          </span>
        </div>
        <div className="homegymitems">
          <img className="rods" src={weight} />
          <span className="itemgym">
            <br />
            <h1 className="gymitemhead">WEIGHTS PLATE</h1>
            <br />
            <span className="GI">
              <p className="gymitemprice">From ₹1,999</p>
              <a href="#" className="cartadd">
                ↗
              </a>
            </span>
          </span>
        </div>
        <div className="homegymitems">
          <img className="rods" src={dmble} />
          <span className="itemgym">
            <br />
            <h1 className="gymitemhead">DUMBBELLS</h1>
            <br />
            <span className="GI">
              <p className="gymitemprice">From ₹999</p>
              <a href="#" className="cartadd">
                ↗{" "}
              </a>
            </span>
          </span>
        </div>
        <div className="homegymitems">
          <img className="rods" src={grip} />
          <span className="itemgym">
            <br />
            <h1 className="gymitemhead">HAND GRIPPER</h1>
            <br />
            <span className="GI">
              <p className="gymitemprice">From ₹499</p>
              <a href="#" className="cartadd">
                ↗
              </a>
            </span>
          </span>
        </div>
        <div className="homegymitems">
          <img className="rods" src={band} />
          <span className="itemgym">
            <br />
            <h1 className="gymitemhead">RESISTANCE BAND</h1>
            <br />
            <span className="GI">
              <p className="gymitemprice">From ₹699</p>
              <a href="#" className="cartadd">
                ↗
              </a>
            </span>
          </span>
        </div>
        <div className="homegymitems">
          <img className="rods" src={push} />
          <span className="itemgym">
            <br />
            <h1 className="gymitemhead">PUSH-UPS BAR</h1>
            <br />
            <span className="GI">
              <p className="gymitemprice">From ₹599</p>
              <a href="#" className="cartadd">
                ↗{" "}
              </a>
            </span>
          </span>
        </div>
        <div className="homegymitems">
          <img className="rods" src={pull} />
          <span className="itemgym">
            <br />
            <h1 className="gymitemhead">PULL-UP BAR</h1>
            <br />
            <span className="GI">
              <p className="gymitemprice">From ₹1,999</p>
              <a href="#" className="cartadd">
                ↗{" "}
              </a>
            </span>
          </span>
        </div>
        <div className="homegymitems">
          <img className="rods" src={roll} />
          <span className="itemgym">
            <br />
            <h1 className="gymitemhead">AB-ROLL</h1>
            <br />
            <span className="GI">
              <p className="gymitemprice">From ₹499</p>
              <a href="#" className="cartadd">
                ↗{" "}
              </a>
            </span>
          </span>
        </div>
        <div className="homegymitems">
          <img className="rods" src={boll} />
          <span className="itemgym">
            <br />
            <h1 className="gymitemhead">SLAM BALL</h1>
            <br />
            <span className="GI">
              <p className="gymitemprice">From ₹799</p>
              <a href="#" className="cartadd">
                ↗{" "}
              </a>
            </span>
          </span> 
        </div>
      </div>
      <div className="homesec">
        <img className="picsec" src={sech} />
        <div className="picsecinfo">
          <p>02 / MORE GEAR. SMARTER VALUE.</p>
          <h2 className="picsechead1">
            YOUR HOME GYM. <br />
            ALL TOGETHER.
          </h2>
          <p>
            A bench, adjustable dumbbells, a straight bar and a plate pair. One
            considered setup for your next chapter.
          </p>
          <div className="homepricespan">
            <span className="pricehomesec">₹14,999</span>
            <span className="pricehomesec2">₹17,496</span>
          </div>
          <p className="secp">
            20 kg dumbbell set + 5 kg bar + 10 kg plate pair + bench. Bench
            weight: see manufacturer guidance.
          </p>
          <div className="homebookdiv">
            <div className="booknowhome">Explore gym bundles ↗</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bodys;
