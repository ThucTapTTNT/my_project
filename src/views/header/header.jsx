import React, {useState} from "react";
import SidebarMore from "../sidebar/sidebar_more";
import Notify from "./notify";
import "../../styles/header.scss";
import cloud from "../../assets/images/header/cloud.png"
import line from "../../assets/images/header/line.png"
import v1 from "../../assets/images/header/v1.png"
import v2 from "../../assets/images/header/v2.png"
import v3 from "../../assets/images/header/v3.png"
import v4 from "../../assets/images/header/v4.png"
import v5 from "../../assets/images/header/v5.png"
import v6 from "../../assets/images/header/v6.png"
import v7 from "../../assets/images/header/v7.png"
import v8 from "../../assets/images/header/v8.png"
import find from "../../assets/images/header/find.png"
import notify from "../../assets/images/header/notify.png"

const Header = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showNotify, setShowNotify] = useState(false);

    const handleClickSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const handleClickNotify = () => {
        setShowNotify(!showNotify);
    };

    
    return(
        <div className="header">
            <div className="header-wrapper">
                <div className="component" onClick={handleClickSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M33.4167 18.333H6.58333C5.70888 18.333 5 19.0419 5 19.9163V20.083C5 20.9575 5.70888 21.6663 6.58333 21.6663H33.4167C34.2911 21.6663 35 20.9575 35 20.083V19.9163C35 19.0419 34.2911 18.333 33.4167 18.333Z" fill="white"/>
                        <path d="M33.4167 26.667H6.58333C5.70888 26.667 5 27.3759 5 28.2503V28.417C5 29.2914 5.70888 30.0003 6.58333 30.0003H33.4167C34.2911 30.0003 35 29.2914 35 28.417V28.2503C35 27.3759 34.2911 26.667 33.4167 26.667Z" fill="white"/>
                        <path d="M33.4167 10H6.58333C5.70888 10 5 10.7089 5 11.5833V11.75C5 12.6245 5.70888 13.3333 6.58333 13.3333H33.4167C34.2911 13.3333 35 12.6245 35 11.75V11.5833C35 10.7089 34.2911 10 33.4167 10Z" fill="white"/>
                    </svg>
                </div>
                {showSidebar && <SidebarMore />}
                <div className="header-right">
                    <div className="frame">
                        <div className="buy">
                            <div className="text-wrapper">Mua gói</div>
                        </div>
                    </div>
                    <div className="component-2" onClick={handleClickNotify}>
                        <img className="icon" alt="" src={notify}/>
                    </div>
                    <div className="channel-type">
                        <img className="cloud" alt="" src={cloud} />
                    </div>
                </div>
                <div className="layer">
                    <div className="header-group">
                        <div className="header-group-2">
                            <img className="v1" alt="" src={v1} />
                            <img className="v2" alt="" src={v2} />
                            <img className="v3" alt="" src={v3} />
                            <img className="v4" alt="" src={v4} />
                            <img className="v5" alt="" src={v5} />
                            <div className="text-wrapper-2">short</div>
                        </div>
                        <img className="v6" alt="" src={v6} />
                    </div>
                    <img className="v7" alt="" src={v7} />
                    <img className="v8" alt="" src={v8} />
                </div>
                <div className="frame-wrapper">
                    <div className="frame-2">
                        <div className="text-wrapper-3">Tìm kiếm</div>
                        <div className="frame-3">
                            <img className="line-tk" alt="" src={line} />
                            <div className="component-2">
                                <img className="icon" alt="" src={find} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showNotify && <Notify />}
        </div>
    )
}

export default Header;