import React from "react";
import "../Sectiontwo/Sectiontwo.css";

export const Sectiontwo = () => {
  return (
    <div className="sectiontwo">
      <h3>What our brands are doing</h3>
      <div className="upsect1">
        <img
          src="https://cdn.prod.website-files.com/66e47aafc62e371ae0317493/66e47aafc62e371ae031759d_EasyKnit2-p-1080.webp"
          alt=""
        />
        <div className="ding">
          <h6>Intentional Production</h6>
          <h4>Seamless knitting</h4>
          <p>
            Minimizing waste and reducing our impact on the planet through
            precise knit-to-shape technology.
          </p>
          <span>Shop Rachel </span>
        </div>
      </div>
      <div className="upsect2">
        <div className="sect2">
          <img
            src="https://cdn.prod.website-files.com/66e47aafc62e371ae0317493/66e47aafc62e371ae0317505_Subtract-p-1080.webp"
            alt=""
          />
          <div className="ping">
            <h6>Positive Impact</h6>
            <h4>Replacement Lenses</h4>
            <p>
              By extending the lifespan of eyewear, we reduce waste, conserve
              resources, and save you money.
            </p>
            <span>Shop Revant </span>
          </div>
        </div>
        <div className="sect2">
          <img
            src="https://cdn.prod.website-files.com/66e47aafc62e371ae0317493/66e47aafc62e371ae031757c_Subtract-p-1080.webp"
            alt=""
          />
          <div className="ping">
            <h6>Long-lasting products</h6>
            <h4>Durable local materials</h4>
            <p>
              Proudly sourced and made in Canada, supporting local economies and
              ensuring the highest quality standards.
            </p>
            <span>Shop Ergonofis </span>
          </div>

        </div>
        
      </div>
      <span className="lsttag">Get to know our brands</span>
    </div>
  );
};
