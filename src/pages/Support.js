// src/pages/Support.js

const Support = () =>{
  return(
    <div className="supprt-page-template">
      <section className="support-section">
        <div className="main-title">
          <h4>Madiora</h4>
          <h2>Support – Raise a Ticket</h2>
        </div>
      </section>
      <section className="support-desc">
        <div className="description">
          <h4>Fast, Reliable & 24/7 Assistance for All Your Needs</h4>
          <p>At Maidora, we are committed to offering seamless customer support whenever you need it. Whether you are facing an issue, need help with a service, or simply have a question—our support team is here to assist you.</p>
          <p>Raising a support ticket ensures your query is properly tracked, assigned, and resolved as quickly as possible.</p>
          <h2>Why Raise a Support Ticket?</h2>
              <ul className="list-data">
                <li>Track your issue in real-time</li>
                <li>Guaranteed faster response from support</li>
                <li>Dedicated support agents assigned to your case</li>
                <li>Clear documentation of your request</li>
                <li>Email/SMS notifications on every update</li>
                <li>Easy follow-ups through your ticket ID</li>
              </ul>
              <hr/>
              <h2>When Should You Create a Ticket?</h2>
              <p>You can raise a ticket for:</p>
              <ul className="list-data">
                <li>Service issues (late arrival, cancellation, behavior concerns)</li>
                <li>Payment or billing-related queries</li>
                <li>App or website technical problems</li>
                <li>Profile or account corrections</li>
                <li>Suggestions and feedback</li>
                <li>Any other support request</li>
              </ul>
              <hr/>
              <h2>What Happens After You Submit a Ticket?</h2>
              <ol className="list-data">
                <li>Your ticket gets logged with a unique Ticket ID</li>
                <li>Assigned to a support agent based on issue type</li>
                <li>You receive email/SMS confirmation</li>
                <li>Agent reviews and contacts you if needed</li>
                <li>Issue is resolved with status updates</li>
                <li>Ticket is closed only when you are satisfied</li>
              </ol>
        </div>
        <div className="sub-description">
          <div className="desc-col">
            <div className="call-support">
              <h3>Need Immediate Help?</h3>
              <p>For urgent issues, contact our team directly:</p>
              <p>Customer Care: +91-9999999999</p>
              <p><strong>Email: support@maidora.com</strong></p>
            </div>
          </div>
          <div className="desc-col">
            <div className="form-container">
              <h2>Raise a Support Ticket</h2>
              <p>Fill out the form below and our team will get back to you within 24–48 hours.</p>
              <form>
                <div className="form-group">
                  <label>Full Name <sup>*</sup></label>
                  <input type="text" placeholder="Enter Full Name"/>
                </div>
                <div className="form-group">
                  <label>Email <sup>*</sup></label>
                  <input type="email" placeholder="Register Email Id"/>
                </div>
                <div className="form-group">
                  <label>Contact Number <sup>*</sup></label>
                  <input type="number" placeholder="Phone Number"/>
                </div>
                <div className="form-group">
                  <label>Describe your issue<sup>*</sup></label>
                  <textarea rows={8} cols={7} placeholder="Issue"></textarea>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Support;