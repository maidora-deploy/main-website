// src/pages/TermsConditions.js

import { Link } from "react-router-dom";

const TermsConditions = () => {
  return (
    <div className="term-condition-template">
      <section className="term-condition">
        <div className="main-title">
          <h4>Maidora Term and Condition</h4>
          <h2>Term and Condition</h2>
        </div>
      </section>
      <section className="term-condition-section">
        <div className="main-title">
          <h1>Maidora – Terms & Conditions</h1>
          <p>
            <i>Latest Update: 01/12/2025</i>
          </p>
          <p className="desc">
            Welcome to Maidora. By accessing or using our website, mobile
            application, or any service provided by Maidora (referred to as
            “we”, “us”, or “our”), you agree to the following Terms &
            Conditions. If you do not agree, please discontinue using our
            services.
          </p>
        </div>
        <div className="description">
          <h2>1. Introduction</h2>
          <p>
            Maidora is a platform that connects customers with domestic
            workforce service providers such as maids, cooks, babysitters, and
            helpers. We act as an intermediary to help customers discover,
            request, and book services from verified service partners.
          </p>
          <hr />
          <h2>2. Service Nature</h2>
          <ul className="terms-list">
            <li>Maidora is not the employer of any maid or service partner.</li>
            <li>All service providers operate independently.</li>
            <li>
              Maidora only facilitates the connection, communication, and
              service booking process.
            </li>
          </ul>
          <hr />
          <h2>3. User Responsibilities</h2>
          <p>By using our services, you agree to:</p>
          <ul className="terms-list">
            <li>Provide accurate and complete personal information.</li>
            <li>Maintain the confidentiality of your account information.</li>
            <li>Use the services only for lawful purposes.</li>
            <li>Treat service providers respectfully and fairly.</li>
          </ul>
          <hr />
          <h2>4. Service Provider Responsibilities</h2>
          <p>Maidora expects all service providers to:</p>
          <ul className="terms-list">
            <li>Provide accurate information during registration.</li>
            <li>Deliver services professionally and ethically.</li>
            <li>
              Maintain good hygiene, punctuality, and behavior at the client’s
              home.
            </li>
          </ul>
          <hr />
          <p>
            However, Maidora is not responsible for the conduct or performance
            of individual service providers.
          </p>
          <h2>5. Payments & Fees</h2>
          <ul className="terms-list">
            <li>
              All payments for services must be made through the modes specified
              on the Maidora platform.
            </li>
            <li>
              Subscription or service fees paid to Maidora are non-refundable,
              unless otherwise stated.
            </li>
            <li>
              Any additional charges between customer and service provider are
              not the responsibility of Maidora.
            </li>
          </ul>
          <hr />
          <h2>6. Replacement Policy</h2>
          <ul className="terms-list">
            <li>
              Maidora may offer replacement options for service providers based
              on the plan purchased.
            </li>
            <li>
              The availability of replacements depends on workforce availability
              and location.
            </li>
            <li>
              Misuse of the replacement policy may lead to account termination.
            </li>
          </ul>
          <hr />
          <h2>7. Cancellations & Refunds</h2>
          <ul className="terms-list">
            <li>
              Customers may cancel services as per the cancellation rules shown
              during booking.
            </li>
            <li>
              Any refunds, if applicable, will be processed within the standard
              timelines.
            </li>
            <li>
              Maidora reserves the right to cancel any service due to safety
              concerns or policy violations.
            </li>
          </ul>
          <hr />
          <h2>8. Safety & Liability</h2>
          <ul className="terms-list">
            <li>
              While Maidora verifies service providers, we cannot guarantee
              behavior, performance, or background beyond provided
              documentation.
            </li>
            <li>
              Maidora is not responsible for:
              <ul className="terms-list-2">
                <li>Any theft, loss, or damages caused during service.</li>
                <li>
                  Any conflict or disagreement between customer and service
                  provider.
                </li>
              </ul>
            </li>
            <li>
              Customers are advised to safeguard valuables and maintain
              supervision.
            </li>
          </ul>
          <hr />
          <h2>9. Platform Usage</h2>
          <p>You agree not to:</p>
          <ul className="terms-list">
            <li>Misuse or attempt unauthorized access to our systems.</li>
            <li>Share false information or impersonate others.</li>
            <li>Engage in abusive, discriminatory, or harmful behavior.</li>
          </ul>
          <hr />
          <h2>10. Intellectual Property</h2>
          <p>
            All content, logos, graphics, and branding on the Maidora platform
            are the property of Maidora.
          </p>
          <p>
            You may not copy, reproduce, or use any material without written
            permission.
          </p>
          <hr />
          <h2>11. Privacy Policy</h2>
          <p>
            Your personal data is used only to provide our services and improve
            user experience.
          </p>
          <p>
            By using Maidora, you consent to our data usage and storage
            practices as described in our Privacy Policy.
          </p>
          <hr />
          <h2>12. Modifications</h2>
          <p>Maidora may update these Terms & Conditions at any time.</p>
          <p>
            Continued use of the platform means you accept the latest terms.
          </p>
          <hr />
          <h2>13. Governing Law</h2>
          <p>These Terms & Conditions are governed by the laws of India.</p>
          <p>
            Any disputes shall be subject to the jurisdiction of courts in
            Delhi/NCR.
          </p>
          <hr />
          <h2>14. Contact Information</h2>
          <p>For support, feedback, or queries, you can contact us at:</p>
          <strong>
            Emai:
            <Link to="mailto:support@maidora.com">support@maidora.com</Link>
          </strong>
        </div>
      </section>
    </div>
  );
};
export default TermsConditions;
