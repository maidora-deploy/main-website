import { React } from "react";
import { Link } from "react-router-dom";
import { MdOutlineCallMade } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact-template">
      <section className="contact-section">
        <div className="main-title">
          <h4>Get in Touch</h4>
          <h2>Connect With Maidora Today</h2>
          <p>
            Have questions or need support? Our team is here to help you with
            quick and reliable assistance.
          </p>
          <Link to="/resources">
            Resource <MdOutlineCallMade />
          </Link>
        </div>
      </section>
      <section className="contact-deatil">
        <div className="contact-row">
          <div className="contact-col">
            <div className="text-section">
              <h4>We’re Here to Help</h4>
              <h2>Reach Out to Maidora</h2>
              <p>
                Contact Maidora for quick support, service inquiries, or
                partnership opportunities — our team is always ready to assist
                you.
              </p>
              <ul className="contact-list">
                <li><FaSquarePhone/> +91 9999999999</li>
                <li><MdEmail/> enquiry@maidora.com</li>
                <li><MdLocationOn/> A-block, Sector-63, Noida, U.P. 201301</li>
              </ul>
            </div>
          </div>
          <div className="contact-col">
            <form>
              <div className="form-group">
                <label>
                  Full Name <sup>*</sup>
                </label>
                <input type="text" placeholder="Enter FullName" />
              </div>
              <div className="form-group">
                <label>
                  Email <sup>*</sup>
                </label>
                <input type="email" placeholder="Enter Email" />
              </div>
              <div className="form-group">
                <label>
                  Contact Number <sup>*</sup>
                </label>
                <input type="number" placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <label>
                  Message <sup>*</sup>
                </label>
                <textarea cols={8} rows={7} placeholder="Message"></textarea>
              </div>
              <button type="submit">Submit <MdOutlineCallMade /></button>
            </form>
          </div>
        </div>
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

export default Contact;
