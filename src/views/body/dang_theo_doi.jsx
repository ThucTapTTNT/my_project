import React from "react";
import "../../styles/body.scss";
import dtd_content from "../../assets/images/body/dtd_content.png"
import mute from "../../assets/images/body/mute.png"
import channel from "../../assets/images/body/channel.png"
import like from "../../assets/images/body/like.png"
import comment from "../../assets/images/body/comment.png"
import save from "../../assets/images/body/save.png"
import share from "../../assets/images/body/share.png"
import more from "../../assets/images/body/more.png"
import Arrow from "./arrow";

const Dtd = () => {
    return(
        <div>
            <div className="main">
                <div className="dcb-wrapper">
                    <div className="dcb-content">
                        <img className="content" alt="" src={dtd_content}/>
                        <div className="volume">
                            <img className="mute" alt="" src={mute}/>
                        </div>
                        <div className="info">
                            <div className="info-1">
                                <div className="info-2">
                                    <img className="channel" alt="" src={channel}/>
                                    <div className="dcb-text">finDmusic</div>
                                    <div className="following">
                                        <div className="follow-1">
                                            <div className="follow-text">Đang theo dõi</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="caption">
                                "Ngủ một mình x Cô đơn trên sofa (Mashup Ngủ trên sofa) #nayeon #twice #cover"
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
                            <div className="feature-1">
                                <img className="icon-feature" alt="" src={share}/>
                                <div className="feature-text">Chia sẻ</div>
                            </div>
                            <div className="feature-1">
                                <img className="icon-feature" alt="" src={more}/>
                            </div>
                        </div>
                    </div>
                </div>
                <Arrow />
            </div>
        </div>
    )
}

export default Dtd;