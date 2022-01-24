import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react" 

export default function Intro() {

    const firstRef = useRef();
    const nameRef = useRef();

    useEffect(() => {
        init(firstRef.current,
        { 
            showCursor: true,
             strings: [ 'Software Developer','Software Engineer', 'Backend Developer' ] 
           }
           );
        },[]);


    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                <object data="assets/server-crash.svg"> </object>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hey There! I am</h2>
                    <h1><span ref={nameRef}>Chanakya</span> Sharma</h1>
                    <h3> <span className="console">$></span> <span className="dev" ref={firstRef}> </span></h3>
                    <br/>

                    <p>I will be a graduate from Vancouver Island University with B.Sc. major in Computer Science by April 2022. I am looking for an oppurtunity to expand my skillset and improve my proficiency by working with a team for an extended term</p>
                    <br/>

                    <h4>Future Plans for this website</h4>
                    <br/>
                    <p>I plan to turn this website into a full fledged forum for people who would like to learn more in coding and technologies</p>
                    <p>It will also include some new tech blogs where I mess around with new technologies</p>
                </div>
            </div>
        </div>
    )
}
