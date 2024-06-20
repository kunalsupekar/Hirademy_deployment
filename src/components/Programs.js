import React from 'react';
import PropTypes from 'prop-types';

const Programs = ({ handleButtonClick }) => {
  return (
    <section id="programs" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Our Programs</h2>
          <p></p>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <h2>Internship Program</h2>
            <h4>Features:</h4>
            <ul>
              <li><i className="ri-check-double-line"></i>Gain <b>Real-product</b> Work experience</li>
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
            <h2>Mentorship Program</h2>
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
              <li><i className="ri-check-double-line"></i>Frontend Stack: React.js, Next.js</li>
              <li><i className="ri-check-double-line"></i>AI Tools: ChatGPT, Gemini, Bing AI</li>
              <li><i className="ri-check-double-line"></i>Database/Queues: SQL/NoSql Databases, postgresql, MongoDB, Cassandra, Redis, Kafka, RabbitMQ</li>
              <li><i className="ri-check-double-line"></i>Cloud Tools: AWS, GCP, AZURE, Heroku, etc</li>
              <li><i className="ri-check-double-line"></i>Testing tools: Junit, Locus, Postman, etc</li>
              <li><i className="ri-check-double-line"></i>Other Tools: Jenkins, ArgoCD, Prometheus, Grafana, Github, Slack, Jira, etc</li>
            </ul>
            <h4>Eligibility:</h4>
            <ul>
              <li><i className="ri-check-double-line"></i>Education: B.Tech, M.Tech, MCA or equivalent degree</li>
              <li><i className="ri-check-double-line"></i>Good in programming and computer fundamentals</li>
            </ul>
            <h4>Pricing: <b>Rs.4,999/-</b> <s><font color="red">Rs.14,999/-</font></s></h4>
            <h4>Duration: 2 months</h4>
            <h5><b>Free Bonus</b>: Eligible for Internship without Screening process</h5>
            <button onClick={handleButtonClick}>Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

Programs.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};

export default Programs;
