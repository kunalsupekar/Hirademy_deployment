import React from 'react';
import "./assets/css/style.css";
const Contact = () => {
  const handleButtonClick = () => {
    // Redirect to the Google Form URL after clicking the button
    window.location.href = "https://forms.gle/zcXM6YwiU4bwxmy1A";
  };

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
          <p></p>
        </div>

        <div>
          <iframe
            style={{ border: 0, width: '100%', height: '270px' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4045.0545138915286!2d77.64316999534576!3d12.891723646688373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1526dc247ba9%3A0xebdd6b6714bfaabc!2sBHIVE%20Workspace%2C%20HSR%20Campus!5e0!3m2!1sen!2sin!4v1701104636158!5m2!1sen!2sin"
            frameBorder="0"
            allowFullScreen
            title="Google Maps"
          ></iframe>
        </div>

        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>
                  BHIVE Workspace, HSR Layout, <br />
                  Bangalore, Karnataka -<br />
                  560068, India
                </p>
              </div>
              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>contact@hirademy.com</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+91-99643-23855</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-5 mt-lg-0 text-center">
            <button onClick={handleButtonClick}>Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
