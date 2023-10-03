import React, { useState } from "react";
import { Search, Menu, VideoCall, Apps, Notifications, AccountCircle } from "@material-ui/icons";
import "./SearchBar.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý logic tìm kiếm ở đây
    alert(`Bạn đã tìm kiếm: ${searchTerm}`);
  };

  return (
    <div className="search-bar">
      <div className="search-bar-left">
        <Menu className="search-bar-icon" />
        <img
          className="search-bar-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube Logo"
        />
      </div>
      <div className="search-bar-center">
        <form className="search-bar-form" onSubmit={handleSubmit}>
          <input
            className="search-bar-input"
            type="text"
            placeholder="Tìm kiếm"
            value={searchTerm}
            onChange={handleChange}
          />
          <button className="search-bar-button" type="submit">
            <Search className="search-bar-icon" />
          </button>
        </form>
      </div>
      <div className="search-bar-right">
        <VideoCall className="search-bar-icon" />
        <Apps className="search-bar-icon" />
        <Notifications className="search-bar-icon" />
        <AccountCircle className="search-bar-icon" />
      </div>
    </div>
  );
}

export default SearchBar;