import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../../styles/sidebar.scss";
import s1 from "../../assets/images/sidebar/s1.png"
import s2 from "../../assets/images/sidebar/s2.png"
import s3 from "../../assets/images/sidebar/s3.png"
import s4 from "../../assets/images/sidebar/s4.png"

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        activeIndex: null,
      };
    }
  
    handleItemClick = (index) => {
        this.setState({ activeIndex: index });
    };
  
    render() {
        const { activeIndex } = this.state;
        const items = [
            {
                to: '/',
                imgSrc: s1,
                text: 'Dành cho bạn',
            },
            {
                to: '/dtd',
                imgSrc: s2,
                text: 'Đang theo dõi',
            },
            {
                to: '/tt',
                imgSrc: s3,
                text: 'Trực tiếp',
            },
            {
                to: '/yt',
                imgSrc: s4,
                text: 'Yêu thích',
            },
        ];

        return (
            <div className="sidebar">
                {items.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.to}
                        activeClassName="active"
                        onClick={() => this.handleItemClick(index)}
                    >
                        <div className={`sv ${activeIndex === index ? 'active' : ''}`}>
                            <img className="s1" alt="" src={item.imgSrc} />
                            <div className="sidebar-text">{item.text}</div>
                        </div>
                    </NavLink>
                ))}
            </div>
        );
    }
}

// const Sidebar = () => {
//     return(
//         <div className="sidebar">
//             <a href="/">
//                 <div className="sv pick">
//                     <img className="s1" alt="" src={s1} />
//                     <div className="sidebar-text">Dành cho bạn</div>
//                 </div>
//             </a>
//             <a href="/dtd">
//                 <div className="sv">
//                     <img className="s1" alt="" src={s2} />
//                     <div className="sidebar-text">Đang theo dõi</div>
//                 </div>
//             </a>
//             <a href="/tt">
//                 <div className="sv">
//                     <img className="s1" alt="" src={s3} />
//                     <div className="sidebar-text">Trực tiếp</div>
//                 </div>
//             </a>
//             <a href="/yt">
//                 <div className="sv">
//                     <img className="s1" alt="" src={s4} />
//                     <div className="sidebar-text">Yêu thích</div>
//                 </div>
//             </a>
//         </div>     
//     )
// }

export default Sidebar;