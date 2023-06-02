import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/transparent.png";
import "../CSS/main.css";
import LoginModal from "./login";

function Navbar() {
  let navItems = ["Home", "UI-Library", "Tools", "Contact"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the user is already logged in
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

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

  const handleLoginSuccess = (username: string) => {
    setIsLoggedIn(true);
    setUsername(username);
    localStorage.setItem("username", username); // Store the username in localStorage
    closeModal();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    localStorage.removeItem("username"); // Remove the username from localStorage
  
    // Perform logout API request
    fetch("https://uiboxxapi.netlify.app/.netlify/functions/api/users/logout", {
      method: "POST",
      credentials: "include", // Include cookies in the request
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message); // Optional: Handle the response data
        console.log('logout successfully.')
      })
      .catch((error) => {
        console.error("Logout error:", error); // Optional: Handle the error
      });
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
            <a href={items === "Home" ? "/" : items}>{items}</a>
            
          </li>
        
        ))}
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </nav>
      <div className="user">
      <i><FontAwesomeIcon icon={faUser} style={{color: "#fcfcfc",}} /></i>
        {isLoggedIn ? (
          <>
            <span>{username.substring(0, username.indexOf("@"))}</span>
            <a href="#" onClick={handleLogout}><span style={{color:'red'}}>Logout</span></a>
          </>
        ) : (
          <a href="#" onClick={openModal}><span>Login</span></a>
          
        )}
      </div>
      <button className="nav-btn" onClick={showNavBar}>
        <FontAwesomeIcon icon={faBarsStaggered} />
      </button>
      {isModalOpen && <LoginModal onClose={closeModal} onLoginSuccess={handleLoginSuccess} />}
    </header>
  );
}

export default Navbar;
