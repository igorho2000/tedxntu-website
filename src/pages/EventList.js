import React from "react";
import "./Event.css";
import PageArea from "../components/PageArea";
import EventGrid from "../components/EventGrid";
import { six, seven } from "../content/events";

export default function EventList() {
  return (
    <PageArea>
      <h1>活動列表</h1>
      <EventGrid title="第七屆 (2022 - 2023)" content={seven} />
      <EventGrid title="第六屆 (2021 - 2022)" content={six} />
    </PageArea>
  );
}
