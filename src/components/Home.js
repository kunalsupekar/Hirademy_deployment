import React, { useEffect } from 'react';
import AOS from 'aos';
import GLightbox from 'glightbox';
import Swiper from 'swiper';
import "./assets/css/style.css";
import Isotope from 'isotope-layout';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons styles
import 'boxicons/css/boxicons.min.css'; // Import Boxicons styles
import 'glightbox/dist/css/glightbox.min.css'; // Import glightbox styles
import 'remixicon/fonts/remixicon.css'; // Import Remixicon styles
import 'aos/dist/aos.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'swiper/swiper-bundle.min.css';
import { Helmet } from 'react-helmet';
import companyLogo from './assets/img/technologies.jpg';
import TestimonialsSlider from './TestimonialsSlider';
const PureCounter = require('@srexi/purecounterjs');



const Home = () => {
   useEffect(() => {
    (function () {
      "use strict";
      
      /**
       * Easy selector helper function
       */
      const select = (el, all = false) => {
        el = el.trim();
        if (all) {
          return [...document.querySelectorAll(el)];
        } else {
          return document.querySelector(el);
        }
      };

      /**
       * Easy event listener function
       */
      const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all);
        if (selectEl) {
          if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener));
          } else {
            selectEl.addEventListener(type, listener);
          }
        }
      };

      /**
       * Easy on scroll event listener
       */
      const onscroll = (el, listener) => {
        el.addEventListener("scroll", listener);
      };

      /**
       * Navbar links active state on scroll
       */
      let navbarlinks = select("#navbar .scrollto", true);
      const navbarlinksActive = () => {
        let position = window.scrollY + 200;
        navbarlinks.forEach(navbarlink => {
          if (!navbarlink.hash) return;
          let section = select(navbarlink.hash);
          if (!section) return;
          if (
            position >= section.offsetTop &&
            position <= section.offsetTop + section.offsetHeight
          ) {
            navbarlink.classList.add("active");
          } else {
            navbarlink.classList.remove("active");
          }
        });
      };
      window.addEventListener("load", navbarlinksActive);
      onscroll(document, navbarlinksActive);

      /**
       * Scrolls to an element with header offset
       */
      const scrollto = el => {
        let header = select("#header");
        let offset = header.offsetHeight;

        let elementPos = select(el).offsetTop;
        window.scrollTo({
          top: elementPos - offset,
          behavior: "smooth",
        });
      };

      /**
       * Toggle .header-scrolled class to #header when page is scrolled
       */
      let selectHeader = select("#header");
      if (selectHeader) {
        const headerScrolled = () => {
          if (window.scrollY > 100) {
            selectHeader.classList.add("header-scrolled");
          } else {
            selectHeader.classList.remove("header-scrolled");
          }
        };
        window.addEventListener("load", headerScrolled);
        onscroll(document, headerScrolled);
      }

      /**
       * Back to top button
       */
      let backtotop = select(".back-to-top");
      if (backtotop) {
        const toggleBacktotop = () => {
          if (window.scrollY > 100) {
            backtotop.classList.add("active");
          } else {
            backtotop.classList.remove("active");
          }
        };
        window.addEventListener("load", toggleBacktotop);
        onscroll(document, toggleBacktotop);
      }

      /**
       * Mobile nav toggle
       */
      on("click", ".mobile-nav-toggle", function (e) {
        select("#navbar").classList.toggle("navbar-mobile");
        this.classList.toggle("bi-list");
        this.classList.toggle("bi-x");
      });

      /**
       * Mobile nav dropdowns activate
       */
      on(
        "click",
        ".navbar .dropdown > a",
        function (e) {
          if (select("#navbar").classList.contains("navbar-mobile")) {
            e.preventDefault();
            this.nextElementSibling.classList.toggle("dropdown-active");
          }
        },
        true
      );

      /**
       * Scrool with offset on links with a class name .scrollto
       */
      on(
        "click",
        ".scrollto",
        function (e) {
          if (select(this.hash)) {
            e.preventDefault();

            let navbar = select("#navbar");
            if (navbar.classList.contains("navbar-mobile")) {
              navbar.classList.remove("navbar-mobile");
              let navbarToggle = select(".mobile-nav-toggle");
              navbarToggle.classList.toggle("bi-list");
              navbarToggle.classList.toggle("bi-x");
            }
            scrollto(this.hash);
          }
        },
        true
      );

      /**
       * Scroll with offset on page load with hash links in the URL
       */
      window.addEventListener("load", () => {
        if (window.location.hash) {
          if (select(window.location.hash)) {
            scrollto(window.location.hash);
          }
        }
      });

      /**
       * Preloader
       */
      let preloader = select("#preloader");
      if (preloader) {
        window.addEventListener("load", () => {
          preloader.remove();
        });
      }

       /**
   * Initiate glightbox
   */
 const glightbox = GLightbox({
      selector: '.glightbox',
    });

    // Swiper initialization
    new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  
      /**
       * Porfolio isotope and filter
       */
      window.addEventListener("load", () => {
        let portfolioContainer = select(".portfolio-container");
        if (portfolioContainer) {
          let portfolioIsotope = new Isotope(portfolioContainer, {
            itemSelector: ".portfolio-item",
          });

          let portfolioFilters = select("#portfolio-flters li", true);

          on(
            "click",
            "#portfolio-flters li",
            function (e) {
              e.preventDefault();
              portfolioFilters.forEach(function (el) {
                el.classList.remove("filter-active");
              });
              this.classList.add("filter-active");

              portfolioIsotope.arrange({
                filter: this.getAttribute("data-filter"),
              });
              portfolioIsotope.on("arrangeComplete", function () {
                AOS.refresh();
              });
            },
            true
          );
        }
      });

      /**
       * Initiate portfolio lightbox
       */
      const portfolioLightbox = GLightbox({
        selector: ".portfolio-lightbox",
      });

      /**
       * Portfolio details slider
       */
     
      /**
       * Animation on scroll
       */
      window.addEventListener("load", () => {
        AOS.init({
          duration: 1000,
          easing: "ease-in-out",
          once: true,
          mirror: false,
          });
  });
 new PureCounter();
    })();
  }, []);

