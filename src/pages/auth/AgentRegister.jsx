// src/auth/AgentRegister.jsx

import { Link } from "react-router-dom";
import CountrySelect from "../../shared/CountrySelect";

export default function AgenetRegister() {
  return (
    <div className="register-template client-register-template">
      <section className="heros-section">
        <div className="container">
          <h1>Join. Partner. Succeed.</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>{" "}
              <span>/</span>
              <li className="breadcrumb-item active" aria-current="page">
                Agent Register
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="resgiter-form">
        <div className="container">
          <div class="overlay-container">
            <h1>Connect. Collaborate. Earn More.</h1>
            <p>
              Join Maidora’s B2B Agent Network — Connect, collaborate, and
              access high-quality leads to grow your earnings effortlessly.
            </p>
            <p>Note: Free Trial Request for 15days</p>
          </div>
          <div class="form-container">
            <form>
              <label>
                Business Email<sup>*</sup>
              </label>
              <input type="text" placeholder="Business Email" />
              <div className="form-group">
                <div className="form-50">
                  <label>
                    Owner Name<sup>*</sup>
                  </label>
                  <input type="text" placeholder="Full Name" />
                </div>
                <div className="form-50">
                  <label>
                    Compnay Name<sup>*</sup>
                  </label>
                  <input type="text" placeholder="Company Name" />
                </div>
              </div>
              <div className="form-group">
                <div className="form-50">
                  <label>
                    Business<sup>*</sup>
                  </label>
                  <input type="text" placeholder="Business" />
                </div>
                <div className="form-50">
                  
                   <label>
                    Phone Number<sup>*</sup>
                  </label>
                  <input type="text" placeholder="Phone Number" />
                </div>
              </div>
              <div className="form-group">
                <div className="form-50">
                 <label>
                    Subject<sup>*</sup>
                  </label>
                  <select>
                    <option>Subject</option>
                    <option>Trial Request</option>
                    <option>Become Certified Partner</option>
                    <option>Information Request</option>
                    <option>Career - Job Information</option>
                    <option>Others</option>
                  </select>
                </div>
                <div className="form-50">
                  <label>Country<sup>*</sup></label>  
                  <CountrySelect/>
                </div>
              </div>
              <label>
                Create Password<sup>*</sup>
              </label>
              <input type="password" placeholder="Create Password" />
              <div className="terms-agree">
                <input type="checkbox" id="agree"/>
                <p className="terms"><sup>*</sup>I agree to the Maidora General <Link to='/terms-conditions'>Terms & Conditions</Link> and confirm that I would like to receive updates and communications about Maidora’s services in accordance with the Maidora <Link to="/privacy-policy">Privacy Policy</Link>. I can update my preferences or unsubscribe at any time.</p>    
              </div>
              <button>Submit Form</button>
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
}
