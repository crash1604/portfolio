import "./topbar.scss"
import { HiServer, HiOutlinePhone, HiMail } from "react-icons/hi";

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
