import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const experience = [
  {
    company: "Motiv",
    position: "Front End Developer",
    date: "March 2023 - Current",
    desc: {
      1: "Transformed UI/UX across product suites using React, Mustache, Node, and Oracle Cloud Infrastructure, driving user interaction.",
      2: "Researched, diagnosed, and proactively resolved bugs to anticipate and prevent future user impact.",
      3: "Maintained a visual design system, ensuring brand consistency and building user trust.",
      4: "Developed and maintained 50+ sites with a focus on usability, accessibility, a mobile-first approach from a wireframe design.",
    },
  },
  {
    company: "Thinkful",
    position: "Full Stack Engineer Graduate",
    date: "July 2022 - December 2022 ",
    desc: {
      1: "Acquired proficiency in industry best practices and software development standards, specializing in HTML5, CSS3, JavaScript, React, Node.js, PostgreSQL, RESTful API, as well as algorithms and data structures.",
      2: "Successfully developed and deployed mobile-first applications, showcasing the ability to apply theoretical knowledge to practical, real-world scenarios.",
      3: "Participated in a mentor-student relationship with senior web developers, leveraging their expertise to enhance your own skills and contribute effectively to projects.",
    },
  },
  {
    company: "Boston West",
    position: "Project Logistics Manager",
    date: "July 2020 - December 2020 ",
    desc: {
      1: "Created/Implemented three projects with the engineering team to provide instant brochure book, budget tracking tools, and streamlined vendor documentation to clients.",
      2: "Successfully managed to end-to-end delivery of customer-facing and internal air-transport projects, ensuring adherence to predefined scopes, schedules, budgets, and quality benchmarks.",
      3: "Conducted rigorous quality checks in the field throughout project lifecycles, guaranteeing the implementation of standardized installation practices. This approach consistently met carrier, company, and end-user requirements, contributing to project success and customer satisfaction.",
      4: "Managed communication channels among a team of 45 staff members, fostering collaboration, and proactively addressed vendors’ issues for optimized project outcomes.",
    },
  },
  {
    company: "Sonoma State University",
    position: "Graduate of Criminology and Criminal Justice",
    date: "Mid 2018 - May 2021 ",
    desc: {
      1: "Bachelor Thesis: 'Edward Snowden a Cyberterrorist or Hactivist', research done through former NSA chief Ackerman, Spencer and Espionage Act of 1917, etc.",
      2: "While writing this thesis I enjoyed the strive for deeper connections, and learning new research skills.",
      3: "Activities and societies: Astronomy Club, National Honor Society, Martial Arts (Brazilian Jiu-Jitsu), Forget Me Not Volunteering, Red Cross Volunteering.",
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
                <FontAwesomeIcon
                  icon={faAnglesRight}
                  className="experience-icon"
                />
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
