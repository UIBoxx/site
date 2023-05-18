import { useRef, useState } from "react";
import { Helmet } from "react-helmet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/transparent.png";
import "../CSS/main.css";

function Navbar() {
  let navItems = ["Home", "UI-Library", "Tutorials", "Contact"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const navRef = useRef<HTMLDivElement>(null);

  const showNavBar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };

  return (
    <header>
      <Helmet>
        <meta
          name="description"
          content="Explore free tutorials on different algorithms in DSA with visualization and demos. Master Data Structures and Algorithms, improve problem-solving skills, and enhance algorithmic understanding And Discover our collection of free UI components featuring various interactive elements, visualizations, and demos. Enhance your website's user experience with our easy-to-use and customizable UI components."
        />
        <meta
          name="keywords"
          content="free UI components, UI component features, interactive elements, visualizations, demos, user experience, customizable UI components,DSA algorithms, algorithm tutorials, algorithm visualizations, algorithm demos, DSA visualization, DSA tutorial, algorithmic concepts, data structures and algorithms, free tutorials, interactive learning"
        />
      </Helmet>
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Loading" />
        </a>
      </div>
      <nav ref={navRef}>
        {navItems.map((items, index) => (
          <li
            className={selectedIndex === index ? "active" : ""}
            onClick={() => {
              setSelectedIndex(index);
            }}
            key={items}
          >
            <a href={items == "Home" ? "/" : items}>{items}</a>
          </li>
        ))}
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FontAwesomeIcon icon={faBarsStaggered} />
      </button>
    </header>
  );
}

export default Navbar;
