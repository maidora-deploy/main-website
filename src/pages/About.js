import { React } from "react";
import { Link } from "react-router-dom";
import Accordion from "../components/Accordion";
import banner from "../assets/imagesx/medium-shot-people-cleaning-building.jpg";
import { MdOutlineCallMade } from "react-icons/md";
import CallToActionB2B from "../shared/call-to-action-b2b";
import CallToActionD2C from "../shared/call-to-action-d2c";
import CallToActionMaid from "../shared/call-to-action-maid";


const About = () => {
  return (
    <div className="about-page-template">
      <section className="hero-section">
        <div className="container">
          <h1>About Maidora</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>{" "}
              <span>/</span>
              <li className="breadcrumb-item active" aria-current="page">
                About
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="about-section">
        <div className="container">
          <div className="about-text-section">
            <h2>Maidora – Your Trusted Maid Consultancy Partner</h2>
          </div>
        </div>
        <div className="about-description">
          <p>
            In today’s busy world, reliable domestic support is not just a convenience — it’s a necessity. At Maidora, we understand how important it is to find someone you can trust to help manage your home and care for your loved ones. We are more than just a maid consultancy firm — we are your trusted partner in building safe, supportive, and harmonious households.
          </p>
          <p>Founded with the belief that every family deserves dependable and professional home assistance, Maidora bridges the gap between households and skilled domestic helpers. Whether you require a full-time live-in maid, a part-time housekeeper, a trained nanny, a cook, or a caregiver for elders, our dedicated team ensures you find the right person for the right job.</p>
          <p>We combine modern recruitment practices with traditional human values to create lasting relationships built on trust, transparency, and satisfaction. Every helper we recommend goes through a multi-step verification process, ensuring you receive only qualified and reliable candidates.</p>
          </div>
          <CallToActionB2B/>
       </section>
      <section className="vission-mission">
        <div className="main-title">
          <h2>Building Trust, Empowering Lives</h2>
          <p>At Maidora, we believe every home deserves dependable help and every worker deserves respect. Together, we’re creating a culture of honesty, safety, and compassion in domestic service.</p>
        </div>
        <div className="container">
          <div className="v-s-row">
            <Accordion/>
          </div>
        </div>
        <CallToActionD2C/>
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
                  <p className="news-description">Quam nulla maecenas aliquam non erat auctor tristique. Ut quis quam donec cum. Eu sed
                 ante scelerisque massa.</p>
                </div>
            </div>
           </Link>
           <Link>
            <div className="news-card">
              <img src={banner} alt="News"/>
              <div className="text-row">
                  <h2>Things to know choosing a cleaning service</h2>
                  <p className="news-description">Quam nulla maecenas aliquam non erat auctor tristique. Ut quis quam donec cum. Eu sed
                 ante scelerisque massa.</p>
                </div>
            </div>
           </Link>
           <Link>
            <div className="news-card">
              <img src={banner} alt="News"/>
              <div className="text-row">
                  <h2>Things to know choosing a cleaning service</h2>
                  <p className="news-description">Quam nulla maecenas aliquam non erat auctor tristique. Ut quis quam donec cum. Eu sed
                 ante scelerisque massa.</p>
                </div>
            </div>
           </Link>
          </div>
          <div className="btn-group">
              <Link to="/news">New Updates <MdOutlineCallMade /></Link>
          </div>
          <CallToActionMaid/>
        </div>
       </section>
      <section className="our-teams">
        <p>Our Teams</p>
        <h3>Meet our Expert Teams</h3>
        <div className="container">
          <div className="o-t-row">
            <div className="o-t-col">
              <img src={banner} alt="teams"/>
              <div className="t-details">
                <p>CEO</p>
                <h4>Parshant Singhani</h4>
              </div>
            </div>
            <div className="o-t-col">
              <img src={banner} alt="teams"/>
              <div className="t-details">
                <p>CMO</p>
                <h4>Shivam Kumar</h4>
              </div>
            </div>
            <div className="o-t-col">
              <img src={banner} alt="teams"/>
              <div className="t-details">
                <p>CFO </p>
                <h4>Amit Kumar</h4>
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
                  <input type="email" id="email" placeholder="Enter Email..."/> 
                  <button>Subscribe Now</button>
               </div>
             </div>
          </div>
      </section>
    </div>
  );
};

export default About;
