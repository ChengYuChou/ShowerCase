import { useState } from "react";
import { CgMenuMotion } from "react-icons/cg";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { ImPhoneHangUp } from "react-icons/im";

function MenuBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }






    return(
        <div>
            <CgMenuMotion className="menu" onClick={toggleMenu} style={{cursor:"pointer"}}/>

            {isMenuOpen && (

                <div className = {`menuSidebar  ${isMenuOpen ? 'open': ''}`}>
                    <IoMdArrowRoundBack className="backButton" onClick={toggleMenu} style={{cursor:"pointer"}}/>  

                    <nav className="navbar">
                        <div className="icon-wrapper">
                            <MdHome className="nav-icon"/>
                        <h2 className="guide">Home</h2>
                        </div>

                        <div className="icon-wrapper">
                            <FaUser className="nav-icon"/>
                        <h2 className="guide">Personal</h2>
                        </div>

                        <div className="icon-wrapper">
                            <IoNotifications className="nav-icon"/>
                            <h2 className="guide">Notification</h2>
                        </div>    

                        <div className="icon-wrapper">
                            <IoMdSettings className="nav-icon"/>
                            <h2 className="guide">Setting</h2>
                        </div>

                        <div className="icon-wrapper">
                            <ImPhoneHangUp className="nav-icon" />
                            <h2 className="guide">Contact</h2>
                        </div>

                     </nav>
                </div>
            )}



        </div>
    )
    
    
}

export default MenuBar