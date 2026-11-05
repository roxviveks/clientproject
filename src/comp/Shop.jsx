import React from "react";
import rodpic from "../pics/rod.jpg";
import dumbbles from "../pics/dumbbel.jpg";
import plate from "../pics/plate.jpg";
import dmble from "../pics/dmb.png";
import push from "../pics/pushupbar.jpg";
import pull from "../pics/pullupbaar.jpg";
import roll from "../pics/roller.jpg";
import band from "../pics/band.jpg";
import boll from "../pics/balls.jpg";
const Shop = () => {
  return (
    <>
      <div className="shopbody">
        <div className="divshop">
          <h4 className="deolf">DEOL FITNESS</h4>
          <div className="logopics">
            <svg
              className="svglog"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              width="150px"
              height="150px"
            >
              <defs>
                <linearGradient
                  id="dGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="#55B6F6" />
                  <stop offset="45%" stop-color="#7B93EC" />
                  <stop offset="85%" stop-color="#DE53D4" />
                  <stop offset="100%" stop-color="#EF49A9" />
                </linearGradient>
              </defs>

              <rect
                x="40"
                y="40"
                width="420"
                height="420"
                rx="85"
                ry="85"
                fill="#0B0D13"
                stroke="#55CAFA"
                stroke-width="7"
              />

              <rect
                x="115"
                y="244"
                width="270"
                height="12"
                rx="6"
                fill="#FFFFFF"
              />

              <rect
                x="133"
                y="177"
                width="22"
                height="146"
                rx="11"
                fill="#55CAFA"
              />

              <rect
                x="163"
                y="202"
                width="16"
                height="96"
                rx="8"
                fill="#EE349A"
              />

              <rect
                x="321"
                y="202"
                width="16"
                height="96"
                rx="8"
                fill="#EE349A"
              />

              <rect
                x="345"
                y="177"
                width="22"
                height="146"
                rx="11"
                fill="#55CAFA"
              />

              <path
                d="M 198 185 
       H 248 
       C 292 185, 307 205, 307 250 
       C 307 295, 292 315, 248 315 
       H 210 
       C 203.373 315, 198 309.627, 198 303 
       V 185 Z
       
       M 235 220 
       V 280 
       H 246 
       C 269 280, 275 270, 275 250 
       C 275 230, 269 220, 246 220 
       H 235 Z"
                fill="url(#dGradient)"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="shoptophead">
          <h1>BUILT FOR THE WORK.</h1>
          <p>
            From your first dumbbell to your next barbell. Find the right weight
            <br />
            for the way you train.
          </p>
        </div>

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
        <div className="shopend">
          <img className="shoppic" src={dmble} />
          <div className="specscontainer">
            <div className="specrow">
              <span className="speclabel">Material</span>
              <span className="specvalue">
                Rubber heads, knurled steel handles
              </span>
            </div>

            <div className="specrow">
              <span className="spec-label">Individual / total weight</span>
              <span className="spec-value">
                10 kg per dumbbell / 20 kg pair
              </span>
            </div>

            <div className="specrow">
              <span className="spec-label">Manufacturer age guidance</span>
              <span className="spec-value">See manufacturer guidance</span>
            </div>

            <div className="specrow">
              <span className="spec-label">Maximum rated load</span>
              <span className="spec-value">See manufacturer guidance</span>
            </div>

            <div className="specrowlastrow">
              <span className="spec-label">Return period</span>
              <span className="spec-value">
                Pending owner confirmation before launch
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
