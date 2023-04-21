import React from "react";
import PageArea from "../components/PageArea";
import PageTextSection from "../components/PageTextSection";
import { president, directors } from "../content/team";
import "../App.css";

export default function Team() {
  const presidentOutput = president.map((person) => (
    <div className="team-member">
      <img src={`../team/${person[1]}.jpg`} alt={person[1]} />
      <h3>{person[0]}</h3>
      <p>{person[1]}</p>
    </div>
  ));
  const directorOutput = directors.map((person) => (
    <div className="team-member">
      <img src={`../team/${person[1]}.jpg`} alt={person[1]} />
      <h3>{person[0]}</h3>
      <p>{person[1]}</p>
    </div>
  ));
  return (
    <PageArea>
      <h1>團隊</h1>
      <br />
      <PageTextSection title="召部">
        <div className="team">{presidentOutput}</div>
        <p className="team-phototext">
          攝影：
          <a
            href="https://www.goldenyearsphoto.com/"
            target="_blank"
            rel="noreferrer"
          >
            好時有影 Golden Years Studio
          </a>
        </p>
      </PageTextSection>
      <PageTextSection title="各部門">
        <div className="team">{directorOutput}</div>
        <p className="team-phototext">
          攝影：
          <a
            href="https://www.goldenyearsphoto.com/"
            target="_blank"
            rel="noreferrer"
          >
            好時有影 Golden Years Studio
          </a>
        </p>
      </PageTextSection>
      <PageTextSection title="顧問">
        <div className="team">
          <div className="team-member">
            <img src="../team/何紹宇 Igor.jpg" alt="何紹宇 Igor" />
            <h3>網站維護</h3>
            <p>何紹宇 Igor</p>
          </div>
        </div>
      </PageTextSection>
    </PageArea>
  );
}
