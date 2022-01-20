import "./topbar.scss"
import { HiServer, HiOutlinePhone, HiMail } from "react-icons/hi";
import { BsGithub, BsLinkedin } from  'react-icons/bs';

export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}  >
            <div className="wrapper">
                <div className="left">
                    <HiServer className="logo" />
                    <a href="#intro" className="logo"> 
                    Crashed Server
                    </a>
                    <div className="itemContainer">
                        <HiOutlinePhone className="icon"/>    
                        <span>+1 250 797 2062</span>
                    </div>
                    <div className="itemContainer">
                        <HiMail className="icon" />
                        <span>chanakya1604@hotmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <a href="https://www.github.com/crash1604">
                            <BsGithub className="icon" />
                            <span>github.com/crash1604</span>
                        </a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://www.linkedin.com/in/chanakya-sharma-561527165/">
                            <BsLinkedin className="icon" />
                            <span>Chanakya Sharma</span>
                        </a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}> 
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
