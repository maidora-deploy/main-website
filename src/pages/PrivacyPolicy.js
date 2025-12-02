// src/pages/PrivacyPolicy.js

import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="term-condition-template">
      <section className="term-condition">
        <div className="main-title">
          <h4>Maidora Privacy Policy</h4>
          <h2>Privacy Policy</h2>
        </div>
      </section>
      <section className="term-condition-section">
        <div className="main-title">
          <h1>Maidora – Privacy Policy</h1>
          <p>
            <i>Latest Update: 01/12/2025</i>
          </p>
          <p className="desc">
            Maidora (“we”, “our”, “us”) is committed to protecting your personal
            information. This Privacy Policy explains how we collect, use,
            store, and protect your data when you use our website, mobile
            application, or any of our services.
          </p>
        </div>
        <div className="description">
          <h2>1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <div className="sub-info">
            <h3>A Personal Information</h3>
            <ul className="terms-list">
              <li>Name, email, phone number, address</li>
              <li>Gender or identification details</li>
              <li>Feedback, service preferences</li>
            </ul>
            <h3>B Service-Related Information</h3>
            <ul className="terms-list">
              <li>Booking details</li>
              <li>Payment mode and transaction references</li>
              <li>Communication between customer and service provider</li>
            </ul>
            <h3>C Technical Information</h3>
            <ul className="terms-list">
              <li>IP address</li>
              <li>Browser type and device details</li>
              <li>Cookies and usage analytics</li>
            </ul>
          </div>
          <hr />
          <h2>2. How We Use Your Information</h2>
          <p>We use the collected data to:</p>
          <ul className="terms-list">
            <li>Provide and manage maid/household services</li>
            <li>Improve our website, app, and offerings</li>
            <li>Process payments and subscriptions</li>
            <li>Communicate important updates or service alerts</li>
            <li>Verify user identity</li>
            <li>Enhance security and reduce fraudulent activity</li>
            <li>Personalize user experience</li>
          </ul>
          <hr />
          <h2>3. Sharing of Information</h2>
          <p>We may share data only with:</p>
          <ul className="terms-list">
            <li>Service providers/maids assigned to your booking</li>
            <li>Payment gateways for secure transactions</li>
            <li>
              Third-party tools (analytics, email services) for better services
            </li>
            <li>Law enforcement when legally required</li>
          </ul>
          <p>
            We do not sell, rent, or trade your personal information to any
            third party.
          </p>
          <hr />
          <h2>4. Data Protection & Security</h2>
          <p>
            We implement industry-standard security measures to protect your
            data. However, no method of transmission over the internet is 100%
            secure. Users must also take steps to safeguard account details.
          </p>
          <hr />
          <h2>5. Cookies</h2>
          <p>Our website may use cookies to:</p>
          <ul className="terms-list">
            <li>Analyze user behavior</li>
            <li>Save login preferences</li>
            <li>Improve site performance</li>
          </ul>
          <p>Users can disable cookies via browser settings.</p>
          <hr />
          <h2>6. Your Rights</h2>
          <p>You may:</p>
          <ul className="terms-list">
            <li>Access your personal data</li>
            <li>Request corrections/updates</li>
            <li>Request deletion of your account</li>
            <li>Opt-out of marketing communication</li>
          </ul>
          <p>
            Send requests to:{" "}
            <strong>
              <Link to="mailto:privacy@maidora.com">privacy@maidora.com</Link>
            </strong>
          </p>
          <hr />
          <h2>7. Third-Party Links</h2>
          <p>Our platform may contain links to external websites.</p>
          <p>
            Maidora is not responsible for the privacy practices of third-party
            sites.
          </p>
          <hr />
          <h2>8. Children’s Privacy</h2>
          <p>
            Maidora services are not intended for individuals under 18 years.
          </p>
          <p>We do not knowingly collect data from minors.</p>
          <hr />
          <h2>9. Updates to Privacy Policy</h2>
          <p>We may update this policy as required.</p>
          <p>
            Continued use of the platform means you accept the latest version.
          </p>
          <hr />
          <h2>10. Contact Us</h2>
          <p>For privacy-related queries:</p>
          <strong>
            <Link to="mailto:privacy@maidora.com">privacy@maidora.com</Link>
          </strong>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
