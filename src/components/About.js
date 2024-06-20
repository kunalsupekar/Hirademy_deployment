import React from 'react';
import "./assets/css/style.css";
const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About Us</h2>
          <p>Hirademy - Trustworthy Platform</p>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p>
              A platform where candidates can learn top-notch technologies and build real-world products. Our features
            </p>
            <ul>
              {features.map((feature, index) => (
                <li key={index}><i className="ri-check-double-line"></i> {feature}</li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              Hirademy is a learning and product-building company, and we onboard Engineers to build innovative products. We hire students/freshers and make them strong engineers via our Mentorship and Internship Programs.
            </p>
            <a href="#" className="btn-learn-more">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const features = [
  "Mentorship and Internship",
  "Software Engineering",
  "Product Research & Development",
  "Innovation",
  "Skill Empowerment"
];

export default About;
