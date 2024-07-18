import "./Aboutme.css";
import { Link as ScrollLink } from "react-scroll";

const Projects = () => {
  return (
    <div className="h-auto w-full all  mt-12" style={{ marginBottom: "150px" }}>
      <div className="h-auto lg:w-[72.6%] sm:w-[95.8%] xs:w-[108.9%] mx-auto flex gap-8 items-center animate-fade-in">
        <div className="flex flex-col gap-4 text-white p-4 rounded-lg inall">
          {/* <h5 className="text-sm text-blue-500 font-semibold">About Me</h5> */}
          <div
            className="w-full flex gap-2 items-center justify-center"
            style={{ height: "150px" }}
          >
            <div className="lg:text-3xl font-semibold uppercase font-serif text-white sm:text-lg xs:text-lg about">
              WHO I AM ?
            </div>
            <hr className="w-[35%]  h-1 rounded-full border-t-blue-500 bg-blue-500" />
          </div>
          <p
            className="text-lg text-center text-white mb-5 lg:text-lg sm:px-16 lg:px-30 text"
            style={{}}
          >
            I am a full stack web developer. I have experience in front-end and
            back-end development, and I am proficient in dealing with JavaScript
            frameworks. I have created many successful responsive projects.
          </p>
          <div className="flex gap-4 justify-center ">
            <ScrollLink
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button className=" text-gray-900 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none   shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 my-5 ease-in duration-300">
                Contact me
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
