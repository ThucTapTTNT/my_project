import React, {useState} from "react";
import "../../styles/body.scss";
import dtd_content from "../../assets/images/body/dtd_content.png"
import mute from "../../assets/images/body/mute.png"
import channel from "../../assets/images/body/channel.png"
import comment from "../../assets/images/body/comment.png"
import save from "../../assets/images/body/save.png"
import share from "../../assets/images/body/share.png"
import more from "../../assets/images/body/more.png"
import f2like from "../../assets/images/body/f2-like.png"
import f2save from "../../assets/images/body/f2-save.png"
import item1 from "../../assets/images/body/item1.png"
import item2 from "../../assets/images/body/item2.png"
import item3 from "../../assets/images/body/item3.png"
import item4 from "../../assets/images/body/item4.png"
import item5 from "../../assets/images/body/item5.png"
import item6 from "../../assets/images/body/item6.png"
import item7 from "../../assets/images/body/item7.png"
import item8 from "../../assets/images/body/item8.png"
import item9 from "../../assets/images/body/item9.png"
import item10 from "../../assets/images/body/item10.png"
import item11 from "../../assets/images/body/item11.png"
import item12 from "../../assets/images/body/item12.png"
import likeYt from "../../assets/images/body/like-yt.png"
import Save from "./s_body/save";
import Arrow from "./arrow";

const Yt_s_Save = () => {
    const [showYt, setShowYt] = useState(false);
    const [showSave, setShowSave] = useState(false);

    const handleClickYt = () => {
        setShowYt(!showYt);
    };

    const handleClickSave = () => {
        setShowSave(!showSave);
    };

    return(
        <div className="feature-2-top">
            <div className="f2-space">
                <div className="f2-like" onClick={handleClickYt}>
                    <img className="f2-icon" alt="" src={f2like}/>
                    <div className="f2-text">Đã thích</div>
                </div>
                <div className="f2-like" onClick={handleClickSave}>
                    <img className="f2-icon" alt="" src={f2save}/>
                    <div className="f2-text">Lưu trữ</div>
                </div>
            </div>
        </div>
        // {showYt && <Yt />}
        // {showSave && <Save />}
    )
}

export default Yt_s_Save;