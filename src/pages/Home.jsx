import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaArrowDown } from "react-icons/fa6";
import { BiSend } from "react-icons/bi";
import { LuMouse } from "react-icons/lu";
import BlobSvg from '../svg/BlobSvg';
import '../styles/App.css';

const Home = () => {
  const contentVariants = {
    hidden: { x: '-10vw', opacity: 0 },
    visible: {
      x: 0, 
      opacity: 1, 
      transition: { type: 'spring', stiffness: 50, duration: 1 }
    },
  };

  const imageVariants = {
    hidden: { x: '10vw', opacity: 0 },
    visible: {
      x: 0, 
      opacity: 1, 
      transition: { type: 'spring', stiffness: 50, duration: 1 }
    },
  };

  const scrollVariants = {
    hidden: { x: '-10vw', opacity: 0 },
    visible: {
      x: 0, 
      opacity: 1, 
      transition: { type: 'spring', stiffness: 50, duration: 1 }
    },
  };

  return (
    <div>
      <Navbar />
      <section className='home section' id='home'>
        <div className='homeContainer container ulGrid'>
          <motion.div 
            className='homeContent ulGrid' 
            initial="hidden" 
            animate="visible"
          >
            <motion.div className='homeSocial' variants={contentVariants}>
              <a href='https://www.linkedin.com/in/sanjay-prasath-s' target='_blank' className='homeSocialIcon'><CiLinkedin /></a>
              <a href='https://github.com/sanjay-prasath16' target='_blank' className='homeSocialIcon'><FaGithub /></a>
            </motion.div>

            <motion.div className='homeImg' variants={imageVariants}>
              <BlobSvg className='homeBlob' />
            </motion.div>

            <motion.div className='homeData' variants={contentVariants}>
              <h1 className="homeTitle">{`Hi, I'm Sanjay Prasath`} </h1>
              <h3 className='homeSubtitle'>Frontend Developer</h3>
              <p className="homeDescription">Fresher skilled in MERN stack development, passionate about building dynamic, responsive web applications with MongoDB, Express, React, and Node.js</p>
              <ScrollLink to='contactme' smooth={true} duration={100} className="button buttonFlex buttonIcon">Contact Me<BiSend style={{ fontSize: '18px', marginLeft: '5px' }} /></ScrollLink>
            </motion.div>
          </motion.div>

          <motion.div className="homeScroll" initial="hidden" animate="visible" variants={scrollVariants}>
            <ScrollLink to="about" smooth={true} duration={100} className="homeScrollButton buttonFlex">
              <LuMouse className='homeScrollMouse mt-1 mr-2' />
              <span className="homeScrollName">Scroll Down</span>
              <FaArrowDown className='homeScrollArrow mt-1 ml-2' />
            </ScrollLink>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;