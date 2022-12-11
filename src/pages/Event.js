import React, { useState } from "react";
import PageArea from "../components/PageArea";
import PageBanner from "../components/PageBanner";
import TypeTag from "../components/TypeTag";
import "./Event.css";
import PageTextSection from "../components/PageTextSection";
import PageGuest from "../components/PageGuest";
import { countdown, transcribeCount } from "../components/countdown";
import PageSponsor from "../components/PageSponsor";

export default function Event({ content }) {
  const [count, setCount] = useState([0, 0, 0, 0]);

  React.useEffect(() => {
    var x = setInterval(() => {
      const array = countdown(content.basic.startDate);
      setCount(array);
      console.log("i");
      if (array === null) {
        clearInterval(x);
      }
    }, 1000);
  }, []);

  return (
    <PageArea>
      <div>
        <TypeTag type={content.basic.type} />
        <h1>{content.basic.name}</h1>
      </div>
      <div className="event">
        <PageBanner src={`../event/${content.basic.banner}`} />
        <div className="event-info">
          <h3>活動資訊總覽</h3>
          <h4>活動日期</h4>
          <p>{content.basic.dateRange}</p>
          <h4>活動時間</h4>
          <p>{content.basic.time}</p>
          <h4>活動地點</h4>
          <p>{content.basic.location}</p>
          <h5>
            {count === null
              ? "活動已過，敬請期待下一場"
              : transcribeCount(count)}
          </h5>
          {count !== null && content.basic.button !== null && (
            <button>
              <a
                href={content.basic.button[1]}
                target="_blank"
                rel="noreferrer"
              >
                {content.basic.button[0]}
              </a>
            </button>
          )}
        </div>
        <div>
          <PageTextSection title="活動概述">
            {content.description.map((item) => (
              <>
                <p>{item}</p>
                <br />
              </>
            ))}
          </PageTextSection>
          <PageTextSection title="活動資訊">
            {content.info.map((item) => (
              <p>{item}</p>
            ))}
          </PageTextSection>
          {content.guestlist !== null && (
            <PageTextSection title="講者來賓">
              <PageGuest guestlist={content.guestlist} />
            </PageTextSection>
          )}
          {content.sponsorlist !== null && (
            <PageTextSection title="贊助商">
              <PageSponsor sponsorlist={content.sponsorlist} />
            </PageTextSection>
          )}
        </div>
      </div>
    </PageArea>
  );
}
