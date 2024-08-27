import React from 'react';
import webDesign from '../assets/web-design.svg';
import webDev from '../assets/web-development.svg';


const About = () => {
  return (
    <div>
      <div>
        <h1 className="Title">About <span className='title'>Me</span></h1>
        <div className="coloredSeparater"></div>
        <p className="Summary">
          Currently pursuing my MCA with a keen focus on web development, I’m passionate about creating dynamic and visually compelling user experiences. While I am still improving my skills in coding and design, my enthusiasm and dedication to continuous learning drive me to grow every day.

          <br /><br />
          With experience in React, Java, NodeJS, APIs, and databases such as SQL and MongoDB, I bring a wealth of technical expertise to my projects. My familiarity with tools like Git and GitHub further enhances my ability to deliver high-quality solutions.

          My multi-tasking abilities and capability to work in deadline-oriented environments are key strengths.

          I am actively seeking internship opportunities to apply my skills and gain practical experience in the industry.

          I’m eager to connect with like-minded professionals and explore opportunities that challenge and inspire me. Let’s collaborate to create something extraordinary!
        </p>
      </div>

      <div>
        <h2 className="SubTitle">What I Do</h2>

        <div className="boxes-container">
          <div className="boxes">
          <i class='bx bx-code-alt' ></i>
            <div>
              <h3 className="SubTitle">Web development</h3>
              <p className="Summary">High-quality development of sites at the professional level</p>
            </div>
          </div>

          <div className="boxes">
          <i class='bx bx-paint' ></i>
            <div>
              <h3 className="SubTitle">Web design</h3>
              <p className="Summary">The most modern and high-quality design made at a professional level.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
