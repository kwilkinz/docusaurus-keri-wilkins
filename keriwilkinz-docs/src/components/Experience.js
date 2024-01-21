import React, { useState } from "react";

const experience = [
  {
    company: "Motiv",
    position: "Front End Developer",
    date: "March 2023 - Current",
    desc: {
      1: "xx.",
      2: "xx",
      3: "xx",
    },
  },
  {
    company: "Thinkful",
    position: "Full Stack Engineer Graduate",
    date: "August 2019 - December 2019 ",
    desc: {
      1: "xx.",
      2: "xx",
      3: "xx",
    },
  },
  {
    company: "Psych Press",
    position: "Front-End Developer Intern",
    date: "March 2020 - July 2020 ",
    desc: {
      1: "xx.",
      2: "xx",
      3: "xx",
    },
  },
  {
    company: "Wicresoft",
    position: "Azure Cloud Engineer",
    date: "Mid 2021 - Jan 2023 ",
    desc: {
      1: "xx.",
      2: "xx",
      3: "xx",
    },
  },
];
function Experience() {
  const [value, setValue] = useState(0);
  const { company, position, date, desc } = experience[value];

  return (
    <section className="experience">
      <h2 className="experience-title">
        <span>Experience</span>
      </h2>
      <div className="underline"></div>
      <div className="experiences-center">
        <div className="btn-container">
          {experience.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`experience-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="experience-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="experience-date">{date}</p>
          {Object.keys(desc).map((key, index) => {
            return (
              <div key={index} className="experience-desc">
                {/* <FontAwesomeIcon
                    icon={faAngleDoubleRight}
                    className="experience-icon"
                  ></FontAwesomeIcon> */}
                <p>{desc[key]}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default Experience;
