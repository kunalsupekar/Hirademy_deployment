import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons styles
import 'boxicons/css/boxicons.min.css'; // Import Boxicons styles
import 'glightbox/dist/css/glightbox.min.css'; // Import glightbox styles
import 'remixicon/fonts/remixicon.css'; // Import Remixicon styles
import 'aos/dist/aos.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'swiper/swiper-bundle.min.css';
import "./assets/css/style.css";

const Footer = () => {
  return (
    
    <footer id="footer">
        
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>Hirademy Technologies</h3>
              <p>
                BHIVE Workspace, HSR Layout,<br />
                Bangalore, Karnataka<br />
                560068, India <br />
                <strong>Phone:</strong> +91-99643-23855<br />
                <strong>Email:</strong> contact@hirademy.com<br />
              </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h5>Useful Links</h5>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Our programs</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Our products</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6">
              <h3>Unlock your potential!</h3>
              <h4>Empowering Minds, Igniting Futures with Hirademy!</h4>
              </div>
              <h2 className='mov-left'>A career Accelerator program where you can learn and build</h2>
            
          </div>
        </div>
      </div>

      
      <div className="container d-md-flex py-4">
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="https://www.linkedin.com/company/hirademy/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
