import React from "react";
import "../../styles/sidebar.scss";
import s1 from "../../assets/images/sidebar/s1.png"
import s2 from "../../assets/images/sidebar/s2.png"
import s3 from "../../assets/images/sidebar/s3.png"
import s4 from "../../assets/images/sidebar/s4.png"

const Sidebar = () => {
    return(
        <div className="sidebar">
            <a href="/dcb">
                <div className="sv pick">
                    <img className="s1" alt="" src={s1} />
                    <div className="sidebar-text">Dành cho bạn</div>
                </div>
            </a>
            <a href="/dtd">
                <div className="sv">
                    <img className="s1" alt="" src={s2} />
                    <div className="sidebar-text">Đang theo dõi</div>
                </div>
            </a>
            <a href="/tt">
                <div className="sv">
                    <img className="s1" alt="" src={s3} />
                    <div className="sidebar-text">Trực tiếp</div>
                </div>
            </a>
            <a href="/yt">
                <div className="sv">
                    <img className="s1" alt="" src={s4} />
                    <div className="sidebar-text">Yêu thích</div>
                </div>
            </a>
        </div>
    )
}

export default Sidebar;