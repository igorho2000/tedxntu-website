import React from "react";
import "../pages/Event.css";
import LinkTr from "./LinkTr";
import TypeTag from "./TypeTag";

export default function EventGrid({ title, content }) {
  const output = content.map((event) => (
    <LinkTr path={event.path} className="event-grid-item">
      <TypeTag type={event.basic.type} />
      <h3>{event.basic.name}</h3>
      <img src={`../event/${event.basic.square}`} alt={event.basic.type} />
      <p>{event.basic.tag}</p>
    </LinkTr>
  ));

  return (
    <div className="event-grid">
      <div className="event-grid-timeline">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="event-grid-title">
        <h2>{title}</h2>
      </div>
      <div className="event-grid-content">{output}</div>
    </div>
  );
}
