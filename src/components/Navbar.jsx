import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { AiOutlineHome } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { DiCode } from "react-icons/di";
import { BiSend } from "react-icons/bi";
import { PiBriefcase } from "react-icons/pi";
import { LuFileCode } from "react-icons/lu";
import { GrAppsRounded } from "react-icons/gr";
import '../styles/App.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavMenu = () => {
        setIsOpen(!isOpen);
    }

    const closeNavMenu = () => {
        setIsOpen(false);
    }

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <ScrollLink to="home" smooth={true} duration={100} className='navLogo' activeClass='active' onClick={closeNavMenu}>Sanjay</ScrollLink>
                <div className={`navMenu ${isOpen ? 'bottom-0' : ''}`} id='navMenu'>
                    <ul className='navList ulGrid'>
                        <li className='navItem'>
                            <ScrollLink to="home" smooth={true} duration={100} activeClass='active' className='navLink' onClick={closeNavMenu}>
                                <AiOutlineHome style={{fontSize: '18px'}} className='icon' />Home
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="about" smooth={true} duration={100} activeClass='active' className='navLink' onClick={closeNavMenu}>
                                <FiUser style={{fontSize: '18px'}} className='icon' />About
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="skills" smooth={true} duration={100} activeClass='active' className='navLink' onClick={closeNavMenu}>
                                <LuFileCode style={{fontSize: '18px'}} className='icon' />Skills
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="qualification" smooth={true} duration={100} activeClass='active' className='navLink' onClick={closeNavMenu}>
                                <PiBriefcase style={{fontSize: '18px'}} className='icon' />Qualification
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="projects" smooth={true} duration={100} activeClass='active' className='navLink' onClick={closeNavMenu}>
                                <DiCode style={{fontSize: '22px'}} className='icon' />Projects
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="contactme" smooth={true} duration={100} activeClass='active' className='navLink' onClick={closeNavMenu}>
                                <BiSend style={{fontSize: '18px'}} className='icon' />Contact Me
                            </ScrollLink>
                        </li>
                    </ul>
                    <FaTimes className='navClose' id='nav-close' onClick={closeNavMenu} />
                </div>
                <div className='navBtns'>
                    
                    <div className={`navToggle ${isOpen ? 'hidden' : 'block'}`} id='navToggle' onClick={toggleNavMenu}>
                        <GrAppsRounded />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar