import React from "react";
import rods from "../pics/rods.jpg";
import weight from "../pics/plate.jpg";
import dmble from "../pics/dmb.png";
import skip from "../pics/skiping.jpg";
import band from "../pics/band.jpg";
import rope from "../pics/rope.jpg";
import grip from "../pics/grip.jpg";
import foam from "../pics/foam.jpg";
import push from "../pics/pushupbar.jpg";
import pull from "../pics/pullupbaar.jpg";
import roll from "../pics/roller.jpg";
import boll from "../pics/ball.jpg";
import sech from "../pics/homesecpic.png";
import gym from "../pics/gymcoach.jpg";

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
      <span id="first"></span>
      </div>
      <div className="homeshop">
        <p  className="homeitemp">01 / EQUIP YOUR AMBITION</p>
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
        <div className="homegymitems">
          <img className="rods" src={foam} />
          <span className="itemgym">
            <br />
            <h1 className="gymitemhead">RODS & BARBELLS</h1>
            <br />
            <span className="GI">
              <p className="gymitemprice">From ₹2,499</p>
              <a href="#" className="cartadd">
                ↗{" "}
              </a>
            </span>
          </span>
        </div>
        <div className="homegymitems">
          <img className="rods" src={skip} />
          <span className="itemgym">
            <br />
            <h1 className="gymitemhead">RODS & BARBELLS</h1>
            <br />
            <span className="GI">
              <p className="gymitemprice">From ₹2,499</p>
              <a href="#" className="cartadd">
                ↗{" "}
              </a>
            </span>
          </span>
        </div>
        <div className="homegymitems">
          <img className="rods" src={rope} />
          <span className="itemgym">
            <br />
            <h1 className="gymitemhead">RODS & BARBELLS</h1>
            <br />
            <span className="GI">
              <p className="gymitemprice">From ₹2,499</p>
              <a href="#" className="cartadd">
                ↗{" "}
              </a>
            </span>
          </span>
        </div>
      </div>
      <span id="second"></span>
      <div className="homesec">
        <img className="picsec" src={sech} />
        <div className="picsecinfo">
          <p className="moregear">02 / MORE GEAR. SMARTER VALUE.</p>
          <h2 className="picsechead1">
            YOUR HOME GYM. <br />
            ALL TOGETHER.
          </h2>
          <p className="gearpara">
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
      <span id="three"></span>
      <div className="line03" ></div>
      <div className="homecoach">
        <div className="hcoachinfo">
          <p className="hcpara">03 / TRAIN WITH DIRECTION</p>
          <h1 className="hch1">
            GOOD EQUIPMENT. <br />
            BETTER GUIDANCE.
          </h1>
          <p className="hcpara1">
            Get a plan that meets you where you are. Work on technique, build
            consistency and track your progress with an online coach.
          </p>
          <p className="hclinkp">
            Beginner foundations / Muscle building / Fat loss / Strength
          </p>
          <div className="hcbtnp">
            <div className="meetc">Meet your coach ↗</div>
            <div className="bookhc">Book Now</div>
          </div>
          <p className="hcpara2">
            Consultations from ₹499 · Online · Built around your goals
          </p>
        </div>
        <div className="hcpics">
          <img className="hcpic" src={gym} alt="" />
          <div className="aditiinfo">
            <h6 className="aditicoach">Aditi Rao · Strength & foundations</h6>
            <p className="aditipara">
              Sample coach profile · Individual plans, shared commitment.
            </p>
          </div>
        </div>
      </div>
      <div className="homeend">
        <p className="homeitemp">ONE CONNECTED JOURNEY</p>
        <h2 className="homeitemsheading">EQUIP. TRAIN. PROGRESS.</h2>
      </div>
      <div className="homerecape">
        <a href="#first" className="recapdiv">
          <span className="countno">01/</span>
          <h2 className="counthead">CHOOSE YOUR GEAR</h2>
          <p className="countpara">
            Compare weight, materials and manufacturer guidance. Build a setup
            that fits your space.
          </p>
        </a>
        <a href="#second" className="recapdiv">
          <span className="countno">02/</span>
          <h2 className="counthead">FIND YOUR DIRECTION</h2>
          <p className="countpara">
            Choose a coach and book an online consultation. Get a practical plan
            for your goals.
          </p>
        </a>
        <a href="#three" className="recapdiv">
          <span className="countno">03/</span>
          <h2 className="counthead">MAKE IT A ROUTINE</h2>
          <p className="countpara">
            See your workouts, upcoming sessions and progress together in your
            account.
          </p>
        </a>
      </div>
    </div>
  );
};

export default Bodys;
