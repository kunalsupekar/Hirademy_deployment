import React from 'react';
import "./assets/css/style.css";
const Products = () => {
  return (
    <section id="products" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Our Products under Development</h2>
          <br /> <br />
        </div>
        
        <div className="row gy-4">
          {products.map((product, index) => (
            <div 
              key={index} 
              className={`col-lg-4 col-md-6`} 
              data-aos="fade-up" 
              data-aos-delay={(index + 1) * 100}
            >
              <div className={`service-box ${product.color}`}>
                <i className={`${product.icon} icon`}></i>
                <h4>{product.title}</h4>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const products = [
  {
    title: "Fitplano Webapp",
    description: "A web development product to help people generate healthy plans based on Artificial Intelligence",
    icon: "ri-discuss-line",
    color: "blue"
  },
  {
    title: "AI for Mailbox",
    description: "Artificial Intelligence based server-side mailing system to automate the process of employees of a business or company, provided the context.",
    icon: "ri-discuss-line",
    color: "orange"
  },
  {
    title: "Hirademy Webapp",
    description: "A Learning Management System - web development product app to manage students/candidates, mentors, projects, etc.",
    icon: "ri-discuss-line",
    color: "green"
  },
  {
    title: "AI based Report Analyser",
    description: "Artificial Intelligence-based Lab Test Report Analyser to give awareness of user's health and provide personalized suggestions",
    icon: "ri-discuss-line",
    color: "green"
  },
  {
    title: "Chatbot to Order Groceries",
    description: "Artificial Intelligence-based Chatbot to help users order items like Groceries easily in just a few seconds, without wasting time searching for the products",
    icon: "ri-discuss-line",
    color: "green"
  },
  {
    title: "AI based Data Segmentation",
    description: "Artificial Intelligence-based Data Segmentation to help companies segment their customers easily and engage them with their offerings",
    icon: "ri-discuss-line",
    color: "green"
  }
];

export default Products;
