import {React} from 'react';
import { Link } from "react-router-dom";
import serviceBanner from '../assets/imagesx/full-shot-people-cleaning-building.jpg';
import CallToActionD2C from '../shared/call-to-action-d2c';

const Service = () =>{
  return(
    <div className='serive-page-template'>
      <section className='heros-section'>
        <div className="container">
          <h1>Services</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>{" "}
              <span>/</span>
              <li className="breadcrumb-item active" aria-current="page">
                Service
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className='service-list'>
        <div className='container'>
          <h2>Transforming Work, One Service at a Time</h2>
          <p> Explore a range of trusted household and staffing services designed 
            to make your life easier. Reliable, verified, and always professional.</p>
        </div>
        <div className='s-l-row'>
          <div className='s-l-col service-card'>
            <img src={serviceBanner} alt='service 1'/>
            <div className='service-description'>
              <h3>Full-Time Maid</h3>
              <p>Works full day, goes home at night </p>
            </div>
          </div>
          <div className='s-l-col service-card'>
            <img src={serviceBanner} alt='service 1'/>
            <div className='service-description'>
              <h3>Part-Time Maid</h3>
              <p>Specific hours, may work for multiple homes </p>
            </div>
          </div>
          <div className='s-l-col service-card'>
            <img src={serviceBanner} alt='service 1'/>
            <div className='service-description'>
              <h3>Live-In Maid</h3>
              <p>Stays at employer's home, 24-hour service</p>
            </div>
          </div>
          <div className='s-l-col service-card'>
            <img src={serviceBanner} alt='service 1'/>
            <div className='service-description'>
              <h3>Japa Maid</h3>
              <p>Specializes in newborn/mother care</p>
            </div>
          </div>
          <div className='s-l-col service-card'>
            <img src={serviceBanner} alt='service 1'/>
            <div className='service-description'>
              <h3>Babysitter/Nanny</h3>
              <p>Child care, education, supervision</p>
            </div>
          </div>
          <div className='s-l-col service-card'>
            <img src={serviceBanner} alt='service 1'/>
            <div className='service-description'>
              <h3>Elderly Care Maid</h3>
              <p>Elderly assistance, daily living support</p>
            </div>
          </div>
          <div className='s-l-col service-card'>
            <img src={serviceBanner} alt='service 1'/>
            <div className='service-description'>
              <h3>Patient Caretaker</h3>
              <p>Medical and recovery assistance</p>
            </div>
          </div>
          <div className='s-l-col service-card'>
            <img src={serviceBanner} alt='service 1'/>
            <div className='service-description'>
              <h3>Cook</h3>
              <p>Meal preparation and kitchen tasks b</p>
            </div>
          </div>
          <div className='s-l-col service-card'>
            <img src={serviceBanner} alt='service 1'/>
            <div className='service-description'>
              <h3>Housekeeper/Helper</h3>
              <p>Cleaning, laundry, miscellaneous chores</p>
            </div>
          </div>
          <div className='s-l-col service-card'>
            <img src={serviceBanner} alt='service 1'/>
            <div className='service-description'>
              <h3>Gardener</h3>
              <p>Outdoor plants and gardening </p>
            </div>
          </div>
        </div>
         <CallToActionD2C/>
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
  )
}

export default Service;