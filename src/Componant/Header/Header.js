import React from "react";
import './Header.css';

const Header = () => {
  return (
    <section className="my-12">
      <video className="video" autoPlay loop muted>
        <source src="https://www.andamanictravelopedia.com/video/video1.mp4" />
      </video>

      {/* <div className="text-center">
      <h2>Explore The Beauty Of Andaman With Andamanic TraveloPedia.</h2>
      <button>Expolre More</button>
      </div> */}
    </section>
  );
};
 
export default Header;
