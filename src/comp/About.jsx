import React from "react";
import abpic from "../pics/aboutpics.png";
const About = () => {
  return (
    <>
      <div className="aboutmain">
        <p className="abouthp">WE BELIEVE STRENGTH BELONGS EVERYWHERE.</p>
        <div className="aboutheadflex">
          <span className="abhparent">
            <h1 className="abhead">
              YOUR HOME. <br />
              YOUR STRONGER <br /> SELF.
            </h1>
          </span>
          <div className="aboutbaseline">
            <p className="baselinep">
              DEOL FITNESS sells quality fitness equipment and pairs it with
              expert online coaching, so customers can buy the right gear and
              learn how to use it in one place.
            </p>
          </div>
        </div>
        <img className="abthpic1" src={abpic} alt="" />
        <div className="picline">
          <p className="pictext1">EQUIPMENT IS JUST THE BEGINNING.</p>
          <p className="pictext2">
            A considered setup. A clear plan. Your everyday commitment.
          </p>
        </div>
        <div className="aboutvisionflex">
          <div className="aboutvision1">
            <p className="vision">01 / OUR MISSION</p>
            <h1 className="visionhead">
              STRENGTH TRAINING. <br />
              FOR EVERY HOME.
            </h1>
            <p className="visionpara">
              Make safe, affordable and effective strength training available to
              every home.
            </p>
          </div>
          <div className="aboutvision2">
            <p className="vision">02 / OUR VISION</p>
            <h1 className="visionhead">
              CONNECTED GEAR.
              <br />
              CONNECTED PROGRESS.
            </h1>
            <p className="visionpara">
              Become a trusted fitness brand where equipment, guidance and
              progress tracking work together.
            </p>
          </div>
        </div>
        <p className="vision">ONE BRAND. THREE CONNECTED PARTS.</p>
        <h1 className="visionhead">MORE THAN A SET OF WEIGHTS.</h1>
      </div>
    </>
  );
};

export default About;

// <div className="picpara">
//             <p className="picp1">EQUIPMENT IS JUST THE BEGINNING.</p>
//             <p className="picp2">
//               A considered setup. A clear plan. Your everyday commitment.
//             </p>
//             <div className="aboutdivflex">
//               <div className="aboutdiv1">
//                 <p className="aboutdivtop">01 / OUR MISSION</p>
//                 <h1 className="abdivhead">
//                   STRENGTH TRAINING. <br />
//                   FOR EVERY HOME.
//                 </h1>
//                 <p className="abdivp">
//                   Make safe, affordable and effective strength training
//                   available to every home.
//                 </p>
//               </div>
//               <div className="aboutdiv2">
//                 <p className="aboutdivtop">02 / OUR VISION</p>
//                 <h1 className="abdivhead">
//                   CONNECTED GEAR. <br />
//                   CONNECTED PROGRESS.
//                 </h1>
//                 <p className="abdivp">
//                   Become a trusted fitness brand where equipment, guidance and
//                   progress tracking work together.
//                 </p>
//               </div>
//             </div>
//             <div className="aboutmid">
//               <p className="aboutmidp">ONE BRAND. THREE CONNECTED PARTS.</p>
//               <h1 className="aboutmidhead">MORE THAN A SET OF WEIGHTS.</h1>
//               <div className="abouticon">
//                 <div className="icons">
//                   <img src="" alt="" />
//                   <h1 className="iconhead">EQUIPMENT</h1>
//                   <p className="iconp">
//                     Dumbbells, rods, plates and bands. Compare materials,
//                     weights and specifications to choose your setup.
//                   </p>
//                   <div className="iconlink">Explore equipment ↗</div>
//                 </div>
//                 <div className="icons">
//                   <img src="" alt="" />
//                   <h1 className="iconhead"> GUIDANCE </h1>
//                   <p className="iconp">
//                     Online consultations and coaching packages help turn
//                     equipment into a purposeful training routine.
//                   </p>
//                   <div className="iconlink">Meet your coach ↗</div>
//                 </div>
//                 <div className="icons">
//                   <img src="" alt="" />
//                   <h1 className="iconhead">PROGRESS</h1>
//                   <p className="iconp">
//                     Your account brings workouts, sessions, order tracking and
//                     saved equipment together.
//                   </p>
//                   <div className="iconlink">Your account ↗</div>
