import {siGithub, siGitlab, siMedium, siStackoverflow} from "simple-icons";
import type {SocialIconName} from "../types";

/** Brand marks from simple-icons, drawn in the current text colour. */
const BRAND_PATHS: Partial<Record<SocialIconName, string>> = {
  github: siGithub.path,
  gitlab: siGitlab.path,
  stackoverflow: siStackoverflow.path,
  medium: siMedium.path
};

interface SocialIconProps {
  name: SocialIconName;
  size?: number;
}

export default function SocialIcon({name, size = 16}: SocialIconProps) {
  const path = BRAND_PATHS[name];

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {path ? (
        <path d={path} />
      ) : (
        // simple-icons ships no LinkedIn mark, so this is a neutral profile card.
        <path
          fillRule="evenodd"
          d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 4.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM6.5 18.2c0-2.4 2.5-3.9 5.5-3.9s5.5 1.5 5.5 3.9v.3h-11v-.3Z"
        />
      )}
    </svg>
  );
}
