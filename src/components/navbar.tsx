import { useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.jpg";
import "../CSS/main.css";

function Navbar() {

	let navItems=['Home','UI-Library','Tutorials','Contact']
	const [selectedIndex, setSelectedIndex] = useState(-1);

	const navRef = useRef<HTMLDivElement>(null);

	const showNavBar = () => {
        if (navRef.current) {
          navRef.current.classList.toggle('responsive_nav');
        }
      }
      

	return (
		<header>
			<div className="logo">
				<img src={logo} alt="Loading" />
			</div>
			<nav ref={navRef}>
				{navItems.map((items,index)=>(
					<li className={selectedIndex === index ? "active" : ""} onClick={() => {
						setSelectedIndex(index);
					  }} key={items}><a href={items=='Home'?'/':items}>{items}</a></li>
				))}
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavBar}>
					<FontAwesomeIcon icon={faTimes} />
				</button>
				{/* <a className="upload-btn" href="/upload">Upload</a> */}
			</nav>
			<button
				className="nav-btn"
				onClick={showNavBar}>
				<FontAwesomeIcon icon={faBarsStaggered}  />
			</button>
		</header>
	);
}

export default Navbar;


