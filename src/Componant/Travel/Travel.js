import React from "react";
import mbanner from "../../assets/image/middle-banner.png";
import "./Travel.css";

const Travel = () => {
  return (
    <section name="about" className="mainbox aboutus">
      <div className="inner-travel">
        <div className="mainboxbody">
          <div className="aboutusing">
            <img src={mbanner} alt="" />
          </div>
          <div className="aboutusdiv">
            <p className="aboutnamettl para title-travel">
              Andamanic <span className="text-[#237aff]">Travelopedia</span>
            </p>
            <p className="para">
              Based in the pristine Islands, Andamanic Travelopedia is a travel
              agency committed to providing our clients with exceptional
              professional services, a complete end to end booking solution
              covering all aspects of your travel needs at an affordable price
              with pro-active customer service. We pride ourselves in offering
              world className personalized and unique services specifically in
              the beautiful Islands of Andamans, The Mini India!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travel;
