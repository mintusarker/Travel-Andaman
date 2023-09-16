import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../../assets/image/logo (1).png";
import "./Navbar.css";
import Info from "../ModalQuery/Info";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const showModalHandle = () => {
    setShowModal(true);
  };

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "Package",
    },
    {
      id: 3,
      link: "Beaches",
    },
    {
      id: 4,
      link: "Activities",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div>
      <div className="nav-nav w-full text-white">
        <p className="">
          <img className="logo" src={logo} alt="" />
        </p>

        <div>
          <ul className="hidden md:flex items-center">
            <li>
              <Link
                onClick={() => showModalHandle()}
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={50}
                className="transition-all duration-300 btn-btn"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="Package"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={50}
                className="transition-all duration-300 btn-btn"
              >
                Package
              </Link>
            </li>

            <li>
              <Link
                to="Beaches"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={50}
                className="transition-all duration-300 btn-btn"
              >
                Beaches
              </Link>
            </li>

            <li>
              <Link
                to="Activities"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={50}
                className="transition-all duration-300 btn-btn"
              >
                Activities
              </Link>
            </li>

            <li>
              <Link
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={50}
                className="transition-all duration-300 btn-btn"
              >
                contact
              </Link>
            </li>

            {/* {links.map(({ id, link }) => (
              <li key={id} className="btn-btn">
                <Link
                  to={link}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={50}
                  className="transition-all duration-300"
                >
                  {link}
                </Link>
              </li>
            ))} */}
          </ul>
        </div>
        <div
          onClick={() => setNav(!nav)}
          className="md:hidden lg:hidden cursor-pointer pr-4 z-10 text-white"
        >
          {nav ? (
            <FaTimes className="bg-white text-[#237aff] p-1 w-12 h-9 rounded-md hover:text-white hover:bg-[#237aff] hover:border-[7px] hover:w-14 hover:h-12 hover:rounded-md hover:border-white" />
          ) : (
            <FaBars
              // size={30}
              className="border-2 rounded-md w-11 h-10 p-2 text-white hover:text-[#237aff] hover:bg-white hover:border-none"
            />
          )}
        </div>

        {nav && (
          <ul className="bg-sm-color flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen  ">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-8 py-2 cursor-pointer capitalize text-2xl hover:bg-white hover:text-blue-600"
              >
                <Link to={link} smooth duration={400}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* info modal */}
      {showModal && <Info setShowModal={setShowModal}></Info>}
    </div>
  );
};

export default Navbar;
