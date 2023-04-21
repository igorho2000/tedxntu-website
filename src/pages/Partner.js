import React from "react";
import PageArea from "../components/PageArea";
import PageSponsor from "../components/PageSponsor";
import PageTextSection from "../components/PageTextSection";

export default function Partner() {
  return (
    <PageArea>
      <h1>合作夥伴</h1>
      <br />
      <PageTextSection title="贊助廠商">
        <PageSponsor
          sponsorlist={[
            "好時有影 Golden Years",
            "波波諾諾 bobonono",
            "華南銀行",
            "馳綠 22 製夢所",
            "璣園 Don Du Ciel",
            "禮心手製蛋捲",
            "FUcoi 藻安美肌",
            "HAO CAFFE",
            "Skyline Film 屋頂電影院",
            // "Let's Design 來做設計",
            // "米樂繽紛爆米花",
            // "經典數位印刷",
            // "順易利口罩",
          ]}
        ></PageSponsor>
      </PageTextSection>
      <PageTextSection title="網站製作">
        <div className="sponsorlist">
          <a
            href="https://www.projectonepremium.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`../event/sponsors/Project One Premium.png`}
              alt="Project One Premium"
            />
            <p>Project One Premium</p>
          </a>
          <a href="https://www.prontomock.com" target="_blank" rel="noreferrer">
            <img src={`../event/sponsors/ProntoMock.png`} alt="ProntoMock" />
            <p>ProntoMock</p>
          </a>
        </div>
      </PageTextSection>
    </PageArea>
  );
}
