import "./portfolio.scss"
import Skills from './skills/Skills'
import Frameworks from './frameworks/Frameworks'
import { IoDocumentAttachOutline, IoArrowForwardCircle } from "react-icons/io5"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <div className="container">
                <h2 className="orange">Education</h2>
                <div className="item">
                     <h3>Vancouver Island University</h3>
                     <b><p>Bachelors of Science with Majors in Computer Science</p></b>
                     <span>(Graduating April 2022)</span>
                </div>
            </div>
            <div className="wrapper">
                <div className="left">
                    <h3 className="magenta">Skills and Languages</h3>
                            <Skills />
                    <br />
                    <h3 className="aqua">Frameworks</h3>
                            <Frameworks />
                    <br />
                </div>
                <div className="right">
                    <h3 className="lime"> <IoDocumentAttachOutline/> Would you like to have my resume?</h3>
                    <br/>
                    <a href="assets/Resume.pdf"><h4><IoArrowForwardCircle/> It is right here</h4></a>
                    <div className="imageContainer">
                    <img src="assets/programmer.svg" alt="Programmer" className="aqua" />
                    </div>
                </div>
            </div>
        </div>
    )
}
