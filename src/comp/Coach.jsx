import React from "react";
import coachs from "../pics/coach.jpg";
import girl from "../pics/coachgirl.png";
import man from "../pics/coachman.png";
const Coach = () => {
   window.scrollTo({top:0, behavior:'smooth'})
  return (
    <>
      <div className="coachhead">
        <div className="coachdiv">
          <div className="cwrite">
            <p className="coachp">THE PLAN BEHIND THE PROGRESS.</p>
            <br />
            <h1 className="coachh">
              TRAIN WITH <br />A PURPOSE.
            </h1>
            <p className="coachnote">
              The right guidance makes every session count. Connect with a
              coach, work on your technique and build a plan around your goals.
            </p>
            <div className="coachbtn">
              <button className="cbtn1">Book a consultation ↗</button>
              <button className="cbtn2">Explore plans</button>
            </div>
            <p className="coachdep">
              Online consultations from ₹499 · 30 minutes · Your space, your
              pace
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
        <p className="booknotecoach">
          Sample packages. No automatic renewal is included. Final coach
          availability and booking terms are shown before payment.
        </p>
      </div>
      <div className="line"></div>
      <div className="coachnamediv">
        <p className="coachpage2">HUMAN GUIDANCE. INDIVIDUAL FOCUS.</p>
        <h3 className="coachpagehead">IN YOUR CORNER.</h3>
      </div>
      <div className="coachpicdiv">
        <div className="coachbio">
          <img src={girl} alt="" />
          <div className="cbiopara">
            <p className="biotop">SAMPLE COACH PROFILE</p>
            <h3 className="biohead">ADITI RAO</h3>
            <p className="biopara">
              <b>Strength & beginner foundations</b>
            </p>

            <p className="biopara">
              Illustrative qualification: BSc Sports Science
            </p>
            <p className="biopara">
              Specializations: Technique, home training, consistency
            </p>
            <div className="bookcoach">Book Now ↗</div>
          </div>
        </div>
        <div className="coachbio">
          <img src={man} alt="" />
          <div className="cbiopara">
            <p className="biotop">SAMPLE COACH PROFILE</p>
            <h3 className="biohead">KARAN MEHTA</h3>
            <p className="biopara">
              <b>Strength & muscle building</b>
            </p>
            <p className="biopara">
              Illustrative qualification Diploma in Personal Trainer
            </p>
            <p className="biopara">
              Specializations: Progressive lifting, hypertrophy, barbell basics
            </p>
            <div className="bookcoach">Book Now ↗</div>
          </div>
        </div>
      </div>
      <div className="endcoachdiv">
        <div className="enddiv">
          <h5>01 / CONNECT</h5>
          <p>Meet your coach online and discuss your goals, experience and available equipment.</p>
        </div>
        <div className="enddiv">
          <h5>02 / GET YOUR PLAN</h5>
          <p>See your workouts, assigned movements and coaching notes in your account. </p>
        </div>
        <div className="enddiv">
          <h5>03 / TRACK THE WORK</h5>
          <p>Log sessions and review progress with your coach. Reschedule from your booking details.</p>
        </div>

      </div>
    </>
  );
};

export default Coach;
