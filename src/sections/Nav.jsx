import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="w-full flex justify-between align-center p-5 sm:p-7 fixed top-0 z-50 bg-black bg-opacity-70">
      <Link
        to="home"
        spy
        smooth
        offset={-100}
        className="flex justify-center items-baseline sm:hidden text-3xl font-bold tracking-wider text-white cursor-pointer"
      >
        Champions
        <div className="size-2 rounded-full bg-white align-baseline"></div>
      </Link>
      <nav className="flex justify-between items-center sm:w-full">
        <Link
          to="home"
          spy
          smooth
          offset={-100}
          className="hidden sm:flex text-3xl text-white font-bold tracking-wider cursor-pointer justify-center items-center"
        >
          <img
            src="images/church-logo.png"
            alt=""
            width={'40px'}
            className="mr-2"
          />
          Champions
        </Link>
        <ul
          className={`${
            toggleMenu ? "flex" : "hidden"
          } fixed top-24 left-10 right-10 lg:sticky bg-black bg-opacity-85 lg:bg-transparent text-white space-y-5 lg:space-y-0 p-10 lg:p-0 rounded-2xl lg:rounded-none  lg:space-x-8 lg:flex flex-col lg:flex-row`}
        >
          <Link
            to="home"
            spy
            smooth
            onClick={() => setToggleMenu(!toggleMenu)}
            offset={-100}
            className="font-semibold text-lg uppercase cursor-pointer"
          >
            home
          </Link>
          <Link
            to="about"
            spy
            smooth
            onClick={() => setToggleMenu(!toggleMenu)}
            offset={-120}
            className="font-semibold text-lg uppercase cursor-pointer"
          >
            about
          </Link>
          <Link
            to="services"
            spy
            smooth
            onClick={() => setToggleMenu(!toggleMenu)}
            offset={-120}
            className="font-semibold text-lg uppercase cursor-pointer"
          >
            services
          </Link>
          <Link
            to="events"
            spy
            smooth
            onClick={() => setToggleMenu(!toggleMenu)}
            offset={-120}
            className="font-semibold text-lg uppercase cursor-pointer"
          >
            events
          </Link>
          <Link
            to="testimony"
            spy
            smooth
            onClick={() => setToggleMenu(!toggleMenu)}
            offset={-120}
            className="font-semibold text-lg uppercase cursor-pointer"
          >
            testimony
          </Link>
          <Link
            to="gallery"
            spy
            smooth
            onClick={() => setToggleMenu(!toggleMenu)}
            offset={-120}
            className="font-semibold text-lg uppercase cursor-pointer"
          >
            Gallery
          </Link>
          <Link
            to="contact"
            spy
            smooth
            offset={-120}
            onClick={() => setToggleMenu(!toggleMenu)}
            className="font-semibold text-lg uppercase cursor-pointer"
          >
            contacts
          </Link>
        </ul>
      </nav>
      <div
        className="lg:hidden"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        {!toggleMenu ? <Menu size={40} /> : <X size={40} />}
      </div>
    </header>
  );
};

export default Nav;
