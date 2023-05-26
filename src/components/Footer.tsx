import "../CSS/main.css";

function Footer() {
  return (
    <footer>
      <div className="address-container">
        <div className="address">
          <a href="/tutorials">
            <h4>Tutorials</h4>
          </a>
          <a href="">
            <h4>Policy</h4>
          </a>
          <a href="/UI-Library">
            <h4>Free UI Components</h4>
          </a>
          <a href="/tools">
            <h4>Tools</h4>
          </a>

          <a href="/contact">
            <h4>Contact Us</h4>
          </a>
        </div>
        <div className="address">
          <h5>Kathmandu, Nepal</h5>
          <h5>44600</h5>
          <h5>contact@uiboxx.in</h5>
        </div>
      </div>
      <p><span>UIBoxx </span>2023, all rights reserved <br /></p>
    </footer>
  );
}

export default Footer;
