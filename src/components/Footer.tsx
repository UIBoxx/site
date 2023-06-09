import "../CSS/main.css";

function Footer() {
  return (
    <footer>
      <div className="address-container">
        <div className="address">
        <div className="address">
          <h5>contact@uiboxx.in</h5>
          <h5>Kathmandu, Nepal</h5>
          <h5>44600</h5>
          <div className="underline"></div>
        </div>
          <ul className="beautiful-bullets">
            <li>
              <a href="/tutorials">
                <h4>Tutorials</h4>
              </a>
            </li>
            <li>
              <a href="/UI-Library">
                <h4>Free UI Components</h4>
              </a>
            </li>
            <li>
              <a href="/tools">
                <h4>Tools</h4>
              </a>
            </li>
            <li>
              <a href="/privacy-policy">
                <h4>Our Privacy Policy</h4>
              </a>
            </li>
            <li>
              <a href="/terms-and-conditions">
                <h4>Terms and Conditions</h4>
              </a>
            </li>
            <li>
              <a href="/disclaimer">
                <h4>Disclaimer</h4>
              </a>
            </li>
            <li>
              <a href="/about-us">
                <h4>About Us</h4>
              </a>
            </li>
          </ul>
        
        </div>
      </div>
      <p>
      <a href="/" style={{textDecoration:"none"}}><span>UIBoxx </span></a>2023, all rights reserved <br />
      </p>
    </footer>
  );
}

export default Footer;
