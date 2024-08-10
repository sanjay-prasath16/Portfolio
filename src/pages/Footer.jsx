import { FaInstagram, FaTwitterSquare } from "react-icons/fa";
import '../styles/App.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerBg">
        <div className="footerContainer container ulGrid">
          <div>
            <h1 className="footerTitle">Sanjay</h1>
            <span className="footerSubtitle">MERN Developer</span>
          </div>
          <ul className="footerLinks">
            <li>
              <a href="" className="footerLink">Services</a>
            </li>
            <li>
              <a href="" className="footerLink">Project</a>
            </li>
            <li>
              <a href="" className="footerLink">Contact</a>
            </li>
          </ul>
          <div className="footerSocials">
            <a href="" target="_blank" className="footerSocial">
              <FaInstagram />
            </a>
            <a href="" target="_blank" className="footerSocial">
              <FaTwitterSquare />
            </a>
          </div>
        </div>
        <p className="footerCopy">&#169; Bedimcode. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer