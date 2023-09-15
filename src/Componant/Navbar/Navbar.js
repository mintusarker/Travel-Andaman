import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../../assets/image/logo (1).png";
import "./Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

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
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li key={id} className="btn-btn">
                <Link
                  to={link}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="transition-all duration-300"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setNav(!nav)}
          className="md:hidden lg:hidden cursor-pointer pr-4 z-10 text-gray-500"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
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

    </div>
  );
};

export default Navbar;