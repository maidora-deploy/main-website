import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-flex">
          <div className="footer-about-section">
            <img src={logo} className="footer-logo" alt="logo" />
            <p>
              Maidora is a professional maid consultancy firm dedicated to
              connecting households with reliable, trained, and
              background-verified domestic helpers.
            </p>
          </div>
          <div className="footer-useful-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/about">Company</Link>
              </li>
              <li>
                <Link to="/service">Services</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/case-study">CaseStudy</Link>
              </li>
              <li>
                <Link to="/partners">Partners</Link>
              </li>
            </ul>
          </div>
          <div className="footer-useful-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-conditions">Terms and Conditions</Link>
              </li>
              <li>
                <Link to="/disclamier">Disclamier</Link>
              </li>
              <li>
                <Link to="/support">Support</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="footer-follow-links">
            <h4>Follow Us</h4>
            <ul>
              <li>
                <Link>
                  <FaFacebookSquare />
                </Link>
              </li>
              <li>
                <Link>
                  <FaYoutubeSquare />
                </Link>
              </li>
              <li>
                <Link>
                  <FaInstagramSquare />
                </Link>
              </li>
              <li>
                <Link>
                  <FaLinkedin />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Maidora Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
