import React from "react";
import "../Locoeffect/Loco.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/ScrollTrigger'

export const Loco = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger) 
  useGSAP(() => {
    gsap.to(".one",{
        transform: "translate(140%)",
        scrollTrigger:{
            trigger:".main",
            scroller:"body",
            transform:"rotate(18deg)",
            start:"top 0%",
            end:"top -100%",
            scrub:2
        }
    })
    gsap.from(".two",{
        transform: "translate(80%)",
        scrollTrigger:{
            trigger:".main",
            scroller:"body",
            start:"top 0%",
            end:"top -100%",
            scrub:2
        }
    })
    gsap.to(".three",{
        transform: "translate(80%)",
        scrollTrigger:{
            trigger:".main",
            scroller:"body",
            transform:"rotate(-15deg)",
            start:"top 0%",
            end:"top -100%",
            scrub:2
        }
    })
    gsap.to(".four",{
        transform: "translate(120%)",
        scrollTrigger:{
            trigger:".main",
            scroller:"body",
            transform:"rotate(-11deg)",
            start:"top 0%",
            end:"top -100%",
            scrub:2
        }
    })
    gsap.from(".five",{
        transform: "translate(140%)",
        scrollTrigger:{
            trigger:".main",
            scroller:"body",
            transform:"rotate(-20deg)",
            start:"top 0%",
            end:"top -100%",
            scrub:2
        }
    })
  });

  return (
    <div className="main">
      <div className="scroller one">
        <h2>Gsap Animations</h2>
      </div>
      <div className="scroller two">
        <h2>Abhinav Rana</h2>
      </div>
      <div className="scroller three">
        <h2>Scroll This Way</h2>
      </div>
      <div className="scroller four">
        <h2>Collective Impact</h2>
      </div>
      <div className="scroller five">
        <h2>Ok, enough!!!!</h2>
      </div>
    </div>
  );
};
