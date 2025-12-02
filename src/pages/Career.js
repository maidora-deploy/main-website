// src/pages/Career.js

import { React, useRef } from "react";
import { MdOutlineCallMade } from "react-icons/md";
import JobAccordion from "../components/JobAccordion";

const Career = () => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="career-page-template">
      <section className="title-section">
        <div className="main-title">
          <h4>Life at Maidora</h4>
          <h2>Grow Your Career with a Company That Grows With You.</h2>
          <p>
            Be part of a fast-growing team at Maidora—where opportunities are
            limitless and your career moves forward with purpose.
          </p>
          <button onClick={scrollToAbout}>
            Explore Jobs <MdOutlineCallMade />
          </button>
        </div>
      </section>
      <section class="equity-section" aria-labelledby="equity-heading">
        <div class="equity-hero">
          <div class="hero-inner">
            <h2 id="equity-heading">Our Focus on Equity</h2>
            <p class="hero-sub">
              We ensure fair opportunity, dignity, and inclusion for everyone —
              employees, partners, and the communities we serve.
            </p>
          </div>
        </div>

        <div class="equity-content container">
          <ul class="equity-list">
            <li class="equity-item">
              <span class="eq-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M3 6h18M3 18h18" />
                </svg>
              </span>
              <div class="eq-text">
                <h3>Fair Opportunities</h3>
                <p>
                  Equal access to roles, training, and growth — for everyone,
                  regardless of background.
                </p>
              </div>
            </li>

            <li class="equity-item">
              <span class="eq-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </span>
              <div class="eq-text">
                <h3>Safe & Respectful Workplace</h3>
                <p>
                  Zero tolerance for discrimination — we protect dignity,
                  privacy, and safety.
                </p>
              </div>
            </li>

            <li class="equity-item">
              <span class="eq-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M3 11v2a2 2 0 0 0 2 2h1l6 3V6L6 9H5a2 2 0 0 0-2 2z" />
                  <path d="M19 5v14" />
                </svg>
              </span>
              <div class="eq-text">
                <h3>Inclusive Voice</h3>
                <p>
                  We lift underrepresented voices and ensure everyone has a seat
                  at the table.
                </p>
              </div>
            </li>

            <li class="equity-item">
              <span class="eq-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M3 3v18h18" />
                  <path d="M7 14l4-4 4 4 6-8" />
                </svg>
              </span>
              <div class="eq-text">
                <h3>Skill Development</h3>
                <p>
                  Training, mentorship, and fair pay to help everyone progress
                  in their career.
                </p>
              </div>
            </li>

            <li class="equity-item">
              <span class="eq-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <path d="M8 13h8M8 17h8" />
                </svg>
              </span>
              <div class="eq-text">
                <h3>Transparent Policies</h3>
                <p>
                  Clear, fair processes and open communication across hiring,
                  pay, and progression.
                </p>
              </div>
            </li>

            <li class="equity-item">
              <span class="eq-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </span>
              <div class="eq-text">
                <h3>Community Impact</h3>
                <p>
                  We invest in the communities we serve — outreach, local
                  hiring, and fair practices.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="job-list-section" ref={aboutRef}>
        <div className="main-title">
          <h2>Join Our Growing Team</h2>
          <p>Explore our latest job openings available only in Delhi/NCR. Build a rewarding career with a company that values skill, passion, and dedication.</p>
        </div>
        <JobAccordion />
      </section>
      <section className="subscribe-us">
          <div className="container">
            <div className="subscribe-row">
              <h4>Sign Up To Get Updates And News About Us.</h4>
               <div className="input-box">
                  <input type="email" id="email" placeholder="Enter Email..."/> 
                  <button>Subscribe Now</button>
               </div>
             </div>
          </div>
      </section>
    </div>
  );
};

export default Career;
