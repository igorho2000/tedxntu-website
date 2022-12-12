import React from "react";

export default function PageSponsor({ sponsorlist }) {
  const output = sponsorlist.map((sponsor) => (
    <div>
      <img src={`../event/sponsors/${sponsor}.png`} alt={sponsor} />
      <p>{sponsor}</p>
    </div>
  ));
  return <div className="sponsorlist">{output}</div>;
}
