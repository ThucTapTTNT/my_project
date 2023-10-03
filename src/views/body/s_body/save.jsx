import React from "react";
import "../../../styles/body.scss";
import dtd_content from "../../../assets/images/body/dtd_content.png"
import mute from "../../../assets/images/body/mute.png"
import channel from "../../../assets/images/body/channel.png"
import comment from "../../../assets/images/body/comment.png"
import saveYt from "../../../assets/images/body/save-yt.png"
import share from "../../../assets/images/body/share.png"
import more from "../../../assets/images/body/more.png"
import item1 from "../../../assets/images/body/item1.png"
import item2 from "../../../assets/images/body/item2.png"
import item3 from "../../../assets/images/body/item3.png"
import item4 from "../../../assets/images/body/item4.png"
import item5 from "../../../assets/images/body/item5.png"
import item6 from "../../../assets/images/body/item6.png"
import item7 from "../../../assets/images/body/item7.png"
import item8 from "../../../assets/images/body/item8.png"
import item9 from "../../../assets/images/body/item9.png"
import item10 from "../../../assets/images/body/item10.png"
import item11 from "../../../assets/images/body/item11.png"
import item12 from "../../../assets/images/body/item12.png"
import likeYt from "../../../assets/images/body/like-yt.png"
import Arrow from "../arrow";

const Save = () => {
    return(
        <div>
            <div className="main">
                <div className="yt-wrapper">
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

                    <div className="feature-2">
                        <div className="feature-2-bot">
                            <div className="f2-row">
                                <div className="f2-item-1">
                                    <img className="f2-img" alt="" src={item1}/>
                                </div>
                                <div className="f2-item-1">
                                    <img className="f2-img" alt="" src={item2}/>
                                    <div className="f2-item-text">Ngủ một mình x Cô đơn trên sofa (Mashup Ngủ trên sofa)</div>
                                </div>
                                <div className="f2-item-1">
                                    <img className="f2-img" alt="" src={item3}/>
                                    <div className="f2-item-text">Ngủ một mình x Cô đơn trên sofa (Mashup Ngủ trên sofa)</div>
                                </div>
                            </div>

                            <div className="f2-row">
                                <div className="f2-item-1">
                                    <img className="f2-img" alt="" src={item4}/>
                                    <div className="f2-item-text">Ngủ một mình x Cô đơn trên sofa (Mashup Ngủ trên sofa)</div>
                                </div>
                                <div className="f2-item-1">
                                    <img className="f2-img" alt="" src={item5}/>
                                    <div className="f2-item-text">Ngủ một mình x Cô đơn trên sofa (Mashup Ngủ trên sofa)</div>
                                </div>
                                <div className="f2-item-1">
                                    <img className="f2-img" alt="" src={item6}/>
                                    <div className="f2-item-text">Ngủ một mình x Cô đơn trên sofa (Mashup Ngủ trên sofa)</div>
                                </div>
                            </div>

                            <div className="f2-row">
                                <div className="f2-item-1">
                                    <img className="f2-img" alt="" src={item7}/>
                                    <div className="f2-item-text">Ngủ một mình x Cô đơn trên sofa (Mashup Ngủ trên sofa)</div>
                                </div>
                                <div className="f2-item-1">
                                    <img className="f2-img" alt="" src={item8}/>
                                    <div className="f2-item-text">Ngủ một mình x Cô đơn trên sofa (Mashup Ngủ trên sofa)</div>
                                </div>
                                <div className="f2-item-1">
                                    <img className="f2-img" alt="" src={item9}/>
                                    <div className="f2-item-text">Ngủ một mình x Cô đơn trên sofa (Mashup Ngủ trên sofa)</div>
                                </div>
                            </div>

                            <div className="f2-row">
                                <div className="f2-item-1">
                                    <img className="f2-img" alt="" src={item10}/>
                                    <div className="f2-item-text">Ngủ một mình x Cô đơn trên sofa (Mashup Ngủ trên sofa)</div>
                                </div>
                                <div className="f2-item-1">
                                    <img className="f2-img" alt="" src={item11}/>
                                    <div className="f2-item-text">Ngủ một mình x Cô đơn trên sofa (Mashup Ngủ trên sofa)</div>
                                </div>
                                <div className="f2-item-1">
                                    <img className="f2-img" alt="" src={item12}/>
                                    <div className="f2-item-text">Ngủ một mình x Cô đơn trên sofa (Mashup Ngủ trên sofa)</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="feature">
                        <div className="feature-wrapper">
                            <div className="feature-1">
                                <img className="icon-feature" alt="" src={likeYt}/>
                                <div className="feature-text">1,1 N</div>
                            </div>
                            <div className="feature-1">
                                <img className="icon-feature" alt="" src={comment}/>
                                <div className="feature-text">123</div>
                            </div>
                            <div className="feature-1">
                                <img className="icon-feature" alt="" src={saveYt}/>
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

export default Save;