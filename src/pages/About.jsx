import { MdCloudDownload } from "react-icons/md";
import cv from '../cv/SanjayPrasathResume.pdf'
import MyImg from '../assets/SanjayPrasath.png'
import '../styles/App.css'

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="sectionTitle">About Me</h2>
        <span className="sectionSubtitle">My Introduction</span>
        <div className="aboutContainer container ulGrid">
            <img src={MyImg} alt="" className="aboutImg" />
            <div className="aboutData">
                <p className="aboutDescription">I am a passionate and dedicated developer specializing in front-end technologies with a strong foundation in MERN stack development. As a fresher, I bring a fresh perspective and eagerness to contribute to innovative projects, constantly striving to enhance my skills and deliver exceptional results.</p>
                <div className="aboutInfo">
                    <div>
                        <span className='aboutInfoTitle'>02</span>
                        <span className="aboutInfoName">Years <br />Experience</span>
                    </div>
                    <div>
                        <span className='aboutInfoTitle'>02</span>
                        <span className="aboutInfoName">Projects <br />Completed</span>
                    </div>
                    <div>
                        <span className='aboutInfoTitle'>01</span>
                        <span className="aboutInfoName">Company <br />Worked</span>
                    </div>
                </div>
                <div className="aboutButtons">
                    <a download="" href={cv} className="button buttonFlex">
                        Download Resume<MdCloudDownload className='ml-2 mr-1' />
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About