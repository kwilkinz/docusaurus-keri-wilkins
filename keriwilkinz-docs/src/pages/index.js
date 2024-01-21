import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import SocialLinks from "../components/SocialLinks";
import resume from "../../static/files/2023_01 Frontend Developer-keri-wilkins-resume.pdf";

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
              Hey there! I'm
              <span className="intro__name"> {siteConfig.tagline}</span>
            </h2>
            <span className="intro__name">{siteConfig.title}</span>
          </div>
          <div style={{ opacity: "1" }}>
            <p className="MuiTypography-root MuiTypography-body1">
              I am a dedicated, versatile, and loyal individual with a profound
              passion for creating features and applications that bring smiles
              to users and forge connections through technology. In my role as a
              frontend and UI software developer, my focus is on infusing every
              project with a distinctive "smile" factor, breathing life into
              otherwise static screens. I am committed to approaching each task
              with integrity, consistently delivering lasting applications that
              make a meaningful impact.
            </p>
          </div>
          &nbsp;
          <div style={{ opacity: "1" }}>
            <h6 className="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
              My Skills:
            </h6>
            <p className="MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom">
              JavaScript, HTML, ReactJS, jQuery, Mustache, , RESTful API's,
              PostgreSQL, CMS Systems, etc.
            </p>
          </div>
          &nbsp;
          <p style={{ opacity: "1" }}>
            <a
              className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-outlinedSizeSmall MuiButton-sizeSmall"
              tabIndex={0}
              style={{ textTransform: "none" }}
              href={resume}
            >
              <span className="MuiButton-label">Resume</span>
              <span className="MuiTouchRipple-root"></span>
            </a>
          </p>
          <SocialLinks />
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
