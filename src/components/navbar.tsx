import { useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/transparent.png";
import "../CSS/main.css";
import LoginModal from "./login";

function Navbar() {
  let navItems = ["Home", "UI-Library", "Tools", "Contact"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const navRef = useRef<HTMLDivElement>(null);

  const showNavBar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header>
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
      <div className="user">
        <img src="https://www.clipartmax.com/png/middle/364-3643767_about-brent-kovacs-user-profile-placeholder.png" alt="" />
        <a href="#" onClick={openModal}><span>Login</span></a>
      </div>
      <button className="nav-btn" onClick={showNavBar}>
        <FontAwesomeIcon icon={faBarsStaggered} />
      </button>
      {isModalOpen && <LoginModal onClose={closeModal} />}
    </header>
  );
}

export default Navbar;
