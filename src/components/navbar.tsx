import { useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faTimes } from "@fortawesome/free-solid-svg-icons";

import "../CSS/main.css";

function Navbar() {

	let navItems=['Home','Web-Designs','App-Designs','Contact',]
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
				<h3>UIBoxx<span></span></h3>
				<h4>.in</h4>
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
			</nav>
			<button
				className="nav-btn"
				onClick={showNavBar}>
				<FontAwesomeIcon icon={faBarsStaggered}  />
			</button>
			{/* <p>+977-9869908380</p> */}
		</header>
	);
}

export default Navbar;


