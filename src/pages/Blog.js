import React from "react";
import PageArea from "../components/PageArea";
import LinkTr from "../components/LinkTr";
import TypeTag from "../components/TypeTag";
import { blog } from "../content/blog";
import "../pages/Event.css";

export default function Blog() {
  return (
    <PageArea>
      <h1>部落格</h1>
      <br />
      <div className="event-grid-content">
        <LinkTr path={`/event/1`} className="event-grid-item blog-item">
          <TypeTag type="expo" />
          <h3>厲害專欄</h3>
          <img src={`../event/6th-expo-square.jpg`} alt={"hi"} />
          <p>好厲害</p>
        </LinkTr>
      </div>
    </PageArea>
  );
}
