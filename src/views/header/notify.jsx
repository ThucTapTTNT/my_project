import React from "react";
import "../../styles/header.scss";
import tick from "../../assets/images/header/tick.png"
import n1 from "../../assets/images/header/n1.png"
import n2 from "../../assets/images/header/n2.png"
import dot3 from "../../assets/images/header/3_dot.png"

const Notify = () => {
    return(
        <div className="notify">
            <div className="n1">
                <div className="n1-w">
                    <div className="n1-text">Thông báo</div>
                    <img className="n1-img" alt="" src={tick} />
                </div>
            </div>
            <div className="n2">
                <div className="n2-w">
                    <div className="notify-1">
                        <div className="n-left">
                            <div className="n-left-w">
                                <svg className="n-dot" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <circle cx="4" cy="4" r="4" fill="#EC2227"/>
                                </svg>
                                <img className="n-logo" alt="" src={n1} />
                            </div>
                            <div className="n2-info">
                                <div className="n2-text">Tiêu đề video không giới hạn tối đa dòng</div>
                                <div className="n2-time">3 giờ trước</div>
                            </div>
                        </div>
                        <div className="n-right">
                            <img className="n2-img" alt="" src={n2} />
                            <img className="n2-more" alt="" src={dot3} />
                        </div>
                    </div>       
                </div>

                <div className="n2-w">
                    <div className="notify-1">
                        <div className="n-left">
                            <div className="n-left-w">
                                <img className="n-logo" alt="" src={n1} />
                            </div>
                            <div className="n2-info">
                                <div className="n2-text">Tiêu đề video không giới hạn tối đa dòng</div>
                                <div className="n2-time">3 giờ trước</div>
                            </div>
                        </div>
                        <div className="n-right">
                            <img className="n2-img" alt="" src={n2} />
                        </div>
                    </div>       
                </div>

                <div className="n2-w">
                    <div className="notify-1">
                        <div className="n-left">
                            <div className="n-left-w">
                                <svg className="n-dot" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <circle cx="4" cy="4" r="4" fill="#EC2227"/>
                                </svg>
                                <img className="n-logo" alt="" src={n1} />
                            </div>
                            <div className="n2-info">
                                <div className="n2-text">Tiêu đề video không giới hạn tối đa dòng</div>
                                <div className="n2-time">3 giờ trước</div>
                            </div>
                        </div>
                        <div className="n-right">
                            <img className="n2-img" alt="" src={n2} />
                        </div>
                    </div>       
                </div>

                <div className="n2-w">
                    <div className="notify-1">
                        <div className="n-left">
                            <div className="n-left-w">
                                <svg className="n-dot" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <circle cx="4" cy="4" r="4" fill="#EC2227"/>
                                </svg>
                                <img className="n-logo" alt="" src={n1} />
                            </div>
                            <div className="n2-info">
                                <div className="n2-text">Fin'd đã theo dõi bạn</div>
                                <div className="n2-time">3 giờ trước</div>
                            </div>
                        </div>
                        <div className="n-right">

                        </div>
                    </div>       
                </div>


            </div>
        </div>
    )
}

export default Notify;