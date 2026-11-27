import { personal } from "../data/personal";
import { ui } from "../lib/icons";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

interface Props {
  /** Include the email link (hero and footer do, the navbar does not). */
  withEmail?: boolean;
  className?: string;
}

export function SocialLinks({ withEmail = false, className = "" }: Props) {
  return (
    <ul className={`flex items-center gap-1 ${className}`}>
      <li>
        <a className="icon-btn" href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
          <GithubIcon className="size-[18px]" />
        </a>
      </li>
      <li>
        <a className="icon-btn" href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
          <LinkedinIcon className="size-[18px]" />
        </a>
      </li>
      {withEmail && (
        <li>
          <a className="icon-btn" href={`mailto:${personal.email}`} aria-label="Send an email">
            <ui.Mail size={18} aria-hidden="true" />
          </a>
        </li>
      )}
    </ul>
  );
}
