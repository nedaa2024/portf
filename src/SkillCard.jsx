import PropTypes from "prop-types";
import "./SkillCard.css";
export default function SkillCard({ title, iconUrl, isActive, onClick }) {
  SkillCard.propTypes = {
    title: PropTypes.string.isRequired,
    iconUrl: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={() => onClick()}
    >
      <div className="skills-icon">
        <img className="icon" src={iconUrl} alt={title} />
      </div>
      <span style={{ letterSpacing: "4px" }} className="title">
        {title}
      </span>
    </div>
  );
}
