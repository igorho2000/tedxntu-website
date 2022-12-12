import React from "react";

export default function TypeTag({ type }) {
  function getContent() {
    switch (type) {
      case "tedx":
        return (
          <p>
            <span class="material-icons">mic_external_on</span>&nbsp;年會 TEDx
            Event
          </p>
        );
      case "expo":
        return (
          <p>
            <span class="material-icons">museum</span>&nbsp;年展 Exhibition
          </p>
        );
      case "workshop":
        return (
          <p>
            <span class="material-icons">school</span>&nbsp;工作坊 Workshop
          </p>
        );
      case "salon":
        return (
          <p>
            <span class="material-icons">question_answer</span>
            &nbsp;沙龍 Salon
          </p>
        );
      case "pre":
        return (
          <p>
            <span class="material-icons">campaign</span>
            &nbsp;會前活動 Pre-TEDx Event
          </p>
        );
      case "other":
        return (
          <p>
            <span class="material-icons">event</span>&nbsp;其他活動 Other Event
          </p>
        );
      default:
        return (
          <p>
            <span class="material-icons">event</span>&nbsp;其他活動 Other Event
          </p>
        );
    }
  }
  const content = getContent();
  return <div className="typetag">{content}</div>;
}
