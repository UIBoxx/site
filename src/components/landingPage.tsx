import "../CSS/main.css";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Loading from "../assets/loading.gif";

function LandingPage() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="landingPage">
      <Helmet>
        <meta
          name="description"
          content="Explore free tutorials on different algorithms in DSA with visualization and demos. Master Data Structures and Algorithms, improve problem-solving skills, and enhance algorithmic understanding And Discover our collection of free UI components featuring various interactive elements, visualizations, and demos. Enhance your website's user experience with our easy-to-use and customizable UI components."
        />
        <meta
          name="keywords"
          content="free UI components, UI component features, interactive elements, visualizations, demos, user experience, customizable UI components,DSA algorithms, algorithm tutorials, algorithm visualizations, algorithm demos, DSA visualization, DSA tutorial, algorithmic concepts, data structures and algorithms, free tutorials, interactive learning, svgshapes, free SVG shape generator, squarecle, uiboxx.in"
        />
        <title>Home | UIBoxx.in</title>
      </Helmet>
      <div className="landingpage-head">
        <h2>
          Design <span>With Us</span>
        </h2>
      </div>
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
      <div className="service" id="service">
        <div className="services">
          <div className="service-type" id="ai">
            <h3>Free UI</h3>
            <h2>Components & Design</h2>
            <a href="/UI-Library">Discover</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
