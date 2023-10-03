import React from "react";
import "../../styles/sidebar.scss";
import s1 from "../../assets/images/sidebar/s1.png"
import s2 from "../../assets/images/sidebar/s2.png"
import s3 from "../../assets/images/sidebar/s3.png"
import s4 from "../../assets/images/sidebar/s4.png"
import k_1 from "../../assets/images/sidebar/k_1.png"
import kdk_1 from "../../assets/images/sidebar/kdk_1.png"
import kdk_2 from "../../assets/images/sidebar/kdk_2.png"
import kdk_3 from "../../assets/images/sidebar/kdk_3.png"
import kdk_4 from "../../assets/images/sidebar/kdk_4.png"
import kdk_5 from "../../assets/images/sidebar/kdk_5.png"
import dv_1 from "../../assets/images/sidebar/dv_1.png"
import dv_2 from "../../assets/images/sidebar/dv_2.png"
import dv_3 from "../../assets/images/sidebar/dv_3.png"
import dv_4 from "../../assets/images/sidebar/dv_4.png"
import dv_5 from "../../assets/images/sidebar/dv_5.png"
import dv_6 from "../../assets/images/sidebar/dv_6.png"
import st_1 from "../../assets/images/sidebar/st_1.png"
import st_2 from "../../assets/images/sidebar/st_2.png"
import copyright from "../../assets/images/sidebar/copyright.png"
import facebook from "../../assets/images/sidebar/facebook.png"
import messenger from "../../assets/images/sidebar/messenger.png"
import gg_app from "../../assets/images/sidebar/gg_app.png"

const SidebarMore = () => {
    return(
        <div className="sidebar-more">
            <a href="/">
                <div className="sv-more pick">
                    <img className="s1" alt="" src={s1} />
                    <div className="sidebar-more-text">Dành cho bạn</div>
                </div>
            </a>
            <a href="/dtd">
                <div className="sv-more">
                    <img className="s1" alt="" src={s2} />
                    <div className="sidebar-more-text">Đang theo dõi</div>
                </div>
            </a>
            <a href="/tt">
                <div className="sv-more">
                    <img className="s1" alt="" src={s3} />
                    <div className="sidebar-more-text">Trực tiếp</div>
                </div>
            </a>
            <a href="/yt">
                <div className="sv-more">
                    <img className="s1" alt="" src={s4} />
                    <div className="sidebar-more-text">Yêu thích</div>
                </div>
            </a>

            <div className="line"/>

            <div className="kds">
                <p>Kênh đề xuất</p>
                <div className="k-group">
                    <div className="k1">
                        <img className="k-img" alt="" src={k_1} />
                        <div className="k-d">
                            finDmusic
                            <p className="k-d-follow">24K theo dõi</p>
                        </div>
                    </div>
                    <div className="k1">
                        <img className="k-img" alt="" src={k_1} />
                        <div className="k-d">
                            finDmusic
                            <p className="k-d-follow">24K theo dõi</p>
                        </div>
                    </div>
                    <div className="k1">
                        <img className="k-img" alt="" src={k_1} />
                        <div className="k-d">
                            finDmusic
                            <p className="k-d-follow">24K theo dõi</p>
                        </div>
                    </div>
                    <div className="k1">
                        <img className="k-img" alt="" src={k_1} />
                        <div className="k-d">
                            finDmusic
                            <p className="k-d-follow">24K theo dõi</p>
                        </div>
                    </div>
                    <div className="k1">
                        <img className="k-img" alt="" src={k_1} />
                        <div className="k-d">
                            finDmusic
                            <p className="k-d-follow">24K theo dõi</p>
                        </div>
                    </div>
                </div>
                <div className="all">Xem tất cả</div>
            </div>

            <div className="line"/>

            <div className="kds">
                <p>Kênh đăng ký</p>
                <div className="k-group">
                    <div className="k1">
                        <img className="k-img" alt="" src={kdk_1} />
                        <div className="k-d">snooppiofficial</div>
                    </div>
                    <div className="k1">
                        <img className="k-img" alt="" src={kdk_2} />
                        <div className="k-d">VPOPPlus</div>
                    </div>
                    <div className="k1">
                        <img className="k-img" alt="" src={kdk_3} />
                        <div className="k-d">poolcoach</div>
                    </div>
                    <div className="k1">
                        <img className="k-img" alt="" src={kdk_4} />
                        <div className="k-d">theanh28</div>
                    </div>
                    <div className="k1">
                        <img className="k-img" alt="" src={kdk_5} />
                        <div className="k-d">MrYang</div>
                    </div>
                </div>
                <div className="all">Xem tất cả</div>
            </div>

            <div className="line"/>

            <div className="kds">
                <p>Khám phá</p>
                <div className="k-group">
                    <div className="k1">
                        <div className="kp"># suthatla</div>
                    </div>
                    <div className="k1">
                        <div className="kp"># mackedoi</div>
                    </div>
                    <div className="k1">
                        <div className="kp"># sansangthaydoi</div>
                    </div>
                    <div className="k1">
                        <div className="kp"># genzlife</div>
                    </div>
                    <div className="k1">
                        <div className="kp"># 7749hieuung</div>
                    </div>
                </div>
            </div>

            <div className="line"/>

            <div className="kds">
                <p>Dịch vụ khác của Mobion</p>
                <div className="k-group">
                    <div className="k1">
                        <img className="k-img" alt="" src={dv_1} />
                        <div className="k-d">TV Show</div>
                    </div>
                    <div className="k1">
                        <img className="k-img" alt="" src={dv_2} />
                        <div className="k-d">Phim</div>
                    </div>
                    <div className="k1">
                        <img className="k-img" alt="" src={dv_3} />
                        <div className="k-d">Nhạc</div>
                    </div>
                    <div className="k1">
                        <img className="k-img" alt="" src={dv_4} />
                        <div className="k-d">eSports</div>
                    </div>
                    <div className="k1">
                        <img className="k-img" alt="" src={dv_5} />
                        <div className="k-d">Kids</div>
                    </div>
                    <div className="k1">
                        <img className="k-img" alt="" src={dv_6} />
                        <div className="k-d">Thể thao</div>
                    </div>
                </div>
            </div>

            <div className="line"/>

            <div className="kds">
                <div className="k-group">
                    <div className="k1">
                        <img className="k-img" alt="" src={st_1} />
                        <div className="k-d">Trợ giúp</div>
                    </div>
                    <div className="k1">
                        <img className="k-img" alt="" src={st_2} />
                        <div className="k-d">Gửi ý kiến phản hồi</div>
                    </div>
                </div>
            </div>
         
            <div className="line"/>

            <div className="kds">
                <p className="bq-color">Bản quyền thuộc</p>
                <div className="k-group">
                    <img alt="" src={copyright} />
                    <div className="copyright-text">
                        <p className="bq-color"><strong>Cơ quan chủ quản:</strong> Trung tâm Dịch vụ Số MobiFone - Chi nhánh Tổng Công ty Viễn thông MobiFone.</p>
                        <p className="bq-color"><strong>Điện thoại:</strong> 1800 1090</p>
                        <p className="bq-color"><strong>Email:</strong> mobion-cskh@mobifone.vn</p>
                        <p className="bq-color">
                            <strong>Kênh theo dõi</strong>
                            <img className="copy-icon" alt="" src={facebook} />
                            <img className="copy-icon" alt="" src={messenger} />
                        </p>
                    </div>
                </div>
            </div>

            <div className="line"/>

            <div className="kds">
                <img className="gg_app_img" alt="" src={gg_app} />
            </div>
        </div>
    )
}

export default SidebarMore;