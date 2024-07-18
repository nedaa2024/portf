// import React from 'react';
import { useState } from "react";
import "./HeaderNav.css";
import { Link as ScrollLink } from "react-scroll";

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <img
          src="../public/logo2.png"
          className=" md:h-8 h-10 lg:h-12 img"
          alt="Flowbite Logo"
        />

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* ************************* */}

          {/* ************************* */}
          <span className="sr-only">Open main menu</span>
          {/* Icon for menu open/close */}
          {isMenuOpen ? (
            // Icon for menu close
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Icon for menu open
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>
        {/* Menu items */}
        {/* Menu items */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4  rounded-lg border border-none md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-none">
            <li>
              <ScrollLink
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <a
                  href="#"
                  className="block py-1 pr-0 pl-2 text-gray-700 rounded md:bg-transparent dark:text-white text-sm md:text-xs hover:underline aa"
                  aria-current="page"
                >
                  Home
                </a>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {" "}
                <a
                  href="#"
                  className="block py-1 pr-0 pl-2 text-gray-700 rounded md:bg-transparent dark:text-white text-sm md:text-xs hover:underline aa"
                >
                  About
                </a>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {" "}
                <a
                  href="#"
                  className="block py-1 pr-0 pl-2 text-gray-700 rounded md:bg-transparent dark:text-white text-sm md:text-xs hover:underline aa"
                >
                  Education
                </a>
              </ScrollLink>
            </li>
            <ScrollLink
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <a
                href="#"
                className="block py-1 pr-0 pl-2 text-gray-700 rounded md:bg-transparent dark:text-white text-sm md:text-xs hover:underline aa"
              >
                Projects
              </a>{" "}
            </ScrollLink>

            <li>
              <ScrollLink
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {" "}
                <a
                  href="#"
                  className="block py-1 pr-0 pl-2 text-gray-700 rounded md:bg-transparent dark:text-white text-sm md:text-xs hover:underline aa"
                >
                  Contact
                </a>{" "}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {" "}
                <a
                  href="#"
                  className="block py-1 pr-0 pl-2 text-gray-700 rounded md:bg-transparent dark:text-white text-sm md:text-xs hover:underline aa"
                >
                  Skills
                </a>
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
