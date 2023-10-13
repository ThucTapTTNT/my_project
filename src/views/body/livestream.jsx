import React, {useState} from "react";
import "../../styles/body.scss";
import dcb_content from "../../assets/images/body/dcb_content.png"
import mute from "../../assets/images/body/mute.png"
import channel from "../../assets/images/body/channel.png"
import like from "../../assets/images/body/like.png"
import comment from "../../assets/images/body/comment.png"
import save from "../../assets/images/body/save.png"
import share from "../../assets/images/body/share.png"
import more from "../../assets/images/body/more.png"
import viewer from "../../assets/images/body/viewer.png"
import close from "../../assets/images/body/close.png"
import chat_avatar from "../../assets/images/body/chat_avatar.png"
import com_enter from "../../assets/images/body/com_enter.png"
import Arrow from "./arrow";

const Livestream = () => {
    const [showLive, setShowLive] = useState(false);

    const handleClickLive = () => {
        setShowLive(!showLive);
    };
    return(
        <div>
            <div className="main">
                <div className={showLive ? "yt-wrapper" : "dcb-wrapper"}>
                    <div className="dcb-content">
                        <img className="content" alt="" src={dcb_content}/>
                        <div className="volume">
                            <div className="live-sign">
                                <div className="live">
                                    <div className="follow-1">
                                        <div className="live-text">TRỰC TIẾP</div>
                                    </div>
                                </div>
                                <div className="viewer">
                                    <img className="viewer-icon" alt="" src={viewer}/>
                                    <div className="viewer-text">725</div>
                                </div>
                            </div>
                            <img className="mute" alt="" src={mute}/>
                        </div>
                        <div className="info">
                            <div className="info-1">
                                <div className="info-2">
                                    <img className="channel" alt="" src={channel}/>
                                    <div className="dcb-text">finDmusic</div>
                                    <div className="follow">
                                        <div className="follow-1">
                                            <div className="follow-text">Theo dõi</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="caption">
                                "Ngủ một mình x Cô đơn trên sofa (Mashup Ngủ trên sofa) #nayeon #twice #cover"
                            </p>
                        </div>
                    </div>

                    {showLive && (
                        <div className="live-chat">
                            <div className="chatting">
                                <div className="chat1">
                                    <div className="chat1-w">
                                        <div className="chat1-left">Trò chuyện trực tiếp</div>
                                        <img className="chat-icon" alt="" src={close}/>
                                    </div>
                                </div>
                                <div className="chat2">
                                    <div className="chat2-1">
                                        <img className="chat2-ava" alt="" src={chat_avatar}/>
                                        <div className="chat2-name">Kadin</div>
                                        <div className="chat2-com">Hay quá em ơi</div>
                                    </div>
                                    <div className="chat2-1">
                                        <img className="chat2-ava" alt="" src={chat_avatar}/>
                                        <div className="chat2-name">Kadin</div>
                                        <div className="chat2-com">Hay quá em ơi</div>
                                    </div>
                                    <div className="chat2-1">
                                        <img className="chat2-ava" alt="" src={chat_avatar}/>
                                        <div className="chat2-name">Kadin</div>
                                        <div className="chat2-com">Hay quá em ơi</div>
                                    </div>
                                    <div className="chat2-1">
                                        <img className="chat2-ava" alt="" src={chat_avatar}/>
                                        <div className="chat2-name">Kadin</div>
                                        <div className="chat2-com">Hay quá em ơi</div>
                                    </div>
                                    <div className="chat2-1">
                                        <img className="chat2-ava" alt="" src={chat_avatar}/>
                                        <div className="chat2-name">Kadin</div>
                                        <div className="chat2-com">Hay quá em ơi</div>
                                    </div>
                                </div>
                            </div>
                            <div className="comment">
                                <div className="comment-w">
                                    <input className="com-bl" type="text" placeholder="Thêm bình luận..."/>
                                    <img className="com-enter" alt="" src={com_enter}/>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="feature">
                        <div className="feature-wrapper">
                            <div className="feature-1">
                                <img className="icon-feature" alt="" src={like}/>
                                <div className="feature-text">1,1 N</div>
                            </div>
                            <div className="feature-1" onClick={handleClickLive}>
                                <img className="icon-feature" alt="" src={comment}/>
                                <div className="feature-text">Trò chuyện</div>
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

export default Livestream;