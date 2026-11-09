import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footermain">
      <div className="footflex">
        <div className="foot1">
          <h1>DEOL FITNESS</h1>
          <p>
            Quality equipment. Expert guidance. Strength training that belongs
            in every home.
          </p>
          <a className="foota" href="#">
            EQUIP. TRAIN. PROGRESS.
          </a>
        </div>
        <div className="foot">
          <h4 className="foothead">Explore</h4>
          
          <br />
          <Link to='/shop' className="footlink">Shop equipment</Link>
          <br />
          <br />
          <Link to='/bundles' className="footlink">Gym bundles & offers</Link>
          <br />
          <br />
          <Link to='/coaching' className="footlink">Online coaching</Link>
          <br />
          <br />
          <Link to='/About' className="footlink">About Us</Link>
        </div>
        <div className="foot">
          <h4 className="foothead">Your account</h4>
          <br />
          <Link to='/login' className="footlink">Log in / Register</Link>
          <br />
          <br />
          <a className="footlink">Track an order</a>
          <br />
          <br />
          <a className="footlink">Saved products</a>
          <br />
          <br />
          <Link to='/terms' className="footlink">Terms and Conditions</Link>
        </div>
        <div className="foot">
          <h4 className="foothead">Here to help</h4>
          <br />
          <p className="fp">
            Orders, returns, product safety and coaching bookings.
          </p>
          <br />
          <p className="fp">
            Support contact details pending owner confirmation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
