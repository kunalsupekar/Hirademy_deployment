import React, { useEffect } from 'react';
import AboutVideo from './AboutVideo';
import Programs from './Programs'; 
import Products from './Products'; 
import IconBox from './IconBox'; 
import About from './About';
import Contact from './Contact';
import Counts from './Counts';
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
import TestimonialsSlider from './TestimonialsSlider';
const PureCounter = require('@srexi/purecounterjs');

const technologies = [
  'Artificial Intelligence(AI) and Tools',
  'SaaS/Cloud Technologies',
  'Mobile and Web Development',
  'Blockchain and IoT',
  'Cloud computing and DevOps'
];


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
    <div>
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
      <IconBox />
     </div>
      </section>

      {/* About Video Section */}
       <AboutVideo technologies={technologies} />
      {/* Programs Section */}
      <Programs handleButtonClick={handleButtonClick} />
      {/* Products Section */}
      <Products />
      {/* Counts Section */}
     <Counts/>
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
      <About/>
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
      <Contact />
  </div>
  );
};

export default Home;
