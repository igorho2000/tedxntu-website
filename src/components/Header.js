import React, { useState } from "react";
import "./Header.css";
import LinkTr from "./LinkTr";

export default function Header() {
  const [subNav, setSubNav] = useState(0);
  function handleNavClick(number) {
    setSubNav(number);
  }
  const [show, setShow] = useState(false);
  function toggleShow() {
    setShow((state) => (state ? false : true));
  }
  function hide() {
    setShow(false);
  }

  return (
    <div className="header">
      <LinkTr path="/">
        <img className="header-logo" src="../nav/TEDx.png" alt="TEDx Logo" />
      </LinkTr>
      <div className="header-burger" onClick={toggleShow}>
        <span
          style={{
            animation: show
              ? "first-burger 0.5s linear 0s forwards"
              : "first-burger-out 0.5s linear 0s forwards",
          }}
        ></span>
        <span
          style={{
            animation: show
              ? "disappear 0.1s linear 0.2s forwards"
              : "appear 0.1s linear 0.2s forwards",
          }}
        ></span>
        <span
          style={{
            animation: show
              ? "third-burger 0.5s linear 0s forwards"
              : "third-burger-out 0.5s linear 0s forwards",
          }}
        ></span>
      </div>
      <ul className="header-nav" style={{ display: show && "flex" }}>
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
            <div className="header-nav-sub" onClick={hide}>
              <LinkTr path="/hello">
                <h5>社團介紹</h5>
                <p>Our Club</p>
              </LinkTr>
              <LinkTr>
                <h5>團隊</h5>
                <p>Team</p>
              </LinkTr>
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
            <div className="header-nav-sub" onClick={hide}>
              <LinkTr>
                <h5>年展</h5>
                <p>Expo</p>
              </LinkTr>
              <LinkTr path="/event/tedx-6th">
                <h5>年會</h5>
                <p>TEDx</p>
              </LinkTr>
              <LinkTr>
                <h5>列表</h5>
                <p>All Events</p>
              </LinkTr>
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
            <div className="header-nav-sub" onClick={hide}>
              <LinkTr>
                <h5>部落格</h5>
                <p>Blog</p>
              </LinkTr>
              <LinkTr>
                <h5>過往演講</h5>
                <p>Speeches</p>
              </LinkTr>
            </div>
          )}
        </li>
        <li className="header-nav-item">
          <div onClick={hide}>
            <LinkTr className="header-nav-main" style={{ transform: "none" }}>
              <h4>合作夥伴</h4>
              <p>PARTNERS</p>
            </LinkTr>
          </div>
        </li>
      </ul>
    </div>
  );
}
