import React from "react";
import "../Footer/Footer.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Footer = () => {
  var tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".oncontact", {
      top: 300,
      opacity: 1,
      duration: 0.4,
    });
  });
  tl.pause();
  return (
    <div className="footer">
      <div className="contact">
        <div className="left-contact">
          <h4>Contact us</h4>
          <p>Our team is here to help!</p>
        </div>
        <div className="right-contact">
          <i
            onClick={() => {
              tl.play();
            }}
            class="ri-add-large-fill"
          ></i>
        </div>
      </div>
      <div className="oncontact">
        <div className="left-contact">
          <h4>Abhinav Rana</h4>
          <p>+91 9289609276</p>
          <p>2003ranaabhinav@gmail.com</p>
        </div>
        <div className="right-contact">
          <i
            onClick={() => {
              tl.reverse();
            }}
            class="ri-close-large-line"
          ></i>
        </div>
      </div>
      <div className="foot">
        <div className="left-foot">
          <div className="lft">
            <h6>Our brands</h6>
            <h6>Join our collective</h6>
            <h6>Our impact</h6>
          </div>
          <div className="rgt">
            <h6>Our team</h6>
            <h6>Life at nolk</h6>
            <h6>Become a nolkie</h6>
          </div>
        </div>
        <div className="right-foot">
          <div className="lft-foot">
            <h6>2003ranaabhinav@gmail.com</h6>
            <h6>
              <a href="https://www.linkedin.com/in/abhinav-rana-087282256/">Linkdin</a>
            </h6>
          </div>
          <div className="rgt-foot">
            <img
              src="https://cdn.prod.website-files.com/66e47aafc62e371ae0317493/66e47aafc62e371ae031750c_Logo.svg"
              loading="lazy"
              id="w-node-_1343ad01-bee2-7ad0-6b18-7af2a8ecfcd6-76979d36"
              alt=""
              class="b-corp-img in-footer"
            />
          </div>
        </div>
      </div>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 77 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.5882 7.93219V27.4787H12.4663V13.7609H6.15394V27.4861H0V7.93219H18.5882Z"
          fill="#344C45"
        ></path>
        <path
          d="M36.8845 17.7673C36.9184 15.5843 35.7205 13.8468 33.8509 13.3753C31.3154 12.7349 29.0854 14.1197 28.578 16.6498C28.1271 18.9033 29.0798 21.0176 30.9173 21.8325C33.8622 23.1412 36.8316 21.116 36.8845 17.7673ZM32.5322 27.9935C26.4707 27.8431 22.1165 23.3212 22.2429 17.5538C22.3769 11.4226 27.08 7.1587 33.3528 7.45199C38.9729 7.71373 43.4176 12.2746 43.1289 18.365C42.8724 23.802 38.09 28.194 32.5322 27.9935Z"
          fill="#344C45"
        ></path>
        <path
          d="M52.655 6.10352e-05H46.752V27.497H52.655V6.10352e-05Z"
          fill="#344C45"
        ></path>
        <path
          d="M76.9993 7.83166H69.7096L63.0784 16.3742V6.10352e-05H57.1772V27.497H63.0784V18.8802L69.7096 27.4227H76.9993L69.3964 17.6272L76.9993 7.83166Z"
          fill="#344C45"
        ></path>
      </svg>
    </div>
  );
};
