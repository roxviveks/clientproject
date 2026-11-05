import React from "react";
import rods from "../pics/rods.jpg";
import weight from '../pics/plate.jpg'
import dmble from '../pics/dmb.png'
import grip from '../pics/grip.jpg'
import band from '../pics/band.jpg'
import push from '../pics/pushupbar.jpg'
import pull from '../pics/pullupbaar.jpg'
import roll from '../pics/roller.jpg'
import boll from '../pics/ball.jpg'
import sech from '../pics/homesecpic.png'

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
      <h1 className="homeitemsheading">YOUR SPACE. YOUR SETUP.</h1>
      <div className="homeitems">
        <div className="homegymitems">
          <img className="rods" src={rods} />
          <span className="itemgym">  
            <br />
            <h1 className="gymitemhead">RODS & BARBELLS</h1>
            <br />
            <span className="GI">
            <p className="gymitemprice">From ₹2,499</p>
            <a href="#" className="cartadd">↗ </a>
            </span>
          </span>

        </div>
        <div className="homegymitems">
              <img className="rods" src={weight} />
          <span className="itemgym">  
            <br />
            <h1 className="gymitemhead">RODS & BARBELLS</h1>
            <br />
            <span className="GI">
            <p className="gymitemprice">From ₹2,499</p>
            <a href="#" className="cartadd">↗ </a>
            </span>
          </span>
          
        </div>
        <div className="homegymitems">
              <img className="rods" src={dmble} />
          <span className="itemgym">  
            <br />
            <h1 className="gymitemhead">RODS & BARBELLS</h1>
            <br />
            <span className="GI">
            <p className="gymitemprice">From ₹2,499</p>
            <a href="#" className="cartadd">↗ </a>
            </span>
          </span>
        </div>
        <div className="homegymitems">
                    <img className="rods" src={grip} />
          <span className="itemgym">  
            <br />
            <h1 className="gymitemhead">RODS & BARBELLS</h1>
            <br />
            <span className="GI">
            <p className="gymitemprice">From ₹2,499</p>
            <a href="#" className="cartadd">↗ </a>
            </span>
          </span>
        </div>
        <div className="homegymitems">
                    <img className="rods" src={band} />
          <span className="itemgym">  
            <br />
            <h1 className="gymitemhead">RODS & BARBELLS</h1>
            <br />
            <span className="GI">
            <p className="gymitemprice">From ₹2,499</p>
            <a href="#" className="cartadd">↗ </a>
            </span>
          </span>
        </div>
        <div className="homegymitems">
                    <img className="rods" src={push} />
          <span className="itemgym">  
            <br />
            <h1 className="gymitemhead">RODS & BARBELLS</h1>
            <br />
            <span className="GI">
            <p className="gymitemprice">From ₹2,499</p>
            <a href="#" className="cartadd">↗ </a>
            </span>
          </span>
        </div>
        <div className="homegymitems">
                    <img className="rods" src={pull} />
          <span className="itemgym">  
            <br />
            <h1 className="gymitemhead">RODS & BARBELLS</h1>
            <br />
            <span className="GI">
            <p className="gymitemprice">From ₹2,499</p>
            <a href="#" className="cartadd">↗ </a>
            </span>
          </span>
        </div>
        <div className="homegymitems">
                    <img className="rods" src={roll} />
          <span className="itemgym">  
            <br />
            <h1 className="gymitemhead">RODS & BARBELLS</h1>
            <br />
            <span className="GI">
            <p className="gymitemprice">From ₹2,499</p>
            <a href="#" className="cartadd">↗ </a>
            </span>
          </span>
        </div>
        <div className="homegymitems">
                    <img className="rods" src={boll} />
          <span className="itemgym">  
            <br />
            <h1 className="gymitemhead">RODS & BARBELLS</h1>
            <br />
            <span className="GI">
            <p className="gymitemprice">From ₹2,499</p>
            <a href="#" className="cartadd">↗ </a>
            </span>
          </span>
        </div>
      </div>
      <div className="homesec">
        <img className="picsec" src={sech} alt="" />
        <div className="picsecinfo">
          <p>02 / MORE GEAR. SMARTER VALUE.</p>
          
        </div>
      </div>
    </div>
  );
};

export default Bodys;
