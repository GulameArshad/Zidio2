import './App.css';
import background from './assets/Images/BG.png';
import logo from './assets/Images/logo.png';
import heroThumb from './assets/Images/hero-thumb.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import mapPin from './assets/Images/map-pin-line.png';
import heroshape from './assets/Images/hero-shape.png'; // Make sure to import this if it's used
import facebookIcon from './assets/Images/facebook-circle-line.png'; // Make sure to import this if it's used
import Button from '@mui/material/Button';
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded';



function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:5000/api/items');
        setItems(result.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App"> 
      <div className="top-bar">
        <div className="container">
          <div className="left-section">
            <p>
              <img src={mapPin} alt="Location" />
              Bengaluru, Karnataka, India &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📩 support@zidio.in
            </p>
          </div>
          <div className="right-section">
            <p>
              ⏰ 09:30 am - 05:30 pm &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://facebook.com"><img src={facebookIcon} alt="Facebook" /></a> | 
              <a href="https://twitter.com">Twitter</a> | 
              <a href="https://Instagram.com">Instagram</a> | 
              <a href="https://Youtube.com">Youtube</a>
            </p>
          </div>
        </div>
      </div>

      <header>
        <nav>
          <div className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="referals"></div>
            <a href="#Home">Home</a>
            <a href="#about">About</a>
            <a href="#Services">Services</a>
            <a href="#Contact">Contact</a>
            <a href="#Careers">Careers</a>
            <button className="icon-button">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="grey">
                <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
              </svg>
              <button variant="text" startIcon={<ShoppingCartRounded />}>
  Add item</button>
              <button className="custom-button">Get A Quote</button>
            </button>
          </div>
        </nav>
      </header>

      <section id="about">
        <div className="hero-thumb">
          <img className="background" src={background} alt="Background" />
          <img className="gif" src={heroshape} alt="Hero Shape" />
          <img className="hero-image" src={heroThumb} alt="Hero Thumbnail" />
          <button className="custom-button">Let's Talk</button>
          <button className="custom-button">Read More</button>
        </div>

        <div className="info-blocks">
          <div className="block">
            <h3>3+ Year Exp</h3>
            <p className="para">
              Over 3 years of expertise delivering unparalleled solutions and insights for your success
            </p>
          </div>

          <div className="block">
            <h3>Dedicated Members</h3>
            <p className="para">
              Passionate team members dedicated to exceeding expectations and achieving mutual success
            </p>
          </div>

          <div className="block">
            <h3>Valuable Support</h3>
            <p className="para">
              Tailored support and guidance ensuring reliability and innovation every step of the way
            </p>
          </div>
        </div>

        <div className="software-dev-services">
          <div className="image-section">
            <div className="image-stack">
              <img src="/assets/cp1.jpeg" alt="CP 1" />
              <img src="/assets/cp2.jpeg" alt="CP 2" />
              <img src="/assets/exp.jpeg" alt="Experience" />
            </div>
          </div>

          <div className="text-section">
            <h4>Software Development & Services</h4>
            <p>
              <b>Your Reliable Partner for IT Services Dedicated to Your Success</b>
              <br />
              At Zidio, we're your trusted IT services partner, ensuring your success with reliable solutions tailored to your business needs. Count on us for robust software development, comprehensive IT support, and cutting-edge technology solutions that empower your business to thrive.
            </p>
          </div>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <h3>2021</h3>
            <p>Launched new development initiative for AI-driven projects.</p>
          </div>
        </div>
      </section>

      <section id="team">
        <h2>Meet Our Team</h2>
        <div className="team-profiles">
          <div className="profile">
            <h3>John Doe</h3>
            <p>Lead Developer</p>
            <video src="/assets/john_interview.mp4" controls></video>
          </div>
        </div>
      </section>

      <section id="achievements">
        <h2>Achievements</h2>
        <div className="achievements-gallery">
          <img src="/assets/award1.jpg" alt="Award 1" />
          <p>Award for Excellence in Development</p>
        </div>
      </section>

      <section id="careers">
        <h2>Join Our Team</h2>
        <div className="job-listings">
          <div className="job">
            <h3>Frontend Developer</h3>
            <p>Requirements: HTML, CSS, JavaScript</p>
            <button>Apply Now</button>
          </div>
        </div>
      </section>

      <section id="reviews">
        <h2>Client Reviews</h2>
        <div className="reviews">
          <p>"Great company, professional and innovative!" - Client A</p>
        </div>
      </section>

      <footer>
        <p>© 2024 Zidio Development. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
