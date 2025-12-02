// src/pages/auth/MaidRegister.jsx

import { Link } from "react-router-dom";
import "../../assets/style.css";

export default function MaidRegister() {
  return (
    <div className="register-template">
      <section className="heros-section">
        <div className="container">
          <h1>Join Us as Maid</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>{" "}
              <span>/</span>
              <li className="breadcrumb-item active" aria-current="page">
                Maid Register
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="resgiter-form">
        <div className="container">
          <div className="resgiter-form-row">
            <div className="resgiter-form-col-50">
              <div className="register-main-title">
                <h2>Get Started Filed form</h2>
                <h3>Maidora – Your Trusted Maid Consultancy Partner</h3>
                <p>
                  At Maidora, we believe in bringing peace of mind to every home
                  by offering transparent services, fair pricing, and continuous
                  support even after placement.
                </p>
              </div>
            </div>
            <div className="resgiter-form-col-50">
              <div className="regs-form">
                <h4>Find Your Dream Jobs</h4>
                <form>
                  <div className="form-group">
                    <label>
                      Full Name <sup>*</sup>
                    </label>
                    <input type="text" placeholder="Full Name" />
                  </div>
                  <div className="resgiter-form-row">
                    <div className="resgiter-form-col-50">
                      <div className="form-group">
                        <label>
                          Email <sup>*</sup>
                        </label>
                        <input type="text" placeholder="Email" />
                      </div>
                    </div>
                    <div className="resgiter-form-col-50">
                      <div className="form-group">
                        <label>
                          Contact Number <sup>*</sup>
                        </label>
                        <input type="text" placeholder="Phone Number" />
                      </div>
                    </div>
                  </div>

                  <div className="resgiter-form-row">
                    <div className="resgiter-form-col-50">
                      <div className="form-group">
                        <label>
                          Country <sup>*</sup>
                        </label>
                        <input type="text" placeholder="Password" />
                      </div>
                    </div>
                    <div className="resgiter-form-col-50">
                      <div className="form-group">
                        <label>
                          Create Password <sup>*</sup>
                        </label>
                        <input type="text" placeholder="Confirm Password" />
                      </div>
                    </div>
                  </div>
                  <div className="terms-agree">
                    <input type="checkbox" id="agree" />
                    <p className="terms">
                      <sup>*</sup>I agree to the Maidora General{" "}
                      <Link to="/terms-conditions">Terms & Conditions</Link> and
                      confirm that I would like to receive updates and
                      communications about Maidora’s services in accordance with
                      the Maidora{" "}
                      <Link to="/privacy-policy">Privacy Policy</Link>. I can
                      update my preferences or unsubscribe at any time.
                    </p>
                  </div>
                  <button type="submit">Submit Form</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="subscribe-us">
        <div className="container">
          <div className="subscribe-row">
            <h4>Sign Up To Get Updates And News About Us.</h4>
            <div className="input-box">
              <input type="email" id="email" placeholder="Enter Email..." />
              <button>Subscribe Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
