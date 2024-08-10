import React from "react";

export default function LegacyCard({ image, number, desc }) {
  return (
    <div>
      <img src={image} alt="" />
      <h3>{number}</h3>
      <p>{desc}</p>
    </div>
  );
}
