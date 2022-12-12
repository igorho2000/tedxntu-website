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
            "Let's Design 來做設計",
            "米樂繽紛爆米花",
            "經典數位印刷",
            "順易利口罩",
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
