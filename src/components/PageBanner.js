import React from "react";

export default function PageBanner({ src }) {
  return (
    <img
      src={src}
      className="pagebanner"
      style={{ width: "100%" }}
      alt="banner"
    />
  );
}
