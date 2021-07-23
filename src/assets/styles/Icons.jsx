import { Icon } from "../styles/Theme";
import Github from "../images/icons8-github.png";
import Linkedin from "../images/icons8-linkedin.png";

export default function IconsContact() {
  return (
    <>
    <a
        href="https://www.linkedin.com/in/sophie-topart-59a0b893/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon src={Linkedin} />
      </a>
      <a
        href="https://github.com/SophieTopart"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon src={Github} />
      </a>
      
    </>
  );
}
