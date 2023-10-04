import React from "react";
import "../../styles/header.scss";
import search_top from "../../assets/images/header/search_top.png"

const SearchBar = () => {
    return(
        <div className="searchbar">
            <div className="searchbar-wrapper">
                <div className="search-top">Top xu hướng</div>
                <div className="search-t1">
                    <div className="search-t2">
                        <img className="s-top-icon" alt="" src={search_top}/>
                        Thùy Chi
                    </div>
                </div>
                <div className="search-t1">
                    <div className="search-t2">
                        <img className="s-top-icon" alt="" src={search_top}/>
                        Khánh Huyền 2k4
                    </div>
                </div>
                <div className="search-t1">
                    <div className="search-t2">
                        <img className="s-top-icon" alt="" src={search_top}/>
                        Cô gái Ukraine Xinh đẹp
                    </div>
                </div>
                <div className="search-t1">
                    <div className="search-t2">
                        <img className="s-top-icon" alt="" src={search_top}/>
                        Mixi
                    </div>
                </div>
                <div className="search-t1">
                    <div className="search-t2">
                        <img className="s-top-icon" alt="" src={search_top}/>
                        Diễn viên nữ đẹp nhất thế giới
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;