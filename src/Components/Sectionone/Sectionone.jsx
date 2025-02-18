import React from "react";
import "../Sectionone/Sectionone.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

export const Sectionone = () => {
  const [first, setfirst] = useState(100);
  var path = `M 0 100 Q 500 ${first} 990 100`;
  var finalpath = `M 0 100 Q 500 100 990 100`;
    // console.log(path)

  useGSAP(() => {
    gsap.to("svg path", {
      attr : {d: path}
        });
  },{scope : ".curve"});

  return (
    <div className="Sectionone">
      <div className="section">
        <div className="nums">
          <h2>276,544</h2>
          <h2>units</h2>
          <h5>
            virgin plastic packaging replaced with low impact alternatives
          </h5>
          <span>in 2022 & 2023</span>
        </div>
        <div className="nums">
          <h2>1,103</h2>
          <h2>lbs</h2>
          <h5>feedstock diverted from landfill</h5>
          <span>in 2022 & 2023</span>
        </div>
        <div className="nums">
          <h2>2,874.5</h2>
          <h2>tons</h2>
          <h5>CO2 offset</h5>
          <span>in 2022 & 2023</span>
        </div>
      </div>
      <div className="curve">
        <svg
          onMouseMove={(e) => {
            // console.log(e.clientY)
            setfirst(e.clientY);
          }}
          width="1000"
          height="180"
        >
          <path
            d="M 0 100 Q 500 100 990 100"
            stroke="#344C45"
            fill="transparent"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>
  );
};
