import React from "react";

export default function PageGuest({ guestlist }) {
  const output = guestlist.map((guest) => (
    <div>
      <img src={`../event/speakers/${guest}.jpg`} alt={guest} />
      <p>{guest}</p>
    </div>
  ));
  return <div className="guestlist">{output}</div>;
}
