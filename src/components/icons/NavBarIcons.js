import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-scroll";

export const NavBarIcons = ({ color }) => {
  return (
    <div className="navBarIcons">
      <a
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/abbas-bandar"
        className="contact__nav"
      >
        <FontAwesomeIcon
          color={color}
          size="2x"
          icon={["fab", "linkedin-in"]}
        />
      </a>
      <a
        rel="noopener noreferrer"
        href="https://github.com/abbasspark"
        className="contact__nav"
      >
        <FontAwesomeIcon color={color} size="2x" icon={["fab", "github"]} />
      </a>
      <Link
        to="contact"
        spy={true}
        smooth="true"
        className="contact__nav contact__nav--link"
      >
        <FontAwesomeIcon color={color} size="2x" icon={["far", "envelope"]} />
      </Link>

      <a
        rel="noopener noreferrer"
        href="https://www.freecodecamp.org/abbasbandar"
        className="contact__nav"
      >
        <FontAwesomeIcon
          color={color}
          size="2x"
          icon={["fab", "free-code-camp"]}
        />
      </a>
    </div>
  );
};
