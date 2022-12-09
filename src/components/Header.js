import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header({ current }) {
  const [subNav, setSubNav] = useState(0);
  function handleNavClick(number) {
    setSubNav(number);
  }

  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src="../nav/TEDx.png" alt="TEDx Logo" />
      </Link>
      <ul className="header-nav">
        <li
          className="header-nav-item"
          onMouseEnter={() => handleNavClick(1)}
          onMouseLeave={() => handleNavClick(0)}
        >
          <div className="header-nav-main">
            <h4>關於我們</h4>
            <p>ABOUT US</p>
          </div>
          {subNav === 1 && (
            <div className="header-nav-sub">
              <Link to="/hello">
                <h5>社團介紹</h5>
                <p>Our Club</p>
              </Link>
              <Link>
                <h5>團隊</h5>
                <p>Team</p>
              </Link>
            </div>
          )}
        </li>
        <li
          className="header-nav-item"
          onMouseEnter={() => handleNavClick(2)}
          onMouseLeave={() => handleNavClick(0)}
        >
          <div className="header-nav-main">
            <h4>本屆活動</h4>
            <p>EVENTS</p>
          </div>
          {subNav === 2 && (
            <div className="header-nav-sub">
              <Link>
                <h5>年展</h5>
                <p>Expo</p>
              </Link>
              <Link>
                <h5>年會</h5>
                <p>TEDx</p>
              </Link>
              <Link>
                <h5>其他</h5>
                <p>Other</p>
              </Link>
            </div>
          )}
        </li>
        <li
          className="header-nav-item"
          onMouseEnter={() => handleNavClick(3)}
          onMouseLeave={() => handleNavClick(0)}
        >
          <div className="header-nav-main">
            <h4>文章演講</h4>
            <p>ARTICLES</p>
          </div>
          {subNav === 3 && (
            <div className="header-nav-sub">
              <Link>
                <h5>部落格</h5>
                <p>Blog</p>
              </Link>
              <Link>
                <h5>過往演講</h5>
                <p>Speeches</p>
              </Link>
            </div>
          )}
        </li>
        <li className="header-nav-item">
          <Link className="header-nav-main" style={{ transform: "none" }}>
            <h4>合作夥伴</h4>
            <p>PARTNERS</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
