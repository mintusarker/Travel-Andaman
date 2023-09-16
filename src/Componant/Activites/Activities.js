import React from "react";
import drive from "../../assets/image/boatdiving.jpg";
import jetski from "../../assets/image/jetski.png";
import nightkayaking from "../../assets/image/nightkayaking.png";
import paras from "../../assets/image/parasailing.png";
import seakart from "../../assets/image/seakart.png";
import seawalk from "../../assets/image/seawalk.png";
import shorediving from "../../assets/image/shorediving.jpg";
import snorkeling from "../../assets/image/snorkeling.png";
import "./Activities.css";

const Activities = () => {
  return (
    <div name='Activities' className="inner-two">
      <h2 className="title-activity">Activities In Andaman</h2>
      <p className="des-activity">Top Activities To Do In Andaman</p>
      <div>
        <div className="cardbox">
          <div className="card">
            <div className="cardimg">
              <img src={drive} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="cardimg">
              <img src={jetski} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="cardimg">
              <img src={nightkayaking} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="cardimg">
              <img src={paras} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="cardimg">
              <img src={seakart} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="cardimg">
              <img src={seawalk} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="cardimg">
              <img src={shorediving} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="cardimg">
              <img src={snorkeling} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
