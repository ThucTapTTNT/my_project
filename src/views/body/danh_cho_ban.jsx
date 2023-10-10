import React, { useState } from 'react';
import "../../styles/body.scss";
import dcb_content from "../../assets/images/body/dcb_content.png"
import mute from "../../assets/images/body/mute.png"
import channel from "../../assets/images/body/channel.png"
import like from "../../assets/images/body/like.png"
import comment from "../../assets/images/body/comment.png"
import save from "../../assets/images/body/save.png"
import share from "../../assets/images/body/share.png"
import more from "../../assets/images/body/more.png"
import s_mes from "../../assets/images/body/s_mes.png"
import s_face from "../../assets/images/body/s_face.png"
import s_zalo from "../../assets/images/body/s_zalo.png"
import s_what from "../../assets/images/body/s_what.png"
import s_tele from "../../assets/images/body/s_tele.png"
import s_twit from "../../assets/images/body/s_twit.png"
import s_email from "../../assets/images/body/s_email.png"


import Arrow from "./arrow";

const Dcb = () => {
    const [isFollowing, setIsFollowing] = useState(false);

    const toggleFollow = () => {
        setIsFollowing(!isFollowing);
    }

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };
    
    return(
        <div>
            <div className="main">
                <div className="dcb-wrapper">
                    <div className="dcb-content">
                        <img className="content" alt="" src={dcb_content}/>
                        <div className="volume">
                            <img className="mute" alt="" src={mute}/>
                        </div>
                        <div className="info">
                            <div className="info-1">
                                <div className="info-2">
                                    <img className="channel" alt="" src={channel}/>
                                    <div className="dcb-text">finDmusic</div>
                                    <div className={isFollowing ? "following" : "follow"} onClick={toggleFollow}>
                                        <div className="follow-1">
                                            <div className="follow-text">{isFollowing ? "Đang theo dõi" : "Theo dõi"}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="caption">
                                Ngủ một mình x Cô đơn trên sofa (Mashup Ngủ trên sofa) #short #beauty #girl
                            </p>
                        </div>
                    </div>
                    <div className="feature">
                        <div className="feature-wrapper">
                            <div className="feature-1">
                                <img className="icon-feature" alt="" src={like}/>
                                <div className="feature-text">1,1 N</div>
                            </div>
                            <div className="feature-1">
                                <img className="icon-feature" alt="" src={comment}/>
                                <div className="feature-text">123</div>
                            </div>
                            <div className="feature-1">
                                <img className="icon-feature" alt="" src={save}/>
                                <div className="feature-text">Lưu</div>
                            </div>
                            <div className="feature-1" onClick={togglePopup}>
                                <img className="icon-feature" alt="" src={share}/>
                                <div className="feature-text">Chia sẻ</div>
                            </div>
                            <div className="feature-1">
                                <img className="icon-feature" alt="" src={more}/>
                            </div>
                        </div>
                    </div>
                </div>
                
                {isPopupOpen && (
                    <div className="share-popup">
                        <div className="popup-content">
                            <div className="share1">
                                Chia sẻ
                                <span className="popup-close" onClick={togglePopup}>&times;</span>
                            </div>
                            <div className="share2">
                                <div className="share2-item">
                                    <img className="share2-icon" alt="" src={s_mes}/>
                                    <div className="share2-text">Messenger</div>
                                </div>
                                <div className="share2-item">
                                    <img className="share2-icon" alt="" src={s_face}/>
                                    <div className="share2-text">Facebook</div>
                                </div>
                                <div className="share2-item">
                                    <img className="share2-icon" alt="" src={s_zalo}/>
                                    <div className="share2-text">Zalo</div>
                                </div>
                                <div className="share2-item">
                                    <img className="share2-icon" alt="" src={s_what}/>
                                    <div className="share2-text">WhatsApp</div>
                                </div>
                                <div className="share2-item">
                                    <img className="share2-icon" alt="" src={s_tele}/>
                                    <div className="share2-text">Telegram</div>
                                </div>
                                <div className="share2-item">
                                    <img className="share2-icon" alt="" src={s_twit}/>
                                    <div className="share2-text">Twitter</div>
                                </div>
                                <div className="share2-item">
                                    <img className="share2-icon" alt="" src={s_email}/>
                                    <div className="share2-text">Email</div>
                                </div>
                            </div>
                            <div className="share3">
                                <div className="share3-content">
                                    <div className="share3-left">https://mobion.vn/shortkdjagaiqdjto3t?fea=s</div>
                                    <div className="share3-right">Sao chép</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <Arrow />
            </div>
        </div>
    )
}

export default Dcb;