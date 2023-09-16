import React from "react";
import "./Footer.css";
import { FaFacebookF, FaHome, FaUmbrellaBeach } from "react-icons/fa";
import { LiaSitemapSolid } from "react-icons/lia";
import { HiOutlinePhone } from "react-icons/hi";
import { BiBook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
import { Link } from "react-scroll";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <footer>
      <ScrollToTop
        smooth
        top="1000"
        color="white"
        style={{
          backgroundColor: "#237aff",
          paddingLeft: "13px",
          height: "40px",
          width: "55px",
        }}
      />
      <div className="">
        <section className="flex flex-wrap justify-around p-8">
          <div className="text-center">
            <p
              style={{
                fontWeight: "bold",
                fontSize: "2rem",
                margin: "1rem",
                marginBottom: "2rem",
              }}
            >
              Social Media
            </p>
            <div className="text-black flex flex-wrap gap-6 w-48 mx-auto">
              <a
                href="https://www.facebook.com/profile.php?id=100090318728248&amp;mibextid=LQQJ4d"
                target="_blank"
              >
                <FaFacebookF className="w-11 h-11 bg-white p-1 rounded" />
              </a>
              <a
                href="https://instagram.com/andamanic_travelopedia?igshid=NTc4MTIwNjQ2YQ=="
                target="_blank"
              >
                <AiOutlineInstagram className="w-11 h-11 bg-white p-1 rounded" />
              </a>
              <a
                href="https://youtube.com/@andamanic_travelopedia"
                target="_blank"
              >
                <FaYoutube className="w-11 h-11 bg-white p-1 rounded" />
              </a>

              <a href="https://wa.me/message/BO5X2V4WW3SNB1" target="_blank">
                <MdWhatsapp className="w-11 h-11 bg-white p-1 rounded" />
              </a>
            </div>
          </div>

          <div className="text-center">
            <p
              style={{
                fontWeight: "bold",
                fontSize: "2rem",
                margin: "1rem",
                marginBottom: "2rem",
              }}
              className=""
            >
              Important Links
            </p>
            <div className="">
              <Link
                to="Home"
                smooth={true}
                offset={-90}
                duration={500}
                className="transition-all duration-300 flex gap-3 justify-center items-center p-2 text-[17px] font-bold cursor-pointer"
              >
                <FaHome></FaHome> Home
              </Link>

              <Link
                to="Beaches"
                smooth={true}
                offset={70}
                duration={500}
                className="transition-all duration-300 flex gap-3 justify-center items-center p-2 text-[17px] font-bold cursor-pointer "
              >
                <FaUmbrellaBeach></FaUmbrellaBeach> Beaches
              </Link>

              <Link
                to="Package"
                smooth={true}
                offset={-90}
                duration={500}
                className="transition-all duration-300 flex gap-3 justify-center items-center p-2 text-[17px] font-bold cursor-pointer"
              >
                <LiaSitemapSolid></LiaSitemapSolid> Packages
              </Link>

              <Link
                to="contact"
                smooth={true}
                offset={-90}
                duration={500}
                className="transition-all duration-300 flex gap-3 justify-center items-center text-[17px] p-2 font-bold cursor-pointer"
              >
                <HiOutlinePhone></HiOutlinePhone> Contact
              </Link>

              <Link
                to="about"
                smooth={true}
                offset={90}
                duration={500}
                className="transition-all duration-300 flex gap-3 justify-center items-center text-[17px] p-2 font-bold cursor-pointer"
              >
                <BiBook></BiBook> About Us
              </Link>
            </div>
          </div>

          <div className="text-center">
            <p
              style={{
                fontWeight: "bold",
                fontSize: "2rem",
                margin: "1rem",
                marginBottom: "2rem",
              }}
              className=""
            >
              Useful Links
            </p>
            <div className="">
              <a className="block p-2 text-[17px] font-bold">
                Terms &amp; Conditions
              </a>
              <a className="block p-2 text-[17px] font-bold">Privacy policy</a>
              <a className="block p-2 text-[17px] font-bold">
                Payment &amp; Refund
              </a>
              <a className="block p-2 text-[17px] font-bold">Sitemap</a>
            </div>
          </div>
        </section>

        <section
          style={{ borderTop: "1px solid #ffffff2a", fontSize: "1.1rem" }}
          className="flex px-6 pt-4 pb-7 flex-wrap justify-between"
        >
          <p>
            Copyright © 2018 - 22
            <a
              href="/index.html"
              className="px-1"
              style={{ fontSize: "1.1rem" }}
            >
              Andamanic Travelopedia.
            </a>
            All Rights Reserved.
          </p>
          <p>
            Design and Maintained by
            <a href="https://www.nairrs.com">NAIRRS Web &amp; Tech</a>
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
