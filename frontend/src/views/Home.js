import React from 'react';
import './home.css';
import aboutImg from './img/logo.png';

const Home = () => (
  <div
    className="homePage"
    // style={{ fontSize: '10px', fontFamily: 'Montserrat; sans-sarif;' }}
  >
    <section id="header">
      <div className="header container" style={{ zoom: '80%' }}>
        <div className="nav-bar">
          <div className="brand">
            <a href="#hero">
              <h1>
                <span>E-</span>ClINIC
              </h1>
            </a>
          </div>
          <div className="nav-list">
            <div className="hamburger">
              <div className="bar" />
            </div>
            <ul>
              <li>
                <a href="#hero" data-after="Home">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" data-after="Service">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" data-after="About">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" data-after="Contact">
                  Contact
                </a>
              </li>
              <li>
                <a href="login" data-after="Contact">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="hero">
      <div className="hero container" style={{ fontSize: '0.5rem' }}>
        <div style={{ zoom: '70%' }}>
          <h1>
            Great Place <span />
          </h1>
          <h1>
            To Receive <span />
          </h1>
          <h1>
            Care !<span />
          </h1>
          <a href="signup" type="button" className="cta">
            GET STARTED
          </a>
        </div>
      </div>
    </section>
    <section id="services">
      <div className="services container" style={{ zoom: '70%' }}>
        <div className="service-top">
          <h1 className="section-title">
            Serv<span>i</span>ces
          </h1>
        </div>
        <div className="service-bottom">
          <div className="service-item">
            <div className="icon">
              <img
                src="https://img.icons8.com/bubbles/100/000000/services.png"
                alt="services"
              />
            </div>
            <h2>Medical Record</h2>
            <p>
              Management and follow up of patients medical record , you can add
              , edit and delete a medical record .
            </p>
          </div>
          <div className="service-item">
            <div className="icon">
              <img
                src="https://img.icons8.com/bubbles/100/000000/services.png"
                alt="services"
              />
            </div>
            <h2>Medical Exam</h2>
            <p>
              Management of patients medical exam , you can now examine patients
              and create online prescriptions .
            </p>
          </div>
          <div className="service-item">
            <div className="icon">
              <img
                src="https://img.icons8.com/bubbles/100/000000/services.png"
                alt="services"
              />
            </div>
            <h2>Appointments</h2>
            <p>
              Create regular and recuring appointments , no more waiting in
              clinic.
            </p>
          </div>
          <div className="service-item">
            <div className="icon">
              <img
                src="https://img.icons8.com/bubbles/100/000000/services.png"
                alt="services"
              />
            </div>
            <h2>Statistics</h2>
            <p>
              Now it&apos;s easier to do any Statistics about any diseases in
              the school based on age , sex and existence.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="about">
      <div className="about container" style={{ zoom: '80%' }}>
        <div className="col-left">
          <div className="about-img">
            <img src={aboutImg} alt="img" />
          </div>
        </div>
        <div className="col-right">
          <h1 className="section-title">
            About <span>US</span>
          </h1>
          <h2>Front End / Back End Developers</h2>
          <p>
            We are a team of five people studies in the higher national school
            of Sidi Bel Abbes , three of us are a front end developers and the
            others are back end developers , we build this website using Reactjs
            for front end and Django Rest Api for back end .
          </p>
        </div>
      </div>
    </section>
    <section id="contact">
      <div className="contact container" style={{ zoom: '80%' }}>
        <div>
          <h1 className="section-title">
            Contact <span>info</span>
          </h1>
        </div>
        <div className="contact-items">
          <div className="contact-item">
            <div className="icon">
              <img
                src="https://img.icons8.com/bubbles/100/000000/phone.png"
                alt="phone"
              />
            </div>
            <div className="contact-info">
              <h1>Phone</h1>
              <h2>0657150423</h2>
              <h2>0798660244</h2>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <img
                src="https://img.icons8.com/bubbles/100/000000/new-post.png"
                alt="new-post"
              />
            </div>
            <div className="contact-info">
              <h1>Email</h1>
              <h2>e-clinic@esi-sba.dz</h2>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <img
                src="https://img.icons8.com/bubbles/100/000000/map-marker.png"
                alt="map-marker"
              />
            </div>
            <div className="contact-info">
              <h1>Address</h1>
              <h2>
                BP 73, Bureau de poste EL WIAM Sidi Bel Abbés 22016, Algérie
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <script src="./app.js" />
  </div>
);

export const AuthNavBar = () => (
  <section id="header" className="homePage">
    <div className="header container" style={{ zoom: '80%' }}>
      <div className="nav-bar">
        <div className="brand">
          <a href="/">
            <h1>
              <span>E-</span>ClINIC
            </h1>
          </a>
        </div>
        <div className="nav-list">
          <div className="hamburger">
            <div className="bar" />
          </div>
          <ul>
            <li>
              <a href="/" data-after="Home">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