const handleButtonClick = () => {
    // Redirect to the Google Form URL after clicking the button
    window.location.href = "https://forms.gle/zcXM6YwiU4bwxmy1A";
  };

  



  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        />
      </Helmet>
      <section id="hero" className="d-flex align-items-center">
       <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
      <div className="row justify-content-center">
        <div className="col-xl-7 col-lg-9 text-center">
          <h1>A tech learning and product development platform </h1>
          <h2>Shape your tech career journey by Participating in <br/>our R & D projects</h2>
          
        </div>
      </div>
      <div className="text-center">
        <button onClick={handleButtonClick}>Get Started</button>
      </div>

      <div className="row icon-boxes">
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
          <div className="icon-box">
            <div className="icon"><i className="ri-stack-line"></i></div>
            <h4 className="title"><a href="">Mentorship </a></h4>
            <p className="description">Get mentored by industry experts to become strong techies.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
          <div className="icon-box">
            <div className="icon"><i className="ri-palette-line"></i></div>
            <h4 className="title"><a href="">Internship </a></h4>
            <p className="description">Gain real-world product work experience in a real work environment,<br/> Not dummy or fake projects</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="400">
          <div className="icon-box">
            <div className="icon"><i className="ri-command-line"></i></div>
            <h4 className="title"><a href="">Placements</a></h4>
            <p className="description">Get referred by us to different companies and make your job search easy.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="500">
          <div className="icon-box">
            <div className="icon"><i className="ri-fingerprint-line"></i></div>
            <h4 className="title"><a href="">Trustworthy Platform</a></h4>
            <p className="description">A platform trusted by millions of students to become strong software engineers.</p>
          </div>
        </div>

      </div>
    </div>
      </section>

      {/* About Video Section */}
      <section id="about-video" className="about-video">
       <div className="container" data-aos="fade-up">
      <div className="row">

        <div className="col-lg-5 video-box align-self-baseline" data-aos="fade-right" data-aos-delay="100">
          <img src={companyLogo}    className="img-fluid " alt="hello" />
          
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
            <li><i className="bx bx-check-double"></i><b>Artificial Intelligence(AI) and Tools</b></li><br />
            <li><i className="bx bx-check-double"></i><b>SaaS/Cloud Technologies</b></li>  <br />
            <li><i className="bx bx-check-double"></i><b>Mobile and Web Development</b></li> <br />
            <li><i className="bx bx-check-double"></i><b>Blockchain and IoT</b></li><br />
            <li><i className="bx bx-check-double"></i><b>Cloud computing and DevOps</b></li><br />
          </ul>
        </div>
      </div>
    </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="about">

         <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2>Our Programs</h2>
        <p>  </p>
      </div>

      <div className="row content">
        <div className="col-lg-6">
         <h2>Internship program</h2>
         <h4>Features:</h4>
          <ul>
            <li><i className="ri-check-double-line"></i>Gain <b>Real-product</b> Work experience </li>
            <li><i className="ri-check-double-line"></i>Product <b>Research & Development</b></li>
            <li><i className="ri-check-double-line"></i>Learn Top-notch Technologies with <b>Practical Knowledge</b></li>
            <li><i className="ri-check-double-line"></i>Team Collaboration in a real-work environment</li>
            <li><i className="ri-check-double-line"></i>Network with Tech leaders and co-engineers</li>
            <li><i className="ri-check-double-line"></i>Industry Tools usage</li>
            <li><i className="ri-check-double-line"></i>Work Experience Letter & LoR</li>
            <li><i className="ri-check-double-line"></i><b>Placements</b> offered at Hirademy</li>
          </ul> 
          <h4>Eligibility:</h4>
          <ul>
            <li><i className="ri-check-double-line"></i>Education: B.Tech/M.Tech (CS/IT), MCA, equivalent degrees</li>
            <li><i className="ri-check-double-line"></i>Good in programming and computer fundamentals</li>
            <li><i className="ri-check-double-line"></i>Built at-least 1 relevant product/project</li>
            <li><i className="ri-check-double-line"></i>Should clear the <b>Screening Test/Interview</b> at Hirademy</li>
          </ul> 
          <h4>Pricing: FREE</h4>
          <h4>Duration: 3-6 months</h4>
          <button onClick={handleButtonClick}>Get Started</button>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0">
          <h2>Mentorship program</h2>
          <h4>Features:</h4>
          <ul>
            <li><i className="ri-check-double-line"></i>Role based Curriculum for Interested Role</li>
            <li><i className="ri-check-double-line"></i>Technical Guidance for Interested Technology Stack</li>
            <li><i className="ri-check-double-line"></i>Programming with DS & Algorithms</li>
            <li><i className="ri-check-double-line"></i>System Design and Architecture</li>
            <li><i className="ri-check-double-line"></i>Assignments and Discussions</li>
            <li><i className="ri-check-double-line"></i>Career Guidance & Mentorship from <b>Experts/Mentors</b></li>
            <li><i className="ri-check-double-line"></i>Resume & Interview Preparation</li>
            <li><i className="ri-check-double-line"></i>Guaranteed <b>Placements</b></li>
            <li><i className="ri-check-double-line"></i>Support for <b>1 year</b></li>
          </ul>
          <h4>Roles & Technologies:</h4>
          <ul>
            <li><i className="ri-check-double-line"></i>Roles: AI, Backend, Frontend, DevOps, Test Engineers</li>
            <li><i className="ri-check-double-line"></i>Backend Stack: Python+Flask, Python+Django, Java+Springboot, Golang</li>
            <li><i className="ri-check-double-line"></i>Frontend Stack:  React.js, Next.js</li>
            <li><i className="ri-check-double-line"></i>AI Tools: ChatGPT, Gemini, Bing AI</li>
            <li><i className="ri-check-double-line"></i>Database/Queues: SQL/NoSql Databases, postgresql, MongoDB, Cassandra, Redis, Kafka, RabbitMQ</li>
            <li><i className="ri-check-double-line"></i>Cloud Tools: AWS, GCP, AZURE, Heroku, etc</li>
            <li><i className="ri-check-double-line"></i>Testing tools:, Junit, Locus, Postman, etc</li>
            <li><i className="ri-check-double-line"></i>Other Tools: Jenkins, ArgoCD, Prometheus, Grafana, Github, Slack, Jira, etc</li>
          </ul>
          <h4>Eligibility:</h4>
          <ul>
            <li><i className="ri-check-double-line"></i>Education: B.tech, M.tech, MCA or equivalent degree</li>
            <li><i className="ri-check-double-line"></i>Good in programming and computer fundamentals</li>
          </ul>
          <h4>Pricing: <b>Rs.4,999/-</b> <s> <font color="red">Rs.14,999/-</font></s></h4>
          <h4>Duration: 2 months</h4> 
          <h5><b>Free Bonus</b>: Eligible for Internship without Screening process</h5> 
          <button onClick={handleButtonClick}>Get Started</button>
        </div>
        
      </div>

    </div>
      </section>

      {/* Products Section */}
      <section id="products" className="services">

        <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2>Our Products under Development</h2>
        <br /> <br />

        <div className="row gy-4">

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-box blue">
              <i className="ri-discuss-line icon"></i>
              <h4>Fitplano Webapp</h4>
              <p> A web development product to help people generate healthy plans based on Artificial Intelligence</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-box orange">
              <i className="ri-discuss-line icon"></i>
              <h4>AI for Mailbox</h4>
              <p>Artificial Intelligence based server-side mailing system to automate the process of employees of a business or company, provided the context.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-box green">
              <i className="ri-discuss-line icon"></i>
              <h4>Hirademy Webapp</h4>
              <p>A Learning Management System - web development product app to manage students/candidates, mentors, projects, etc.</p>

            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-box green">
              <i className="ri-discuss-line icon"></i>
              <h4>AI based Report Analyser</h4>
              <p>Artificial Intelligence-based Lab Test Report Analyser to give awareness of user's health and provide personalized suggestions</p>

            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-box green">
              <i className="ri-discuss-line icon"></i>
              <h4>Chatbot to Order Groceries</h4>
              <p>Artificial Intelligence-based Chatbot to help users order items like Groceries easily in just a few seconds, without wasting time searching for the products</p>

            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-box green">
              <i className="ri-discuss-line icon"></i>
              <h4>AI based Data Segmentation</h4>
              <p>Artificial Intelligence-based Data Segmentation to help companies segment their customers easily and engage them with their offerings</p>

            </div>
          </div>

        </div>
      </div>
    </div>
      </section>

      {/* Counts Section */}
      <section id="counts" className="counts">
        <div className="container">
        <div className="row justify-content-end">

          <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="2" className="purecounter"></span>
              <p>Backend Engineers</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="2" className="purecounter"></span>
              <p>Frontend Engineers</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <span data-purecounter-start="0" data-purecounter-end="30" data-purecounter-duration="2" className="purecounter"></span>
              <p>DevOps Engineers</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="2" className="purecounter"></span>
              <p>AI Engineers</p>
            </div>
          </div>

        </div>
      </div>
      </section>

      {/* Cta Section */}
      <section id="cta" className="cta">
        <div className="container" data-aos="zoom-in">
        <div className="text-center">
          <h3>Our Vision</h3>
          <p>Build a large Network of Software Engineers and Mentor them</p>
          <p>Join the community of Tech Interns</p>
          {/* <a className="cta-btn" href="#">Call To Action</a> */}
        </div>
      </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about">
         <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About Us</h2>
          <p>Hirademy-Trustworthy Platform </p>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p>
              A platform where candidates can learn top-notch technologies and build real-world products. Our features
            </p>
            <ul>
              <li><i className="ri-check-double-line"></i> Mentorship and Internship</li>
              <li><i className="ri-check-double-line"></i> Software Engineering</li>
              <li><i className="ri-check-double-line"></i> Product Research & Development</li>
              <li><i className="ri-check-double-line"></i> Innovation</li>
              <li><i className="ri-check-double-line"></i> Skill Empowerment </li>
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

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Testimonials</h2>
          <p>What they say...</p>
        </div>
       <TestimonialsSlider/>
       </div>
      </section>

      {/* Contact Section */}
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
        <div className="text-center">
          {/* <button id="getStartedButtonn">Get Started</button><br> <br> */}
          <button onClick={handleButtonClick}>Get Started</button>
        </div>
      </div>

      <div className="col-lg-8 mt-5 mt-lg-0"></div>
    </div>
      </section>
    </>
  );
};

export default Home;
