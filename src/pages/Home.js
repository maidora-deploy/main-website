import { React } from "react";
import banner from "../assets/imagesx/medium-shot-people-cleaning-building.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdOutlineCallMade } from "react-icons/md";
import about from "../assets/imagesx/professional-cleaning-service-person-using-vacuum-cleaner-office.jpg";
import { FaHeadphonesAlt } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import Pricing from "../components/Pricing";

const Home = () => {
  return (
    <div className="home-page-template">
      <section className="home-section">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="text-section">
                <p>Needs professional Cleaning</p>
                <h1>Amazing Quality Cleaning Service</h1>
                <p className="formal-text">
                  Hire Us! we are professional Cleaning Company offering all
                  types of Cleaning and mainteance services.
                </p>
                <Link to="/resources">
                  Resources <FaArrowRight />
                </Link>
              </div>
            </div>
            <div className="col-6">
              <img src={banner} alt="banner" />
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={about} alt="about" />
            </div>
            <div className="col-6">
              <div className="about-text-section">
                <p>About Maidora</p>
                <h2>Maidora – Your Trusted Maid Consultancy Partner</h2>
                <p className="about-description">
                  Maidora is a professional maid consultancy firm dedicated to
                  connecting households with reliable, trained, and
                  background-verified domestic helpers. Whether you need a
                  full-time live-in maid, part-time housekeeper, nanny, cook, or
                  elderly caregiver, Maidora ensures a seamless and trustworthy
                  hiring experience. We carefully screen and match candidates
                  based on your specific household needs, ensuring comfort,
                  safety, and satisfaction.
                </p>
                <div className="btn-group">
                  <div className="about-btn">
                    <Link to="/about">
                      About <MdOutlineCallMade />
                    </Link>
                  </div>
                  <div className="call-now">
                    <div className="icon-box">
                      <FaHeadphonesAlt />
                    </div>
                    <div className="getCall">
                      <Link>
                        Need Help?
                        <br />
                        +91-9999999999
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service-section">
        <div className="container">
          <p>Our Serivce</p>
          <div className="service-row">
            <h2 className="textWithMaxWidth">
              The United Way For To Find Specialist Services
            </h2>
            <p className="onsre">
              At Maidora, we believe in bringing peace of mind to every home by
              offering transparent services, fair pricing, and continuous
              support even after placement. With a growing network of skilled
              domestic professionals, we simplify your search for the perfect
              helping hand so you can focus on what truly matters—your family
              and lifestyle.
            </p>
          </div>
          <div className="service-btn">
            <Link to="/service">
              Services <MdOutlineCallMade />
            </Link>
          </div>
        </div>
      </section>
      <section className="why-choose-section">
        <div className="container">
          <div className="text-container">
            <p>Why Choose Us</p>
            <h2>We Will Make Absolutely Any Place Clean, Neat & Tidy.</h2>
          </div>
          <div className="reasons">
            <div className="row">
              <div className="col-md-6">
                <div className="reason">
                  <h3>
                    <BsCheck2Circle /> Trusted & Verified Maids
                  </h3>
                  <p>
                    Every maid we recommend is thoroughly background-checked,
                    verified, and trained to ensure your family's safety and
                    comfort.
                  </p>
                </div>
                <div className="reason">
                  <h3>
                    <BsCheck2Circle /> Personalized Matching
                  </h3>
                  <p>
                    We understand every household is unique — our consultants
                    carefully match candidates to your specific needs and
                    preferences.
                  </p>
                </div>
                <div className="reason">
                  <h3>
                    <BsCheck2Circle /> Transparent Pricing
                  </h3>
                  <p>
                    No hidden charges or middlemen. We believe in fair,
                    transparent service fees and complete clarity at every step.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="reason">
                  <h3>
                    <BsCheck2Circle /> Post-Placement Support
                  </h3>
                  <p>
                    Our support doesn’t stop at hiring. We offer follow-up
                    assistance to ensure smooth communication between clients
                    and helpers.
                  </p>
                </div>
                <div className="reason">
                  <h3>
                    <BsCheck2Circle /> Wide Range of Services
                  </h3>
                  <p>
                    From full-time live-in maids to part-time housekeepers,
                    cooks, babysitters, and elderly caregivers — we have
                    reliable staff for every need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="how-its-work">
        <h2>How Maidora CRM Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Maidora simplifies maid management by connecting clients, maids, and
          agents in one powerful platform — from registration to review.
        </p>
        <div className="container">
          <div className="steps-row">
            <div className="step">
              <div className="icon">
                <FaUserTie />
              </div>
              <h3>Register & Onboard</h3>
              <p>
                Clients, maids, and agents register on Maidora CRM. Each user
                gets a personalized dashboard to manage their activities
                efficiently.
              </p>
            </div>
            <div className="step">
              <div className="icon">
                <FaUserFriends />
              </div>
              <h3>Connect & Match</h3>
              <p>
                Clients post requirements, agents verify profiles, and maids are
                matched based on skills, location, and availability.
              </p>
            </div>
          </div>
          <div className="steps-row">
            <div className="step">
              <div className="icon">
                <FaTasks />
              </div>
              <h3>Manage & Track</h3>
              <p>
                Track assignments, attendance, and communication through a
                single dashboard. Automated reminders keep everyone updated.
              </p>
            </div>
            <div className="step">
              <div className="icon">
                <FaHandshake />
              </div>
              <h3>Review & Grow</h3>
              <p>
                Clients can rate services, agents monitor performance, and maids
                build trust through verified reviews and consistent work.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="latest-news-section">
        <p>Latest News</p>
          <h2>Maidora Spotlight: What’s New in Our Journey</h2>
        <div className="container">
          <div className="latest-news-row">
            <Link>
            <div className="news-card">
              <img src={banner} alt="News"/>
              <div className="text-row">
                  <h2>Things to know choosing a cleaning service</h2>
                  <p>Quam nulla maecenas aliquam non erat auctor tristique. Ut quis quam donec cum. Eu sed
                 ante scelerisque massa.</p>
                </div>
            </div>
           </Link>
           <Link>
            <div className="news-card">
              <img src={banner} alt="News"/>
              <div className="text-row">
                  <h2>Things to know choosing a cleaning service</h2>
                  <p>Quam nulla maecenas aliquam non erat auctor tristique. Ut quis quam donec cum. Eu sed
                 ante scelerisque massa.</p>
                </div>
            </div>
           </Link>
           <Link>
            <div className="news-card">
              <img src={banner} alt="News"/>
              <div className="text-row">
                  <h2>Things to know choosing a cleaning service</h2>
                  <p>Quam nulla maecenas aliquam non erat auctor tristique. Ut quis quam donec cum. Eu sed
                 ante scelerisque massa.</p>
                </div>
            </div>
           </Link>
          </div>
          <div className="btn-group">
              <Link to="/news">New Updates <MdOutlineCallMade /></Link>
          </div>
        </div>
      </section>
      <Pricing/>
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

export default Home;
