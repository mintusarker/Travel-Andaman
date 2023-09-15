import React from "react";
import "./Footer.css";
import { FaFacebookF, FaHome, FaUmbrellaBeach } from "react-icons/fa";
import { LiaSitemapSolid } from "react-icons/lia";
import { HiOutlinePhone } from "react-icons/hi";
import { BiBook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="">
        <section className="flex flex-wrap justify-around p-9">
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
              <a
                href="index.html"
                className="flex gap-3 justify-center items-center p-2 text-[17px] font-bold "
              >
                <FaHome></FaHome> Home
              </a>
              <a
                href="#beaches"
                className="flex gap-3 justify-center items-center p-2 text-[17px] font-bold "
              >
                <FaUmbrellaBeach></FaUmbrellaBeach> Beaches
              </a>
              <a
                href="#packages"
                className="flex gap-3 justify-center items-center p-2 text-[17px] font-bold "
              >
                <LiaSitemapSolid></LiaSitemapSolid> Packages
              </a>
              <a
                href="#contact"
                className="flex gap-3 justify-center items-center text-[17px] p-2 font-bold "
              >
                <HiOutlinePhone></HiOutlinePhone> Contact
              </a>
              <a
                href="#aboutus"
                className="flex gap-3 justify-center items-center text-[17px] p-2 font-bold "
              >
                <BiBook></BiBook> About Us
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
          style={{ borderTop: "1px solid #ffffff2a", fontSize: "1rem" }}
          className="flex px-6  pb-2 flex-wrap justify-between"
        >
          <p>
            Copyright © 2018 - 22
            <a
              href="/index.html"
              className="px-1"
              style={{ fontSize: "1rem" }}
            >
              Andamanic Travelopedia.
            </a>
            All Rights Reserved.
          </p>
          <p>
            Design and Maintained by
            <a href="https://www.nairrs.com">
              NAIRRS Web &amp; Tech
            </a>
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
