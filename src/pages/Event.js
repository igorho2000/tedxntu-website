import React from "react";
import PageArea from "../components/PageArea";
import PageBanner from "../components/PageBanner";
import TypeTag from "../components/TypeTag";
import "./Event.css";
import PageTextSection from "../components/PageTextSection";
import PageGuest from "../components/PageGuest";

export default function Event() {
  return (
    <PageArea>
      <div>
        <TypeTag type="tedx" />
        <h1>理想麻醉 Dream Paralysis</h1>
      </div>
      <div className="event">
        <PageBanner src="../event/6th-tedx-banner.jpg" />
        <div className="event-info"></div>
        <div>
          <PageTextSection title="活動概述">
            <p>
              麻醉就像一場霧，霧中的我們不斷掙扎於現實與理想間，痛並快樂著。
            </p>
            <br />
            <p>
              我終於走進由華燈交織、五光十色的大城，像是來到了全新的世界。夜晚的降臨不但沒有帶來黑暗和恐懼，而是使其更加絢爛，令人心醉神搖。
            </p>
            <br />
            <p>
              迷離的燈火中，每一扇門的後面似乎都藏著新奇的事物，等著我去發現、去探索，然而在這些華麗的大門之前，卻又透著令人緊張的氣氛。
              門邊街上的遊人來來去去，有的躊躇滿志、有的垂頭喪氣、還有的不停的在門前徘徊，人人心中都懷著期待和不安。
              門前的人們看起來是如此渺小，似乎被這氣勢萬鈞的城市壓得喘不過氣來。
            </p>
            <br />
            <p>
              大街上，看著街邊的櫥窗擺滿了美所設計而成的物件，人們來去、偶而駐足賞之，好似城市裡每個人無時不刻被評論的象徵；路口處，巨型
              LED燈板上輪番播放著外交和政治新聞，穿插著商業所構築對未來的美好想像，是城市的脈搏，每閃一下都牽動著人的命運和心情；廣場上的歌手吟唱著自己的過往傷痛和迎向未來的勇氣，溫暖的歌聲治癒著人們；走到馬路邊，車子呼嘯而過，紅綠燈和感應式的街燈隨著煞車聲亮起，為黑暗的街道亮起了一盞盞明燈。
            </p>
            <br />
            <p>
              嘈雜而燦爛的世界，我們像身在由華燈構成的霧中，陷落於理想卻又像魚般被迫拉扯回現實，掙扎自我認同時牽動傷口鮮血淋漓卻又麻痺於理想，痛並快樂著。
            </p>
            <br />
          </PageTextSection>
          <PageTextSection title="活動資訊">
            <p>時間 | 5/15 (日) 13:00 - 16:00 (12:30 寄送連結)</p>
            <p>地點 | 台灣大學社會科學院 梁國樹國際會議廳</p>
          </PageTextSection>
          <PageTextSection title="講者來賓">
            <PageGuest
              guestlist={[
                "張倞菱",
                "陳昱築",
                "王淳",
                "黃暐程",
                "劉致昕",
                "潘瑋翔",
              ]}
            />
          </PageTextSection>
        </div>
      </div>
    </PageArea>
  );
}
