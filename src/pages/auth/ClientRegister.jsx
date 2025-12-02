// src/auth/ClientRegister.jsx

import { Link } from "react-router-dom";
import CountrySelect from "../../shared/CountrySelect";

export default function ClientRegister() {
  return (
    <div className="register-template client-register-template">
      <section className="heros-section">
        <div className="container">
          <h1>Find Maid</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>{" "}
              <span>/</span>
              <li className="breadcrumb-item active" aria-current="page">
                Client Register
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="resgiter-form">
        <div className="container">
          <div class="overlay-container">
            <h1>Better maids, better comfort.</h1>
            <p>
              Experience hassle-free living with Maidora’s trained, reliable,
              and trusted maids — comfort you can count on every day.
            </p>
          </div>
          <div class="form-container">
            <form>
              <label>
                FullName<sup>*</sup>
              </label>
              <input type="text" placeholder="FullName" />
              <label>
                Email<sup>*</sup>
              </label>
              <input type="email" placeholder="Email" />
              <label>
                Phone Number<sup>*</sup>
              </label>
              <input type="text" placeholder="Phone Number" />
              <label>
                Country<sup>*</sup>
              </label>
              <CountrySelect/>
              <label>
                Create Password<sup>*</sup>
              </label>
              <input type="password" placeholder="Password" />
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
