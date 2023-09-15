import React from "react";
import img10 from "../../assets/image/10.webp";
import img11 from "../../assets/image/11.webp";
import img12 from "../../assets/image/12.webp";
import img13 from "../../assets/image/13.webp";
import img14 from "../../assets/image/14.webp";
import img15 from "../../assets/image/15.webp";
import "./Beach.css";

const Beach = () => {
  return (
    <div className="inner">
      <h2 className="title">Beaches In Andaman</h2>
      <p className="des">Most Beautiful Beaches In Andaman</p>
      <div>
        <div className="cardbox">
          <div className="card">
            <div className="cardimg">
              <img src={img10} alt="" />
            </div>
            <div className="cardbody">
              <p className="ttl">Corbyn’s Cove</p>
              <p className="detail">
                This is the beach for water sports in port Blair. It has shops
                and eateries. More like the Chowpaty of Andaman. It's not a must
                do.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="cardimg">
              <img src={img11} alt="" />
            </div>
            <div className="cardbody">
              <p className="ttl">Radhanagar Beach</p>
              <p className="detail">
                Radhanagar Beach is known as one of the most beautiful beaches
                in Asia. It attracts huge tourism due to its awe striking beauty
                and is also titled as the 7th most beautiful beach in the world.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="cardimg">
              <img src={img12} alt="" />
            </div>
            <div className="cardbody">
              <p className="ttl">Laxmanpur Beach</p>
              <p className="detail">
                Alluring white sand beach with amazing sunset view point. The
                white sand is slightly wet thus allowing us to build sand
                castles easily!
              </p>
            </div>
          </div>

          <div className="card">
            <div className="cardimg">
              <img src={img13} alt="" />
            </div>
            <div className="cardbody">
              <p className="ttl">Baludera Beach</p>
              <p className="detail">
                Baludera Beach: One of the hidden gems in Andaman, this beach is
                a must-visit addition in your Andaman tour package for a quite
                place to enjoy your sunset.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="cardimg">
              <img src={img14} alt="/" />
            </div>
            <div className="cardbody">
              <p className="ttl">Kalipur Beach</p>
              <p className="detail">
                The Kalipur beach is located in Diglipur island of the northern
                part of Andaman and Nicobar Islands, India. This beautiful and
                serene beach is just behind the imagination
              </p>
            </div>
          </div>

          <div className="card">
            <div className="cardimg">
              <img src={img15} alt="" />
            </div>
            <div className="cardbody">
              <p className="ttl">Sandbar Between Ross &amp; Smith Islands</p>
              <p className="detail">
                Ross &amp; Smith are twin islands located in North Andaman along
                Aerial Bay. These are 2 independent islands connected with a
                sand bar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beach;
