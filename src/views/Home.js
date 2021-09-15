import './home.css';
import aboutImg from './img/logo.png';
import Login from './Auth/Login';
const Home = () => {
  return (
    <div>
      <section id="header">
        <div class="header container">
          <div class="nav-bar">
            <div class="brand">
              <a href="#hero">
                <h1>
                  <span>E-</span>ClINIC
                </h1>
              </a>
            </div>
            <div class="nav-list">
              <div class="hamburger">
                <div class="bar"></div>
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
        <div class="hero container">
          <div>
            <h1>
              Great Place <span></span>
            </h1>
            <h1>
              To Receive <span></span>
            </h1>
            <h1>
              Care !<span></span>
            </h1>
            <a href="signup" type="button" class="cta">
              GET STARTED
            </a>
          </div>
        </div>
      </section>
      <section id="services">
        <div class="services container">
          <div class="service-top">
            <h1 class="section-title">
              Serv<span>i</span>ces
            </h1>
          </div>
          <div class="service-bottom">
            <div class="service-item">
              <div class="icon">
                <img src="https://img.icons8.com/bubbles/100/000000/services.png" />
              </div>
              <h2>Medical Record</h2>
              <p>
                Management and follow up of patients medical record , you can
                add , edit and delete a medical record .
              </p>
            </div>
            <div class="service-item">
              <div class="icon">
                <img src="https://img.icons8.com/bubbles/100/000000/services.png" />
              </div>
              <h2>Medical Exam</h2>
              <p>
                Management of patients medical exam , you can now examine
                patients and create online prescriptions .
              </p>
            </div>
            <div class="service-item">
              <div class="icon">
                <img src="https://img.icons8.com/bubbles/100/000000/services.png" />
              </div>
              <h2>Appointments</h2>
              <p>
                Create regular and recuring appointments , no more waiting in
                clinic.
              </p>
            </div>
            <div class="service-item">
              <div class="icon">
                <img src="https://img.icons8.com/bubbles/100/000000/services.png" />
              </div>
              <h2>Statistics</h2>
              <p>
                Now it's easier to do any Statistics about any diseases in the
                school based on age , sex and existence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div class="about container">
          <div class="col-left">
            <div class="about-img">
              <img src={aboutImg} alt="img" />
            </div>
          </div>
          <div class="col-right">
            <h1 class="section-title">
              About <span>US</span>
            </h1>
            <h2>Front End / Back End Developers</h2>
            <p>
              We are a team of five people studies in the higher national school
              of Sidi Bel Abbes , three of us are a front end developers and the
              others are back end developers , we build this website using
              Reactjs for front end and Django Rest Api for back end .
            </p>
          </div>
        </div>
      </section>
      <section id="contact">
        <div class="contact container">
          <div>
            <h1 class="section-title">
              Contact <span>info</span>
            </h1>
          </div>
          <div class="contact-items">
            <div class="contact-item">
              <div class="icon">
                <img src="https://img.icons8.com/bubbles/100/000000/phone.png" />
              </div>
              <div class="contact-info">
                <h1>Phone</h1>
                <h2>0657150423</h2>
                <h2>0798660244</h2>
              </div>
            </div>
            <div class="contact-item">
              <div class="icon">
                <img src="https://img.icons8.com/bubbles/100/000000/new-post.png" />
              </div>
              <div class="contact-info">
                <h1>Email</h1>
                <h2>e-clinic@gmail.com</h2>
              </div>
            </div>
            <div class="contact-item">
              <div class="icon">
                <img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" />
              </div>
              <div class="contact-info">
                <h1>Address</h1>
                <h2>
                  BP 73, Bureau de poste EL WIAM Sidi Bel Abbés 22016, Algérie
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <script src="./app.js"></script>
    </div>
  );
};
export const AuthNavBar = () => {
  return (
    <section id="header">
      <div class="header container">
        <div class="nav-bar">
          <div class="brand">
            <a href="#hero">
              <h1>
                <span>E-</span>ClINIC
              </h1>
            </a>
          </div>
          <div class="nav-list">
            <div class="hamburger">
              <div class="bar"></div>
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
};
export default Home;
