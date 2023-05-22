import "../CSS/main.css";
import { Helmet } from "react-helmet";

function MyProfile() {
  return (
    <div className="contact-body">
      <Helmet>
        <meta
          property="description"
          content="Contact us for any inquiries or feedback regarding our DSA Algorithm Tutorials & free UI components and designs. We are here to assist you and provide support."
        />
        <meta
          property="keywords"
          content="contact us, DSA algorithm tutorials, free UI, free App designs, free web UI, inquiries, feedback, support"
        />
        <title>Contact Us | UIBoxx.in</title>
      </Helmet>
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
            <br />
            
          </p>
        </div>
        {/* <div className="email-card">
          <a href="mailto: contact@uiboxx.in">
            <button>E-mail</button>
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default MyProfile;
