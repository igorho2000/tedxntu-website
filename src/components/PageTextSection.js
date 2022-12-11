import React from "react";

export default function PageTextSection({ children, title }) {
  return (
    <div>
      <h2>{title}</h2>
      <br />
      <div>{children}</div>
      <br />
    </div>
  );
}
