import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-3 my-2 w-12" src={logo} alt="logo" />
        </div>
        <div className="mx-4 my-2 flex items-center justify-center gap-3 text-2xl">
          <a href="https://www.linkedin.com/in/rashid-s-373b41283/"><FaLinkedin /></a>
          <a href="https://github.com/Rashids00"><FaGithubSquare /></a>
          <a href="https://x.com/rashiii0"><FaSquareXTwitter /></a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
