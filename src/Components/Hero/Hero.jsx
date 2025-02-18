import React from "react";
import "./Hero.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Hero = () => {
    useGSAP(()=>{
        gsap.from('.left-hero ',{
            x:-100,
            opacity:0,
            duration:.6,
            delay:.6
        })
        gsap.from('.right-hero ',{
            x:200,
            opacity:0,
            duration:.6,
            delay:.6
        })
    })
  return (
    <div className="hero">
      <div className="left-hero">
        <h1>Our collective of brands celebrate the beauty</h1>
      </div>
      <div className="right-hero">
        <h1>of long-loved objects.</h1>
        <div className="right-btns">
          <div className="leftbt">
            <span>Explore our brand</span>
          </div>
          <div className="rightbt">
            <span>Join our collective</span>
          </div>
        </div>
      </div>
    </div>
  );
};
