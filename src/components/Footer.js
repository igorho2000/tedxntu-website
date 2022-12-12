import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <img
        src="../nav/decoration.png"
        alt=""
        style={{ height: "2rem", alignSelf: "baseline" }}
      />
      <div className="footer-main">
        <div className="footer-contact">
          <div className="footer-info">
            <h5>聯絡我們</h5>

            <a
              href="mailto:ntutedsharing@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <span className="material-icons">email</span>
              &nbsp;ntutedsharing@gmail.com
            </a>
            <p className="flex">
              <span className="material-icons">place</span>10617
              臺北市羅斯福路四段一號
            </p>
          </div>
          <div className="footer-social">
            <a
              href="https://www.facebook.com/TEDxNTUtw/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="../nav/facebook.svg" alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/tedxnationaltaiwanuniversity/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="../nav/instagram.svg" alt="instagram" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCnGHTt5PZOmUTJCPvWAS-GQ"
              target="_blank"
              rel="noreferrer"
            >
              <img src="../nav/youtube.svg" alt="youtube" />
            </a>
            <a
              href="https://tedxntu.medium.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="../nav/medium.svg" alt="medium" />
            </a>
          </div>
        </div>
        <div className="footer-credits">
          <p>&#169; TEDxNationalTaiwanUniversity 2023</p>
          <a
            href="https://www.projectonepremium.com"
            target="_blank"
            rel="noreferrer"
          >
            Designed and Created by Igor Ho
          </a>
        </div>
      </div>
    </div>
  );
}
