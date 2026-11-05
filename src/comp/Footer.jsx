import React from "react";

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
          <a className="footlink">Shop equipment</a>
          <br />
          <br />
          <a className="footlink">Gym bundles & offers</a>
          <br />
          <br />
          <a className="footlink">Online coaching</a>
          <br />
          <br />
          <a className="footlink">About Us</a>
        </div>
        <div className="foot">
          <h4 className="foothead">Your account</h4>
          <br />
          <a className="footlink">Log in / Register</a>
          <br />
          <br />
          <a className="footlink">Track an order</a>
          <br />
          <br />
          <a className="footlink">Saved products</a>
          <br />
          <br />
          <a className="footlink">Terms and Conditions</a>
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
