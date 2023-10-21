import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="mt-auto mb-3 text-3xl">
      <Link
        className="mx-2"
        href="https://github.com/mauriciosoaresd"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          className="transition ease-in-out delay-150 hover:scale-125 hover:text-pink"
          icon={faGithub}
        />
      </Link>
      <Link
        className="mx-2"
        href="https://www.linkedin.com/in/mauriciosdomingues/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          className="transition ease-in-out delay-150 hover:scale-125 hover:text-pink"
          icon={faLinkedin}
        />
      </Link>
    </footer>
  );
}
