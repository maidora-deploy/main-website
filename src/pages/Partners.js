import { React } from "react";
import { Link } from "react-router-dom";
import partner from "../assets/imagesx/handshake-man-woman.jpg";
import twentyFourSupport from '../assets/imagesx/twenty-four-support.jpg';
import lowerCommisionRate from '../assets/imagesx/commision-rate.jpg';
import excilsivePartner from '../assets/imagesx/exclisve-partner.jpg';
import freeBranding from '../assets/imagesx/free-branding.jpg';
import deticatedBusiness from '../assets/imagesx/business-team-meeting.jpg';
import trust from '../assets/imagesx/trust.jpg';
import profitBook from '../assets/imagesx/profit-book.jpg';
import guranteeLeads from '../assets/imagesx/leads-gurantee.jpg';
import tranining from '../assets/imagesx/tranining.jpg';

import CallToActionB2B from "../shared/call-to-action-b2b";

const Partners = () => {
  return (
    <div className="partner-template">
      <section className="partner-section">
        <div className="main-title">
          <h4>Partner with Us</h4>
          <h1>Grow Together with Our Partnership Program</h1>
          <p>
            Join hands with Maidora and unlock new business opportunities
            through trust, collaboration, and long-term growth.
          </p>
          <Link to="/about">About Us</Link>
        </div>
      </section>
      <section className="certified-partner">
        <div className="certified-partner-row">
          <div className="certified-partner-col">
            <h2>Become Certified Partner</h2>
            <p>
              Gain access to high-quality leads, professional training, trusted
              branding, and a premium partner support system. Accelerate your
              growth and stand out with Maidora’s certification.
            </p>
          </div>
          <div className="certified-partner-col">
            <img src={partner} alt="Certified Partner" />
          </div>
        </div>
      </section>
      <section className="partner-benefits">
        <h2>Benefits of Being a Certified Partner</h2>
        <div class="benefits-grid">
          <div class="benefit-card image">
            <img src={guranteeLeads} alt="benifit"/>
          </div>
          <div class="benefit-card text">
            <h3>Guaranteed Quality Leads</h3>
            <p>Receive high-quality leads directly from verified customers in your location.</p>
          </div>
        </div>
        <div class="benefits-grid reverse">
          <div class="benefit-card image">
            <img src={profitBook} alt="benifit"/>
          </div>
          <div class="benefit-card text">
            <h3>Higher Earnings With Priority Bookings</h3>
            <p>Certified partners are ranked higher, resulting in more booking opportunities.</p>
          </div>
        </div>
        <div class="benefits-grid">
           <div class="benefit-card image">
            <img src={tranining} alt="benifit"/>
          </div>
          <div class="benefit-card text">
            <h3>Professional Training & Skill Development</h3>
            <p>Get access to exclusive training modules and skill enhancement workshops.</p>
          </div>
        </div>
        <div class="benefits-grid reverse">
          <div class="benefit-card image">
            <img src={trust} alt="benifit"/>
          </div>
          <div class="benefit-card text">
            <h3>Trust & Credibility</h3>
            <p>Boost customer trust with a verified certification badge and professional branding.</p>
          </div>
        </div>
        <div class="benefits-grid">
          <div class="benefit-card image">
            <img src={deticatedBusiness} alt="benifit"/>
          </div>
          <div class="benefit-card text">
            <h3>Dedicated Partner Dashboard</h3>
            <p>Track leads, performance, payments, and customer interactions from one dashboard.</p>
          </div>
        </div>
        <div class="benefits-grid reverse">
          <div class="benefit-card image">
            <img src={freeBranding} alt="benifit"/>
          </div>
          <div class="benefit-card text">
            <h3>Marketing & Branding Support</h3>
            <p>We promote you across our platform to increase your visibility and influence.</p>
          </div>
        </div>
        <div class="benefits-grid">
          <div class="benefit-card image">
            <img src={excilsivePartner} alt="benifit"/>
          </div>
          <div class="benefit-card text">
            <h3>Exclusive Partner Programs</h3>
            <p>Participate in special offers, seasonal promotions, and partner-only growth events.</p>
          </div>
        </div>
        <div class="benefits-grid reverse">
          <div class="benefit-card image">
            <img src={lowerCommisionRate} alt="benifit"/>
          </div>
          <div class="benefit-card text">
            <h3>Lower Commission Rates</h3>
            <p>Certified partners enjoy discounted commission fees and better earning margins.</p>
          </div>
        </div>
        <div class="benefits-grid">
          <div class="benefit-card image">
            <img src={twentyFourSupport} alt="benifit"/>
          </div>
          <div class="benefit-card text">
            <h3>24/7 Partner Support</h3>
            <p>A dedicated support team is ready to assist you whenever needed.</p>
          </div>
        </div>
        <CallToActionB2B />
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

export default Partners;
