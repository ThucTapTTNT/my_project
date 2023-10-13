import React, {useState} from "react";
import "../../styles/body.scss";
import f2like from "../../assets/images/body/f2-like.png"
import f2save from "../../assets/images/body/f2-save.png"

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