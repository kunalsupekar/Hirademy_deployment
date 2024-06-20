import React from 'react';
import "./assets/css/style.css";
const IconBoxes = () => {
  return (
    <div className="container" data-aos="fade-up">
      <div className="row icon-boxes">
        {iconBoxes.map((box, index) => (
          <div 
            key={index} 
            className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" 
            data-aos="zoom-in" 
            data-aos-delay={(index + 2) * 100}
          >
            <div className="icon-box">
              <div className="icon"><i className={box.icon}></i></div>
              <h4 className="title"><a href="#">{box.title}</a></h4>
              <p className="description">{box.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const iconBoxes = [
  {
    title: "Mentorship",
    description: "Get mentored by industry experts to become strong techies.",
    icon: "ri-stack-line"
  },
  {
    title: "Internship",
    description: "Gain real-world product work experience in a real work environment, Not dummy or fake projects",
    icon: "ri-palette-line"
  },
  {
    title: "Placements",
    description: "Get referred by us to different companies and make your job search easy.",
    icon: "ri-command-line"
  },
  {
    title: "Trustworthy Platform",
    description: "A platform trusted by millions of students to become strong software engineers.",
    icon: "ri-fingerprint-line"
  }
];

export default IconBoxes;
