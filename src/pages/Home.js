import React, { useState } from "react";
import "./Home.css";
import { transcribeCount, countdown } from "../components/countdown";
import LinkTr from "../components/LinkTr";

export default function Home() {
  const [count, setCount] = useState({
    main: [0, 0, 0, 0],
    other: [0, 0, 0, 0],
  });

  React.useEffect(() => {
    var x = setInterval(() => {
      const array = countdown("Nov 30, 2022 15:37:25");
      setCount((state) => ({
        ...state,
        main: array,
      }));
      console.log("i");
      if (array === null) {
        clearInterval(x);
      }
    }, 1000);
  }, []);

  return (
    <div>
      <div
        className="home-banner"
        style={{
          height: "800px",
          width: "100%",
          overflow: "clip",
          backgroundImage: 'url("../home/banner.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="home-event">
        <LinkTr className="home-event-card" path="/event/exhibition-7th">
          <img src="./home/main.png" alt="main event" />
          <div className="home-event-info">
            <h2>檔期主打活動</h2>
            <h3>年展：吾敘 Störung</h3>
            <p style={{ textAlign: "center" }}>11/30/2022 - 12/3/2022</p>
            <h4>
              {count.main === null
                ? "活動已過，敬請期待下次"
                : transcribeCount(count.main)}
            </h4>
          </div>
        </LinkTr>
        <LinkTr className="home-event-card">
          <img src="./home/await.jpg" alt="await event" />
          <div className="home-event-info">
            <h2>近期活動</h2>
            <h3 style={{ color: "#8f0018", marginBottom: "1rem" }}>敬請期待</h3>
          </div>
        </LinkTr>
      </div>
      <div className="home-nav">
        <div className="home-nav-item" style={{ backgroundColor: "#84d3d3" }}>
          <LinkTr className="home-nav-info" path="/about">
            <span class="material-icons">diversity_1</span>
            <p>來認識我們的</p>
            <h3>熱血團隊</h3>
          </LinkTr>
          <img src="../home/team.jpg" alt="tedx team" />
          <div className="home-nav-arrow"></div>
        </div>
        <div className="home-nav-item" style={{ backgroundColor: "#2c8484" }}>
          <img src="../home/expo.jpg" alt="tedx exhibition" />
          <LinkTr className="home-nav-info" path="/event/exhibition-7th">
            <span class="material-icons">museum</span>
            <p>沉浸於我們的</p>
            <h3>精緻年展</h3>
          </LinkTr>
          <div className="home-nav-arrow"></div>
        </div>
        <div className="home-nav-item" style={{ backgroundColor: "#940c04" }}>
          <LinkTr className="home-nav-info" path="/event/tedx-6th">
            <span class="material-icons">mic_external_on</span>
            <p>邀請您來參與</p>
            <h3>精彩年會</h3>
          </LinkTr>
          <img src="../home/tedxntu.jpg" alt="tedxntu" />
          <div className="home-nav-arrow"></div>
        </div>
        <div className="home-nav-item" style={{ backgroundColor: "#f38556" }}>
          <img src="../home/speaker.jpg" alt="more videos" />
          <a
            className="home-nav-info"
            href="https://www.youtube.com/channel/UCnGHTt5PZOmUTJCPvWAS-GQ"
            target="_blank"
            rel="noreferrer"
          >
            <span class="material-icons">ondemand_video</span>
            <p>一同探索更多</p>
            <h3>優質演講</h3>
          </a>
          <div className="home-nav-arrow"></div>
        </div>
      </div>
    </div>
  );
}
