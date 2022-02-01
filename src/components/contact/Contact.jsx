import "./contact.scss"
import { HiOutlinePhone, HiMail } from "react-icons/hi";
import { BsInstagram, BsLinkedin } from  'react-icons/bs';
import { DiAndroid, DiFirefox, DiGoogleDrive, DiPython, DiReact , DiUbuntu, DiVisualstudio , DiNodejsSmall , DiApple , DiBootstrap , DiDebian , DiDjango , DiHtml5 , DiStackoverflow , DiTerminal , DiVim} from "react-icons/di";

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <h1>Contact me!!</h1>
            <div className="container">
                <div className="item">
                    <HiMail size={100}/>
                    <h3>Email</h3>
                    <br/>
                    <p>chanakya1604@hotmail.com</p>
                    <br/>
                </div>
                <div className="item">
                    <HiOutlinePhone size={100} />
                    <h3>Call/Text</h3>
                    <br/>
                    <p>+1 (250)-797-2062</p>
                    <br/>
                </div>
                
                <div className="item">
                <a href="https://www.linkedin.com/in/chanakya-sharma-561527165/">
                    <BsLinkedin size={100}/>
                    <h3>LinkedIn</h3>
                    <br/>
                    <p>@chanakya-sharma-561527165</p>
                    <br/>
                    </a>
                </div>
                
                
                <div className="item">
                <a href="https://www.instagram.com/thecrashedserver">
                    <BsInstagram size={100}/>
                    <h3>Instagram</h3>
                    <br/>
                    <p>@thecrashedserver</p>
                    <br/>
                    </a>
                </div>
                
            </div>
            <div className="footer">
                <h3>Meh!</h3>
                <p>This website is optimized for desktop and PC's only</p>
            </div>
           <span>
            <DiAndroid size={60}/>
            <DiFirefox size={60}/> 
            <DiGoogleDrive size={60}/> 
            <DiPython size={60}/> 
            <DiReact size={60}/> 
            <DiUbuntu size={60}/> 
            <DiVisualstudio size={60}/>  
            <DiNodejsSmall size={60}/> 
            <DiApple size={60}/>
            <DiBootstrap size={60}/>
            <DiDebian size={60}/> 
            <DiDjango size={60}/>
            <DiHtml5 size={60}/>
            <DiStackoverflow size={60}/>
            <DiTerminal size={60}/>
            <DiVim size={60}/>
            </span>
        </div>
    )
}
