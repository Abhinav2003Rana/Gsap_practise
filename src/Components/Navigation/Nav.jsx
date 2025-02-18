import React from 'react'
import './Nav.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

export const Nav = () => {
  var tl = gsap.timeline()
  useGSAP(
    () => {
      tl.to(".side-bar",{
        top:0,
        opacity:1,
        duration:1,
      })
      tl.from(".leftdiv h4",{
        x:-100,
        opacity:0,
        duration:.5,
        stagger:0.2
      })
    }
  )
  tl.pause()
  
  return (
    <>
    <div className="navbar">
        <div className="left-side">
            <svg width="100%" height="100%" viewBox="0 0 77 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5882 7.93219V27.4787H12.4663V13.7609H6.15394V27.4861H0V7.93219H18.5882Z" fill="#344C45"></path>
                <path d="M36.8845 17.7673C36.9184 15.5843 35.7205 13.8468 33.8509 13.3753C31.3154 12.7349 29.0854 14.1197 28.578 16.6498C28.1271 18.9033 29.0798 21.0176 30.9173 21.8325C33.8622 23.1412 36.8316 21.116 36.8845 17.7673ZM32.5322 27.9935C26.4707 27.8431 22.1165 23.3212 22.2429 17.5538C22.3769 11.4226 27.08 7.1587 33.3528 7.45199C38.9729 7.71373 43.4176 12.2746 43.1289 18.365C42.8724 23.802 38.09 28.194 32.5322 27.9935Z" fill="#344C45"></path>
                <path d="M52.655 6.10352e-05H46.752V27.497H52.655V6.10352e-05Z" fill="#344C45"></path>
                <path d="M76.9993 7.83166H69.7096L63.0784 16.3742V6.10352e-05H57.1772V27.497H63.0784V18.8802L69.7096 27.4227H76.9993L69.3964 17.6272L76.9993 7.83166Z" fill="#344C45"></path>
            </svg>
        </div>
        <div className="right-side">
            <li><h6 id='one'>Our brands</h6><h6 id='two'>Our brands</h6></li>
            <li><h6 id='one'>Join our collective</h6><h6 id='two'>Join our collective</h6></li>
            <li><h6 id='one'>Our impact</h6><h6 id='two'>Our impact</h6></li>
            <li><h6 id='one'>Our Services</h6><h6 id='two'>Our Services</h6></li>
            <i onClick={()=>{tl.play()}} class="ri-menu-line"></i>
            
        </div>
    </div>
    <div className="side-bar">
      <div className="leftdiv">
        <h4>Home</h4>
        <h4>Our impact</h4>
        <h4>Join our collective</h4>
        <h4>Our services</h4>
        <h4>Our Team</h4>
      </div>
      <div className="rightdiv">
        <i onClick={()=>{tl.reverse()}} class="ri-close-fill"></i>
      </div>
    </div>

    </>
  )
}

