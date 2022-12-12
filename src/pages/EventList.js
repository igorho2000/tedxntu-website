import React from "react";
import "./Event.css";
import PageArea from "../components/PageArea";
import EventGrid from "../components/EventGrid";
import EventGridStatic from "../components/EventGridStatic";
import { one, two, three, four, five, six, seven } from "../content/events";

export default function EventList() {
  return (
    <PageArea>
      <h1>活動列表</h1>
      <EventGrid title="第七屆 (2022 - 2023)" content={seven} />
      <EventGrid title="第六屆 (2021 - 2022)" content={six} />
      <EventGridStatic title="第五屆 (2020 - 2021)" content={five} />
      <EventGridStatic title="第四屆 (2019 - 2020)" content={four} />
      <EventGridStatic title="第三屆 (2018 - 2019)" content={three} />
      <EventGridStatic title="第二屆 (2017 - 2018)" content={two} />
      <EventGridStatic title="第一屆 (2016 - 2017)" content={one} />
    </PageArea>
  );
}
