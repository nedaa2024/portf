import "./skills.css";
import "./Skills";
import { skillsData } from "./Skills";
import SkillCard from "./SkillCard";
import SkillsInfoCard from "./SkillsInfoCard";
import { useState } from "react";
export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(skillsData[0]);
  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };
  return (
    <section className="text-white skills-container text-center pt-8 mb-10 mt-12">
      <h5 className="" style={{ color: "whi te", letterSpacing: "4px" }}>
        My Skills
      </h5>
      <div className=" skills-content">
        <div className="skills">
          {skillsData.map((item) => (
            <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelectSkill(item);
              }}
            />
          ))}
        </div>
        <div className="skills-info">
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
}
