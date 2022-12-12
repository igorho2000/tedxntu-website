import React from "react";
import "../pages/Event.css";
import TypeTag from "./TypeTag";

export default function EventGridStatic({ title, content }) {
  const output = content.map((event) => (
    <div
      className="event-grid-item"
      style={{ boxShadow: "none", backgroundColor: "white" }}
    >
      <TypeTag type={event.type} />
      <h3>{event.name}</h3>
      <img src={`../event/${event.square}`} alt={event.name} />
      <p>{event.tag}</p>
    </div>
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
