import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      {/* HomePage */}
      <div className="MuiGrid-root hero MuiGrid-container">
        <div className="MuiGrid-root homeIntro MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-lg-6">
          <div style={{ opacity: "1" }}>
            <h2 className="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
              Hey! I'm
              <span className="intro__name"> Keri</span>
            </h2>
            <span className="intro__name">{siteConfig.title}</span>
          </div>
          <div style={{ opacity: "1" }}>
            <p className="MuiTypography-root MuiTypography-body1">
              A skilled Front-end Developer with extensive experience in
              crafting seamless and visually appealing user interfaces.
              Proficient in utilizing modern technologies and frameworks to
              create responsive and interactive web applications. Excels in
              collaborating with design teams to translate concepts into code.
              Well-versed in front-end development tools such as HTML, CSS,
              JavaScript, and frameworks like React or Angular. Dedicated to
              delivering high-quality user experiences through efficient and
              optimized code.
            </p>
          </div>
          &nbsp;
          <div style={{ opacity: "1" }}>
            <h6 className="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
              My Skills:
            </h6>
            <p className="MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom">
              JavaScript, HTML, ReactJS,
            </p>
          </div>
          &nbsp;
          <p style={{ opacity: "1" }}>
            <a
              className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-outlinedSizeSmall MuiButton-sizeSmall"
              tabIndex={0}
              style={{ textTransform: "none" }}
            >
              <span className="MuiButton-label">Resume</span>
              <span className="MuiTouchRipple-root"></span>
            </a>
          </p>
          <div className="social__links">
            <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2">
              <div className="MuiGrid-root MuiGrid-item">
                <p className="MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom MuiTypography-displayInline">
                  Social Media:
                </p>
              </div>

              <div className="MuiGrid-root MuiGrid-item">
                <a href="#">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin"
                    class="svg-inline--fa fa-linkedin fa-w-14"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* col. 2 */}
        <div className="MuiGrid-root homeImg MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-lg-6">
          <img src="/img/undraw_web_development_0l6v.svg" />
        </div>
      </div>
    </>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        {/* <SocialLinks /> */}
        {/* <div className="homeImg">
              <img src={useBaseUrl("img/programming.svg")} className="image" />
            </div> */}

        {/* <HomepageFeatures /> */}
        <div>
          {/* Experiences Section */}
          <Experience />
        </div>
        {/* Projects Section */}
        <div>
          <Projects />
        </div>
      </main>
    </Layout>
  );
}
