import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../CSS/main.css";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";

function LandingPage() {
  return (
    <div className="landingPage">
      <div className="landingpage-head"><h2>Unlock <span>Your Potential</span></h2></div>
      <section className="hero-container">
        <div className="hero-left">
          <h1>Discover Beautiful UI Designs</h1>
          <p>
            Get access to a wide range of free UI designs for web and app
            development.
          </p>
          <a href="/UI-Library" className="hero-btn">Discover</a>
        </div>
        <div className="hero-background">
          <img
            src="https://th.bing.com/th/id/R.69e18472c9b05472fd1c1cd53c10da5e?rik=vNb1ws4lPiK8Og&pid=ImgRaw&r=0"
            alt=""
          />
        </div>
        <div className="hero-right">
          <h1>Unleash the Power of Deep Algorithmic Understanding in Programming</h1>
          <p>
          Interactive tutorials and visualizations for programming algorithms.
          </p>
          <a href="/Tutorials" className="hero-btn">Get Started</a>
        </div>
      </section>
      {/* <section className="stats">
        <div className="stats-card">
            <h2>10+</h2>
            <h3>Designs</h3>
        </div>
        <div className="stats-card">
            <h2>10+</h2>
            <h3>Tutorials</h3>
        </div>
        <div className="stats-card">
            <h2>1K+</h2>
            <h3>Users</h3>
        </div>
      </section> */}
      <section className="features-container">
        <div className="feature-card">
                   <h2>Free User Interfaces</h2>
            <p>Discover the potential of our Free UI feature and elevate your website with beautifully designed interfaces. Gain access to a wide range of professionally crafted designs and components that enhance both the visual appeal and functionality of your site. Whether you're a beginner or an experienced designer, our Free UI empowers you to effortlessly create stunning interfaces using our provided code. Customize colors, typography, and layout to align with your brand identity and captivate your audience. Unlock the power of our Free UI and make a lasting impression with your website's design.</p>
        </div>
        <div className="feature-card">
            <h2>Algorithms Visualization</h2>
            <p>Experience the captivating Algorithms Visualization feature and delve into the inner workings of complex algorithms. Witness real-time step-by-step execution, bringing algorithms to life through interactive visualizations. Whether you're a student, developer, or simply curious, this feature provides an immersive learning experience to comprehend algorithm logic and problem-solving. Explore a wide range of algorithms in sorting, searching, graph traversal, and machine learning domains. Enhance your problem-solving skills and accelerate understanding with this engaging educational tool.</p>
        </div>
      </section>
        <section className="desc">
            <p>At <span>UIBoxx.in</span>, we are a dedicated team of designers and developers committed to providing exceptional user experiences and empowering individuals in the digital realm. Our mission is to offer innovative solutions and resources that enhance your online presence. We believe in providing beautifully designed UI elements through our Free UI feature, while also offering comprehensive coding resources and tutorials to help you stay ahead in the industry. We value creativity, collaboration, and continuous improvement, and we are always striving to exceed your expectations. Join us on this journey to create stunning interfaces, unlock the power of algorithms, and make a lasting impact in the digital world.</p>
        </section>
    </div>
  );
}

export default LandingPage;
