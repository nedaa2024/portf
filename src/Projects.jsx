import { useState } from "react";
// import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import "./Projects.css";
import projectsData from "./ProjectsData";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="pro" style={{ marginBottom: "150px" }}>
      <h1
        style={{ letterSpacing: "4px" }}
        className="text-3xl font-bold mb-6 text-center pt-8 text-white"
        // style={{ marginTop: "130px" }}
      >
        My Projects
      </h1>
      <div className="menu-categories flex justify-center flex-wrap pb-10 gap-5 mx-1">
        {Object.keys(projectsData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`catbtn ${
              activeCategory === category
                ? "bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 hover:bg-gradient-to-bl"
                : "bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 hover:bg-gradient-to-bl"
            } text-xl font-medium rounded-lg text-xs py-2.5 text-center w-20`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 gap-4 px-9">
        {projectsData[activeCategory].map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-lg shadow-md mb-5 hover:shadow-lg transition-shadow duration-300 transform scale-7"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100 info">
              <h3 className="text-black text-xs sm:text-sm xs:text-xs	 font-bold  text-center tit ">
                {project.title}
              </h3>
              <p className="   text-center mx-1 dis">{project.description}</p>
              <p
                key={project.category}
                style={{
                  display:
                    project.title === "Form" ||
                    project.title === "TimeLine Table" ||
                    project.title === "Advertisement" ||
                    project.title === "Foody Landing Page" ||
                    project.title === "SCSS Landing Page"
                      ? "none"
                      : "block",
                }}
                className="live"
              >
                Live Demo :
              </p>
              <a href={project.link}>
                {/* <AiOutlineDeliveredProcedure
                  key={project.category}
                  className="icon"
                  style={{
                    color: "black",
                    borderRadius: "50%",
                    display:
                      project.title === "Form" ||
                      project.title === "TimeLine Table" ||
                      project.title === "Advertisement" ||
                      project.title === "Foody Landing Page" ||
                      project.title === "SCSS Landing Page"
                        ? "none"
                        : "block",
                  }}
                /> */}
                <svg
                  key={project.category}
                  className="icono "
                  style={{
                    color: "black",
                    borderRadius: "50%",
                    display:
                      project.title === "Form" ||
                      project.title === "TimeLine Table" ||
                      project.title === "Advertisement" ||
                      project.title === "Foody Landing Page" ||
                      project.title === "SCSS Landing Page"
                        ? "none"
                        : "block",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
