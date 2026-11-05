import React from "react";
import rodpic from "../pics/rod.jpg";
import dumbbles from "../pics/dumbbel.jpg";
import plate from "../pics/plate.jpg";
import dmble from '../pics/dmb.png'
import push from '../pics/pushupbar.jpg'
import pull from '../pics/pullupbaar.jpg'
import roll from '../pics/roller.jpg'
import band from '../pics/band.jpg'
import boll from '../pics/balls.jpg'
const Shop = () => {
  return (
    <div className="shopbody">
      <div className="mainshop">
        <div className="sidebar">
          <div className="filterdiv">
            <h3>Filters</h3>
            <span className="resetfilter">Reset all</span>
          </div>

          <div className="filterbox">
            <p className="prodcutlist">Product type</p>
            <div className="boxlist">
              <label>
                <input type="checkbox" defaultChecked /> All equipment
              </label>
              <label>
                <input type="checkbox" /> Dumbbells
              </label>
              <label>
                <input type="checkbox" /> Rods / barbells
              </label>
              <label>
                <input type="checkbox" /> Weight plates
              </label>
              <label>
                <input type="checkbox" /> Resistance bands
              </label>
            </div>
          </div>

          <div className="filterbox">
            <p className="prodcutlist">Total equipment weight</p>
            <div className="boxlist">
              <label>
                <input type="checkbox" defaultChecked /> All weights
              </label>
              <label>
                <input type="checkbox" /> Under 5 kg
              </label>
              <label>
                <input type="checkbox" /> 5-10 kg
              </label>
              <label>
                <input type="checkbox" /> 10-20 kg
              </label>
              <label>
                <input type="checkbox" /> 20 kg and above
              </label>
            </div>
          </div>

          <div className="filterbox">
            <p className="prodcutlist">Brand</p>
            <div className="boxlist">
              <label>
                <input type="checkbox" defaultChecked /> All brands
              </label>
              <label>
                <input type="checkbox" /> DEOL Essentials
              </label>
              <label>
                <input type="checkbox" /> DEOL Performance
              </label>
            </div>
          </div>
        </div>
        <div className="sitem">
        <div className="shopsitem">
          <img className="sitempic1" src={dumbbles} />
          <span className="siteminfo">
            <br />
            <h3 className="sitemhead">DUMBBELLS</h3>
            <br />
            <span className="DP">
              <p className="siprice">From ₹2,499</p>
              <a href="#" className="cartadd">
                ↗
              </a>
            </span>
          </span>
          <div className="sbtndiv">
            <button className="shopbtn">Buy</button>
            <button className="shopbtn">Add to cart</button>
          </div>
          </div>
          <div className="shopsitem">
            <img className="sitempic1" src={rodpic} />
            <span className="siteminfo">
              <br />
              <h3 className="sitemhead">RODS & BARBELLS</h3>
              <br />
              <span className="DP">
                <p className="siprice">From ₹2,499</p>
                <a href="#" className="cartadd">
                  ↗
                </a>
              </span>
            </span>
            <div className="sbtndiv">
              <button className="shopbtn">Buy</button>
              <button className="shopbtn">Add to cart</button>
            </div>
          </div>
          <div className="shopsitem">
            <img className="sitempic1" src={plate} />
            <span className="siteminfo">
              <br />
              <h3 className="sitemhead">Weight Plates</h3>
              <br />
              <span className="DP">
                <p className="siprice">From ₹2,499</p>
                <a href="#" className="cartadd">
                  ↗
                </a>
              </span>
            </span>
            <div className="sbtndiv">
              <button className="shopbtn">Buy</button>
              <button className="shopbtn">Add to cart</button>
            </div>
          </div>
          <div className="shopsitem">
            <img className="sitempic1" src={roll} />
            <span className="siteminfo">
              <br />
              <h3 className="sitemhead">AB ROLL</h3>
              <br />
              <span className="DP">
                <p className="siprice">From ₹569</p>
                <a href="#" className="cartadd">
                  ↗
                </a>
              </span>
            </span>
            <div className="sbtndiv">
              <button className="shopbtn">Buy</button>
              <button className="shopbtn">Add to cart</button>
            </div>
          </div>
          <div className="shopsitem">
            <img className="sitempic1" src={boll} />
            <span className="siteminfo">
              <br />
              <h3 className="sitemhead">MEDICINE BALLS</h3>
              <br />
              <span className="DP">
                <p className="siprice">From ₹799</p>
                <a href="#" className="cartadd">
                  ↗
                </a>
              </span>
            </span>
            <div className="sbtndiv">
              <button className="shopbtn">Buy</button>
              <button className="shopbtn">Add to cart</button>
            </div>
          </div>
          <div className="shopsitem">
            <img className="sitempic1" src={band} />
            <span className="siteminfo">
              <br />
              <h3 className="sitemhead">RESISTANCE BAND</h3>
              <br />
              <span className="DP">
                <p className="siprice">From ₹299</p>
                <a href="#" className="cartadd">
                  ↗
                </a>
              </span>
            </span>
            <div className="sbtndiv">
              <button className="shopbtn">Buy</button>
              <button className="shopbtn">Add to cart</button>
            </div>
          </div>

          {/* dumble2 */}
          
          <div className="shopsitem">
            <img className="sitempic1" src={dmble} />
            <span className="siteminfo">
              <br />
              <h3 className="sitemhead">DUMBBELLS</h3>
              <br />
              <span className="DP">
                <p className="siprice">From ₹499</p>
                <a href="#" className="cartadd">
                  ↗
                </a>
              </span>
            </span>
            <div className="sbtndiv">
              <button className="shopbtn">Buy</button>
              <button className="shopbtn">Add to cart</button>
            </div>
          </div>
          <div className="shopsitem">
            <img className="sitempic1" src={push} />
            <span className="siteminfo">
              <br />
              <h3 className="sitemhead">PUSH-UPS BAR</h3>
              <br />
              <span className="DP">
                <p className="siprice">From ₹699</p>
                <a href="#" className="cartadd">
                  ↗
                </a>
              </span>
            </span>
            <div className="sbtndiv">
              <button className="shopbtn">Buy</button>
              <button className="shopbtn">Add to cart</button>
            </div>
          </div>
          <div className="shopsitem">
            <img className="sitempic1" src={pull} />
            <span className="siteminfo">
              <br />
              <h3 className="sitemhead">PULL-UPS BAR</h3>
              <br />
              <span className="DP">
                <p className="siprice">From ₹799</p>
                <a href="#" className="cartadd">
                  ↗
                </a>
              </span>
            </span>
            <div className="sbtndiv">
              <button className="shopbtn">Buy</button>
              <button className="shopbtn">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
