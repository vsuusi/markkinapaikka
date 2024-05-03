import { FaGithub, FaRegCopyright } from 'react-icons/fa';
import { MdOutlineReportProblem } from 'react-icons/md';
import logo from '../../resources/logo.png';

import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-items">
        <img className="footer-logo" src={logo} alt="MarkkinaPaikka" />
        <button><FaGithub /></button>
        <button><FaRegCopyright /></button>
        <button><MdOutlineReportProblem /></button>
      </div>
    </div>
  );
}

export default Footer;
