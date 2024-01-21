import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function SocialLinks() {
  return (
    <div className="social__links">
      <div container>
        <div className="social-padding" display={"inline"} gutterBottom>
          Social Media:
          <div className="social__padding__icons">
            <a href="https://www.linkedin.com/in/keri-ann-wilkins/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/kwilkinz">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialLinks;
