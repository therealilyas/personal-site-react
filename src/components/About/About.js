import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about__text">
        <h1>About Me</h1>
        <p>
          I spend most of my time writing code and I enjoy doing so. I regularly
          solve programming challenges and try to participate on Hackathons. You
          can read more about one of those challenges. I also spend my time
          doing open source contributions whenever I can.
        </p>
        <p>
          I grew up in a small-town called Hazarasp in Khorezm province, came to
          South Korea in 2015 on a full-scholarship for a 4-year university and
          graduated with CS and BA Bachelor's degrees in 2020. Even though I
          went to school, I relied highly on MOOCs and I still extend my
          knowledge of computer science by taking courses on platforms such as
          Coursera, MIT Open Courseware, Udemy, Educative. Read more about my
          story of becoming a software engineer.
        </p>
      </div>
    </div>
  );
}

export default About;
