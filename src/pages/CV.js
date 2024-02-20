import React from 'react';
import './CV.css';

function CV() {
  return (
    <div className="A4 CV-body">
      <div className="sheet">
        <div className="two-column resume">
          <section className="resume__section resume__header">
            <div className="resume__content">
              <h1>Udit Gupta</h1>
              <div className="info-item">
                <span className="info-label"><i className="fa fa-envelope"></i></span>
                <span className="info-text">uditgg0510@gmail.com</span>
                <span className="info-label"><i className="fa fa-phone"></i></span>
                <span className="info-text">+91-7817990855</span>
                <span className="info-label"><i class="fa-brands fa-linkedin-in"></i></span>
                <span className="info-text">linkedin.com/in/udit-gupta-ug0510/</span>
                <span className="info-label"><i className="fa-brands fa-github"></i></span>
                <span className="info-text">github.com/Ug0510</span>
              </div>
            </div>
          </section>

          <div className="resume__columns">
            <div className="resume__main">
              <section className="resume__section resume__summary">
                <div className="resume__content">
                  <div className="resume__section-title"><i className="fa fa-pencil"></i><h2>Profile</h2></div>
                  <div className="other other-info">
                    <p>Devoted tech enthusiast with a strong background in building live projects and collaborating with clients, gained from freelancing and internships. Proficient in Full-stack website development and comfortable with Android development at an intermediate level. I have achieved multiple certificates regarding tech, and am skilled at working with a variety of technologies.</p>
                  </div>
                </div>
              </section>

              <section className="resume__section resume__experience">
                <div className="resume__content">
                  <div className="resume__section-title"><i className="fa fa-briefcase"></i><h2>Experience</h2></div>

                  {/* Add your experience entries here, replacing the placeholders: */}
                  <div className="xp-item">
                    <div className="xp-job">Web Developer, TMU</div>
                    <div className="xp-date">Sep 2023 - present</div>
                    <div className="xp-detail">
                      <ul>
                        <li>Collaborated with a dynamic team to craft modern, user-friendly UI designs for the university's new website and various college pages.</li>
                        <li>Wrote structured and optimized code to ensure SEO-friendly web development.</li>
                        <li>Spearheaded the development of an automation system using Python, revolutionizing manual tasks to dramatically boost efficiency and enhance overall productivity.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="xp-item">
                    <div className="xp-job">Web Developer, CS Council</div>
                    <div className="xp-date">Jun 2023 - Aug 2023</div>
                    <div className="xp-detail">
                      <ul>
                        <li>Completely redesigned the CS Council's website, creating a user-friendly and visually appealing interface that drove a 46% increase in user engagement and satisfaction.</li>
                        <li>Utilized graphic design expertise to create captivating course thumbnails and banners, contributing to a 20% boost in course sign-ups.</li>
                        <li>Managed Digital Marketing efforts, improving website traffic by 25% and implementing effective SEO strategies to enhance online visibility.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Add additional experience entries following the same structure */}

                  <div className="xp-item">
                    <div className="xp-job">Marketing Executive, CS Council</div>
                    <div className="xp-date">Dec 2022 - Jan 2023</div>
                    <div className="xp-detail">
                      <ul>
                        <li>Conducted door-to-door marketing, gaining practical experience and enhancing interpersonal skills.</li>
                        <li>Achieved a remarkable 32% increase in admission rates through the implementation of effective strategies.</li>
                        <li>Consulted with various schools and colleges, collaborating with the staff to organize and execute successful promotional campaigns.</li>
                        <li>Led a team of 10+ individuals, providing guidance and direction to ensure successful outcomes on various projects and initiatives.</li>
                      </ul>
                    </div>
                  </div>

                  {/* ... and so on */}
                </div>
              </section>

              {/* Add other sections (Education, Projects, etc.) here */}
            </div>

            <div className="resume__side">
              {/* Add sections for Education, Skills, etc. here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;
