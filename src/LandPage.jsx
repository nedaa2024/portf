import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import "./LandPage.css";

export default function LandPage() {
  const handleDownloadResume = async () => {
    try {
      const response = await fetch("../public/file/nedaaCV.pdf");
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Nedaa_Mohammad_Resume.pdf"; // Set the desired filename
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error fetching or creating blob:", error);
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Animation */}
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>

          {/* ... Add other list items here */}
        </ul>
      </div>

      {/* Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center info-box">
        <h2 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold px-5 py-5 hh2">
          Nedaa Alyasein
        </h2>
        <p className="text-amber-300 text-lg my-2 p1">
          Full Stack Web Developer
        </p>
        <p className="text-gray-200 text-base my-1 p2">
          Hello, My Name Is Nedaa
        </p>
        <p className="text-gray-200 text-base my-1 p3">
          With over 1 year of experience
        </p>
        <div className="flex space-x-4 mt-4 items-center justify-center">
          <a
            href="https://www.linkedin.com/in/nedaa-alyasein-843806293/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialLinkedinCircular
              style={{ color: "white", borderRadius: "50%", fontSize: "50px" }}
            />
          </a>
          <a
            href="https://github.com/nedaa2024"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              style={{ color: "white", borderRadius: "50%", fontSize: "30px" }}
            />
          </a>
          <a
            href="in/nedaa-alyasein-843806293"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              style={{ color: "white", borderRadius: "50%", fontSize: "30px" }}
            />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <CgMail
              style={{ color: "white", borderRadius: "50%", fontSize: "35px" }}
            />
          </a>
        </div>{" "}
        {/* Download Resume Button */}
        <button
          className="transition ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110   mt-10 text-gray-900  to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-300/80  font-medium rounded-lg text-xs px-5 py-2.5 text-center me-2 mb-2"
          style={{
            height: "66px",
            width: "240px",
            borderRadius: "22px",
            backgroundColor: "transparent",
            color: "white",
            border: "none",
            fontSize: "17px",
          }}
          onClick={handleDownloadResume}
        >
          Download My Resume{" "}
        </button>
      </div>
    </div>
  );
}
