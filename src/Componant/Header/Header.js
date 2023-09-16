import React from "react";

import video from "../../assets/video/video1.mp4";
import "./Header.css";

const Header = () => {
  return (
    <div name="home" id="up" className="landingpage">
      <video src={video} autoPlay muted loop class="video-bg" />
      <div className="bg-overlay"></div>

      <div className="inners-head">
        <p className="head-title">
          Explore the beauty of andaman with
          <span
            style={{
              color: "#237aff",
              background: "#fff",
              fontStyle: "italic",
            }}
          >
            &nbsp;&nbsp;Andamanic&nbsp;&nbsp; TraveloPedia.&nbsp;
          </span>
        </p>
        <div className="btns">
          <a href="#" className="btn1">
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
