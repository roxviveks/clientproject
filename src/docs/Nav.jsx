import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <svg
            className="svglog"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            width="100px"
            height="100px"
          >
            <defs>
              <linearGradient
                id="dGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#55B6F6" />
                <stop offset="45%" stopColor="#7B93EC" />
                <stop offset="85%" stopColor="#DE53D4" />
                <stop offset="100%" stopColor="#EF49A9" />
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
          <span className="df" to='/'>
              DEOL <br /> <span className="fit">FITNESS</span> 
          </span>
        </div>
        <div className="aboutus">
          <Link to="/" className="home">
              <span className="home">HOME</span>
          </Link>
          <Link className="shop" to="/shop">
          
            SHOP
          </Link>
          <Link to='/bundles'
            className="bundle">
            BUNDLE
          </Link>
          <Link to='/coaching' className="coaching">
            COACHING
          </Link>
          <Link to="/About" className="about">
            ABOUT
          </Link>
          <Link to="/terms" className="terms">
            TERMS
          </Link>
        </div>
        <span className="nsearch">
          <input className="ninput" type="text" placeholder="Search Equipments" />
        </span>

        <div className="menu">
          <div className="navcart"></div>
          <Link to="/login" className="log">
            log in
          </Link>
          <span className="nsvg"></span>
        </div>
      </div>
    </>
  );
};

export default Nav;
