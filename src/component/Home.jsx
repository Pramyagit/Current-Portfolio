import React from "react";
import "./Home.css";
import "../App.css";
import image from "../image/ramya.jpeg";
import AutoTextAnimation from "./Animation";
import resume from "../assets/Resume.pdf";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <div className="detail">
        <div className="detail-img">
          <h2
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            I am Ramya
          </h2>
          <span>
            <AutoTextAnimation />
          </span>
        </div>
        <div className="profile">
          <img src={image} alt="image"></img>
        </div>
      </div>
      <div className="home_data" data-aos="fade-down">
        <div className="contact-home">
          <button
            className="glow-on-hover"
            type="button"
            data-aos="fade-right"
            data-delay="1100"
          >
            <Link to="/Contact">Contact</Link>
          </button>
          <button
            className="button-resume"
            type="button"
            data-aos="fade-down"
            data-delay="1150"
          >
            <a href={resume} download="resume">
              Download Resume
            </a>
          </button>
          <div className="home_social" data-aos="fade-right" data-delay="1150">
            <a href="https://www.facebook.com/" className="home_social-icon">
              <i className="bx bxl-facebook-circle "></i>
            </a>
            <a href="https://www.instagram.com/" className="home_social-icon">
              <i className="bx bxl-instagram-alt "></i>
            </a>
            {/* <a href="https://www.twitter.com/" className="home_social-icon">
              <i className="bx bxl-twitter "></i>
            </a> */}
            <a href="https://github.com/login/" className="home_social-icon">
              <i className="bx bxl-github "></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    // <div>home</div>
  );
};
