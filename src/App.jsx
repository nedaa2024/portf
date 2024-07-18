import HeaderNav from "./HeaderNav";
import LandPage from "./LandPage";
import Aboutme from "./Aboutme";
import Projects from "./Projects";
import Skills from "./Skillss";
// import Education from "./Education";
import "./App.css";
import BackToTop from "./BackToTop";
import ContactUs from "./ContactUs";
import MyJourney from "./MyJourney";
export default function App() {
  return (
    <>
      <HeaderNav />
      <div id="home">
        <LandPage />
      </div>
      <div id="about">
        {" "}
        <Aboutme />
      </div>
      <BackToTop />

      <div id="education">
        {" "}
        <MyJourney />
      </div>

      <div id="projects">
        {" "}
        <Projects />
      </div>
      <div id="skills">
        {" "}
        <Skills />
      </div>

      <div id="contact">
        <ContactUs />
      </div>
    </>
  );
}
