import React, { useEffect } from "react";
import "./About.css";
import "../App.css";
export const About = () => {
  return (
    <div className="about ">
      <h2
        className="display-6 fw-bold"
        data-aos="fade-down"
        data-aos-easing="ease-in-sine"
        data-aos-duration="400"
      >
        About
      </h2>
      <div className="about-detail p-5">
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          I am Ramya, a passionate and hardworking Person eager to start my
          career in web development. I have a strong foundation in front-end
          technologies like HTML, CSS, JavaScript, and React.js, which enables
          me to build responsive and interactive websites. In addition to my
          technical skills, I am proficient in using Excel, Bootstrap for
          styling, GitHub for version control, and Figma for designing
          user-friendly interfaces.
        </div>
        <div
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
        >
          I also have basic knowledge of Python and PHP, allowing me to explore
          backend development as well. While I may not have professional
          experience, I am a quick learner, a problem-solver, and deeply
          motivated to contribute to real-world projects. I am excited to apply
          my skills and grow as a developer.
        </div>
      </div>
      <p
        className="linkedin p-4"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="800"
      >
        Feel free connect here---
        <button className="btn-link glow-on-hover">
          <a
            href="https://www.linkedin.com/in/ramya-palaniyandi-a5b935231/"
            target="_blank"
          >
            Linked-in
          </a>
        </button>
      </p>
    </div>
  );
};
