import { PiBracketsCurlyBold } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LuServer } from "react-icons/lu";
import { useState } from 'react';
import '../styles/App.css'

const Skills = () => {
    const [activeSkills, setActiveSkills] = useState('frontEnd');

    const toggleSkill = (skill) => {
        setActiveSkills(activeSkills === skill ? null : skill);
    }

    return (
        <section className="skills section" id="skills">
            <h2 className="sectionTitle">Skills</h2>
            <section className="sectionSubtitle">My Tech Stack</section>
            <div className="skillsContainer container w-[90%] ulGrid">
                <div>
                    <div className={`skillsContent ${activeSkills === 'frontEnd' ? 'skillsOpen' : 'skillsClose'}`}>
                        <div className="skillsHeader" onClick={() => toggleSkill('frontEnd')}>
                            <PiBracketsCurlyBold className='skillsIcon' />
                            <div>
                                <h1 className="skillsTitle">Front End</h1>
                            </div>
                            <MdOutlineKeyboardArrowDown className='skillsArrow' />
                        </div>
                        <div className="skillsList ulGrid">
                            <div className="skillsData">
                                <div className="skillsTitles">
                                    <h3 className="skillsName">HTML</h3>
                                    <span className='skillsNumber'>90%</span>
                                </div>
                                <div className="skillsBar">
                                    <span className="skillsPercentage skillsHtml"></span>
                                </div>
                            </div>
                            <div className="skillsData">
                                <div className="skillsTitles">
                                    <h3 className="skillsName">Tailwind CSS</h3>
                                    <span className='skillsNumber'>60%</span>
                                </div>
                                <div className="skillsBar">
                                    <span className="skillsPercentage skillsCss"></span>
                                </div>
                            </div>
                            <div className="skillsData">
                                <div className="skillsTitles">
                                    <h3 className="skillsName">JavaScript</h3>
                                    <span className='skillsNumber'>70%</span>
                                </div>
                                <div className="skillsBar">
                                    <span className="skillsPercentage skillsJs"></span>
                                </div>
                            </div>
                            <div className="skillsData">
                                <div className="skillsTitles">
                                    <h3 className="skillsName">React</h3>
                                    <span className='skillsNumber'>80%</span>
                                </div>
                                <div className="skillsBar">
                                    <span className="skillsPercentage skillsReact"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`skillsContent ${activeSkills === 'backEnd' ? 'skillsOpen' : 'skillsClose'}`}>
                        <div className="skillsHeader" onClick={() => toggleSkill('backEnd')}>
                            <LuServer className='skillsIcon' />
                            <div>
                                <h1 className="skillsTitle">Back End</h1>
                            </div>
                            <MdOutlineKeyboardArrowDown className='skillsArrow' />
                        </div>
                        <div className="skillsList ulGrid">
                            <div className="skillsData">
                                <div className="skillsTitles">
                                    <h3 className="skillsName">Node.js</h3>
                                    <span className='skillsNumber'>30%</span>
                                </div>
                                <div className="skillsBar">
                                    <span className="skillsPercentage skillsNode"></span>
                                </div>
                            </div>
                            <div className="skillsData">
                                <div className="skillsTitles">
                                    <h3 className="skillsName">Express.js</h3>
                                    <span className='skillsNumber'>25%</span>
                                </div>
                                <div className="skillsBar">
                                    <span className="skillsPercentage skillsExpress"></span>
                                </div>
                            </div>
                            <div className="skillsData">
                                <div className="skillsTitles">
                                    <h3 className="skillsName">MongoDB</h3>
                                    <span className='skillsNumber'>40%</span>
                                </div>
                                <div className="skillsBar">
                                    <span className="skillsPercentage skillsMongo"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`skillsContent ${activeSkills === 'DigitalMarketing' ? 'skillsOpen' : 'skillsClose'}`}>
                        <div className="skillsHeader" onClick={() => toggleSkill('DigitalMarketing')}>
                            <PiBracketsCurlyBold className='skillsIcon' />
                            <div>
                                <h1 className="skillsTitle">Digital Marketing</h1>
                            </div>
                            <MdOutlineKeyboardArrowDown className='skillsArrow' />
                        </div>
                        <div className="skillsList ulGrid">
                            <div className="skillsData">
                                <div className="skillsTitles">
                                    <h3 className="skillsName">SEO</h3>
                                    <span className='skillsNumber'>70%</span>
                                </div>
                                <div className="skillsBar">
                                    <span className="skillsPercentage skillsSeo"></span>
                                </div>
                            </div>
                            <div className="skillsData">
                                <div className="skillsTitles">
                                    <h3 className="skillsName">SEM</h3>
                                    <span className='skillsNumber'>30%</span>
                                </div>
                                <div className="skillsBar">
                                    <span className="skillsPercentage skillsSem"></span>
                                </div>
                            </div>
                            <div className="skillsData">
                                <div className="skillsTitles">
                                    <h3 className="skillsName">SMO</h3>
                                    <span className='skillsNumber'>50%</span>
                                </div>
                                <div className="skillsBar">
                                    <span className="skillsPercentage skillsSmo"></span>
                                </div>
                            </div>
                            <div className="skillsData">
                                <div className="skillsTitles">
                                    <h3 className="skillsName">SMM</h3>
                                    <span className='skillsNumber'>30%</span>
                                </div>
                                <div className="skillsBar">
                                    <span className="skillsPercentage skillsSmm"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;