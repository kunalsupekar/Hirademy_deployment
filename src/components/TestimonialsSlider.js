import React from 'react';
import 'swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import pic from './assets/img/testimonials/pic.jpg';
import Dharaneesh from './assets/img/testimonials/Dharaneesh.jpg';
import prasad from './assets/img/testimonials/prasad.jpg';
import reethu from './assets/img/testimonials/reethu.jpg';

// Install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const TestimonialsSlider = () => {
  const testimonials = [
    {
      content:
        "Hirademy was a game-changer for me! Their internship program connected me to get a job.",
      author: "Bhargavi",
      image: pic, // Replace with the actual import for pic
    },
    {
      content:
        "Hirademy was the launchpad for my career in tech. The internship opportunities they provided are invaluable.",
      author: "Prasad",
      image: prasad, // Replace with the actual import for prasad
    },
    {
      content:
        "As a fresher finding relevant internships felt impossible. I worked on real projects and even got promoted!",
      author: "Dharaneesh",
      image: Dharaneesh, // Replace with the actual import for Dharaneesh
    },
    {
      content:
        "Looking for an internship while juggling studies is tough. Hirademy made it super easy; their platform was user-friendly.",
      author: "Reethu",
      image: reethu, // Replace with the actual import for reethu
    },
  ];

  return (
    <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
      <Swiper
        className="swiper-wrapper"
        speed={800}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        slidesPerView="auto"
        pagination={{ el: '.swiper-pagination', type: 'bullets', clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  {testimonial.content}
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={testimonial.image} className="testimonial-img" alt="" />
                <h3>{testimonial.author}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSlider;
