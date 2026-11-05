import React from "react";
import coachs from "../pics/coach.jpg";
const Coach = () => {
  return (
    <div className="coachhead">
      <div className="coachdiv">
        <div className="cwrite">
          <p className="coachp">THE PLAN BEHIND THE PROGRESS.</p>
          <br />
          <h1 className="coachh">
            TRAIN WITH <br />A PURPOSE.
          </h1>
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
        <div className="cdiv1">
          <p className="coachdp">Beginner</p>
          <br />
          <h2 className="citems">FOUNDATIONS</h2>
          <span className="cprice">₹1,999</span>
          <br />
          <p className="cp1">One 4-week package · Paid upfront</p>
          <br />
          <p className="cp2">2 video sessions · 4-week starter plan</p>
          <br />
          <p className="cp3">Workout plan + progress check-ins</p>

          <div className="cbook">BOOK NOW</div>
        </div>
        <div className="cdiv1">
          <p className="coachdp">Medium</p>
          <br />
          <h2 className="citems">INTERMEDIATE</h2>
          <span className="cprice">₹4,999</span>
          <br />
          <p className="cp1">One 5-week package · Paid upfront</p>
          <br />
          <p className="cp2">Structure your progressive training.</p>
          <br />
          <p className="cp3">4 video sessions · 4-week lifting plan </p>

          <div className="cbook">BOOK NOW</div>
        </div>
        <div className="cdiv1">
          <p className="coachdp">Hardcore</p>
          <br />
          <h2 className="citems">ADVANCE</h2>
          <span className="cprice">₹7,999</span>
          <br />
          <p className="cp1">One 4-week package · Paid upfront</p>
          <br />
          <p className="cp2">Give every main lift a direction.</p>
          <br />
          <p className="cp3">4 video sessions · 4-week strength plan</p>

          <div className="cbook">BOOK NOW</div>
        </div>
      </div>
    </div>
  );
};

export default Coach;
