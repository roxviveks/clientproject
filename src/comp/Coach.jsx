import React from "react";
import coachs from "../pics/coach.png";
const Coach = () => {
  return (
    <div className="coachhead">
      <div className="coachdiv">
        <div className="cwrite">
          <p className="coachp">THE PLAN BEHIND THE PROGRESS.</p>
          <br />
          <h1 className="coachh">TRAIN WITH <br />A PURPOSE.</h1>
          <p className="coachnote">
            The right guidance makes every session count. Connect with a coach,
            work on your technique and build a plan around your goals.
          </p>
          <div className="coachbtn">
            <button className="cbtn1">Book a consultation ↗</button>
            <button className="cbtn2">Explore plans</button>
          </div>
          <p className="coachdep">
            Online consultations from ₹499 · 30 minutes · Your space, your pace
          </p>
        </div>
        <img className="coachmainpic" src={coachs} alt="" />
      </div>
      <br />
      <br />
      <h1 className="ch1">A PLAN THAT MEETS YOU HERE.</h1>
      <div className="coachbody">
        <div className="cdiv1"></div>
        <div className="cdiv2"></div>
        <div className="cdiv3"></div>
        <div className="cdiv4"></div>
      </div>
    </div>
  );
};

export default Coach;
