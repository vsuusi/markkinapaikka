import { FaGithub, FaRegCopyright  } from "react-icons/fa";
import { MdOutlineReportProblem } from "react-icons/md";


import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-items">
        <h2>Markkinapaikka</h2>
        <button><FaGithub /></button>
        <button><FaRegCopyright /></button>
        <button><MdOutlineReportProblem /></button>
      </div>
    </div>
  );
}

export default Footer;
