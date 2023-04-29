import "../CSS/main.css";
import pp from "../assets/pp.jpg";

function MyProfile() {
  return (
    <div className="contact-body">
      <div className="contact-wrapper">
      <h1>
        Welcome to <span>UIBoxx</span>
        <span id="in">.in</span>!
      </h1>
      <div className="contact-para">
        <p>
          At uiboxx.in, we're passionate about creating beautiful, functional
          designs for app and web. We believe that great design should be
          accessible to everyone, which is why we offer a wide variety of free
          components and designs that you can use in your own projects.
        </p>
      </div>
      <div className="contact-para">
        <p>
          At uiboxx.in, we're passionate about creating beautiful, functional
          designs for app and web. We believe that great design should be
          accessible to everyone, which is why we offer a wide variety of free
          components and designs that you can use in your own projects.
        </p>
      </div>
      <div className="contact-para">
        <p>
          We're always adding new components and designs to our collection, so
          be sure to check back often. And if you have any suggestions or
          requests, we'd love to hear from you! Just drop us a line using the
          contact mail on our website.
        </p>
      </div>
      <div className="contact-para">
        <p id="end-line">
          Thanks for stopping by uiboxx.in. We can't wait to see what you
          create!
        </p>
      </div>
        <div className="profile-card">
          <a href="mailto: contact@uiboxx.in">
            <button>Contact</button>
          </a>
        </div>
      </div>
      </div>
  );
}

export default MyProfile;
