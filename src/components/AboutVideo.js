import React from 'react';
import PropTypes from 'prop-types';
import companyLogo from './assets/img/technologies.jpg';
const AboutVideo = ({ technologies }) => {
  return (
    <section id="about-video" className="about-video">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-5 video-box align-self-baseline" data-aos="fade-right" data-aos-delay="100">
            <img src={companyLogo} className="img-fluid" alt="Company Logo" />
          </div>
          <div className="col-lg-7 pt-3 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
            <h3>Our Technologies</h3>
            <p className="fst-italic">
              We are experts in the below technologies.
              <br />
              We innovate, research, design, and develop our products based on them.
            </p>
            <br />
            <ul>
              {technologies.map((tech, index) => (
                <li key={index}>
                  <i className="bx bx-check-double"></i>
                  <b>{tech}</b>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutVideo.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AboutVideo;
