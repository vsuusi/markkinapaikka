import { Link } from 'react-router-dom';
import { FaGithub, FaRegCopyright } from 'react-icons/fa';
import { MdOutlineReportProblem } from 'react-icons/md';
import logo from '../../resources/logo.png';

import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-items">
        <img className="footer-logo" src={logo} alt="MarkkinaPaikka" />
        <button><Link className="footer-link" to="https://github.com/vsuusi/markkinapaikka" target="_blank"><FaGithub /></Link></button>
        <button><Link className="footer-link" to="https://github.com/vsuusi/markkinapaikka/blob/main/LICENSE" target="_blank"><FaRegCopyright /></Link></button>
        <button><Link className="footer-link" to="https://github.com/vsuusi/markkinapaikka/issues/new" target="_blank"><MdOutlineReportProblem /></Link></button>
      </div>
    </div>
  );
}

export default Footer;
