import { SlGraduation } from "react-icons/sl";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BiBriefcase } from "react-icons/bi";
import '../styles/App.css'

const Qualification = () => {
  return (
    <section className="qualification section" id="qualification">
        <h2 className="sectionTitle mt-20">Qualification</h2>
        <span className="sectionSubtitle">My Personal Journey</span>
        <div className="qualificationContainer container">
            <div className="qualificationTabs">
                <div className="qualificationButton buttonFlex">
                    <SlGraduation className="qualificationIcon" />Education
                </div>
                <div className="qualificationButton buttonFlex">
                    <BiBriefcase className="qualificationIcon" />Work
                </div>
            </div>
            <div className="qualificationSections">
                <div className="qualificationContent">
                    <div className="qualificationData">
                        <div>
                            <h3 className="qualificationTitle">Front End Developer</h3>
                            <span className="qualificationSubtitle">Kriyaetive</span>
                            <div className="qualificationCalendar">
                                <FaRegCalendarAlt className="calendar" />2024 - 2025
                            </div>
                        </div>
                        <div>
                            <span className="qualificationRounder"></span>
                            <span className="qualificationLine"></span>
                        </div>
                    </div>
                    <div className="qualificationData">
                        <div></div>
                        <div>
                            <span className="qualificationRounder"></span>
                            <span className="qualificationLine"></span>
                        </div>
                        <div>
                            <h3 className="qualificationTitle">Computer Science and Engineering</h3>
                            <span className="qualificationSubtitle">Kongunadu College of Engineering and Technology</span>
                            <div className="qualificationCalendar">
                                <FaRegCalendarAlt className="calendar" />2021 - 2025
                            </div>
                        </div>
                    </div>
                    <div className="qualificationData">
                        <div>
                            <h3 className="qualificationTitle">Higher Secondary School</h3>
                            <span className="qualificationSubtitle">{'Santa Maria Matriculation Higher Secondary School (84%)'}</span>
                            <div className="qualificationCalendar">
                                <FaRegCalendarAlt className="calendar" />2019 - 2020
                            </div>
                        </div>
                        <div>
                            <span className="qualificationRounder"></span>
                            <span className="qualificationLine"></span>
                        </div>
                    </div>
                    <div className="qualificationData">
                        <div></div>
                        <div>
                            <span className="qualificationRounder"></span>
                            {/* <span className="qualificationLine"></span> */}
                        </div>
                        <div>
                            <h3 className="qualificationTitle">Secondary School Leaving Certificate</h3>
                            <span className="qualificationSubtitle">{'Kingsley Matriculation School (83%)'}</span>
                            <div className="qualificationCalendar">
                                <FaRegCalendarAlt className="calendar" />2016 - 2017
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification