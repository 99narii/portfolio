import './style.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram, faJava, faJs, faAws, faNode, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from "@fortawesome/free-solid-svg-icons";

interface SnsProps {
  className: string;
  
}

export const Sns: React.FC<SnsProps> = ({ className }) => {
  return (
    <div className={`sns ${className}`}>
      <ul>
        <li>
          <a href="https://github.com/99narii" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="icon github" icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/dognarii" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="icon linkedIn" icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://narii.tistory.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="icon blog" icon={faBlog} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/99narii" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="icon instagram" icon={faInstagram} />
          </a>
        </li>
      </ul>
    </div>
  );
};
