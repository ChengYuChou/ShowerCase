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

    const [hoveredIcon, setHoveredIcon] = useState(null);

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
                            <MdHome 
                            className="nav-icon"
                            onMouseEnter={() => setHoveredIcon('home')} 
                            onMouseLeave={() => setHoveredIcon(null)} 
                            />
                            {hoveredIcon === 'home' && <div className="tooltip">首頁</div>}
                        </div>
                        <div className="icon-wrapper">
                            <FaUser 
                            className="nav-icon"
                            onMouseEnter={() => setHoveredIcon('user')} 
                            onMouseLeave={() => setHoveredIcon(null)} 
                            />
                            {hoveredIcon === 'user' && <div className="tooltip">使用者</div>}
                        </div>
                            <IoNotifications 
                            className="nav-icon"
                            onMouseEnter={() => setHoveredIcon('notifications')} 
                            onMouseLeave={() => setHoveredIcon(null)} 
                            />
                            {hoveredIcon === 'notifications' && <div className="tooltip">通知</div>}

                            <IoMdSettings 
                            className="nav-icon"
                            onMouseEnter={() => setHoveredIcon('settings')} 
                            onMouseLeave={() => setHoveredIcon(null)} 
                            />
                            {hoveredIcon === 'settings' && <div className="tooltip">設定</div>}

                            <ImPhoneHangUp 
                            className="nav-icon"
                            onMouseEnter={() => setHoveredIcon('phone')} 
                            onMouseLeave={() => setHoveredIcon(null)} 
                            />
                            {hoveredIcon === 'phone' && <div className="tooltip">聯絡我們</div>}
                            

                    </nav>
                </div>
            )}



        </div>
    )
    
    
}

export default MenuBar