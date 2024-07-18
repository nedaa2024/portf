import PropTypes from "prop-types";
import React from "react";
import "./SkillsInfoCard.css";
export default function SkillsInfoCard({ heading, skills }) {
  SkillsInfoCard.propTypes = {
    heading: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        skill: PropTypes.string.isRequired,
        percentege: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  return (
    <div className="skills-info-card">
      <h6
        className="text-white"
        style={{ marginTop: "-60px", letterSpacing: "4px" }}
      >
        {heading}
      </h6>
      <div className="skills-info-content">
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div className="skill-info" style={{ marginTop: "-20px" }}>
              <p className="text-white" style={{ letterSpacing: "4px" }}>
                {item.skill}
              </p>
              <p className="percentage text-white">{item.percentage}</p>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress "
                style={{ width: item.percentage }}
              ></div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
