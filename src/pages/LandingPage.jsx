import "./LandingPage.css";
import { Link } from "react-router-dom";
import Stats from "../components/Stats/Stats";
import WhyNabhya from "../components/WhyNabhya/WhyNabhya";
const LandingPage = () => {
  return (
   <div className="landing-container">

  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="background-video"
  >
    <source src="/animation.mp4" type="video/mp4" />
  </video>

  <div className="stars"></div>
  <div className="stars2"></div>
      

      {/* Navbar */}
      <nav className="navbar">
      <div className="logo-section">
 
  <div className="logo-section">
  <video
    className="animated-logo"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/NABHYA.mp4" type="video/mp4" />
  </video>

  <h2 className="logo-text">NABHYA</h2>
</div>

</div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">

        <div className="hero-left">
          <h1>
            AI Powered <br />
            Satellite Cloud <br />
            Removal System
          </h1>

          <p>
            Transform cloud contaminated satellite imagery into
            actionable geospatial intelligence using Generative AI,
            Temporal Fusion and Object Detection.
          </p>

          <Link to="/upload">
            <button className="start-btn">
              Start Analysis 
            </button>
          </Link>
        </div>

        <div className="hero-right">
          <img
            src="/earth.png"
            alt="earth"
            className="earth"
          />
        </div>

            </div>

      {/* Stats Section */}

     {/* Features */}
<section id="features" className="features">

  <div className="card">
    <h3> Cloud Removal</h3>
    <p>
      AI reconstructs hidden surfaces from cloud cover.
    </p>
  </div>

  <div className="card">
    <h3> Geo Intelligence</h3>
    <p>
      Detect roads, bridges, rivers and infrastructures.
    </p>
  </div>

  <div className="card">
    <h3> Smart Reports</h3>
    <p>
      Generate intelligent PDF reports automatically.
    </p>
  </div>

</section>

{/* Stats Section */}
<Stats />
<WhyNabhya />

    </div>
  );
};

export default LandingPage;