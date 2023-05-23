import "../CSS/main.css";
import { Helmet } from "react-helmet";

function MyProfile() {
  return (
    <div className="contact-body">
      <Helmet>
        <meta
          name="description"
          content="Contact us for any inquiries or feedback regarding our DSA Algorithm Tutorials & free UI components and designs. We are here to assist you and provide support."
        />
        <meta
          name="keywords"
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
          Welcome to UIBoxx.in, your go-to destination for free UI components, tech news, customizable designs, and interactive tutorials. We are passionate about providing developers and designers with the resources they need to create exceptional user experiences. Our mission is to empower creators by offering a wide range of free UI components that can be easily integrated into web and app designs. We believe that great design should be accessible to all, regardless of budget or experience level. With UIBoxx.in, you can unlock the power of interactive learning and elevate your projects to new heights.
          </p>
        </div>
        <div className="contact-para">
          <p>
          At UIBoxx.in, we offer a diverse range of free UI components meticulously crafted to meet the highest standards of design and functionality. From buttons and cards to whole designs, our extensive library provides you with the building blocks you need to bring your ideas to life. We also provide up-to-date tech news, keeping you informed about the latest trends and advancements in the industry. Our customizable designs allow you to create unique and visually stunning interfaces, tailored to your specific needs and branding.
          </p>
        </div>
        <div className="contact-para">
          <p>
            If you have any suggestions or
            requests, we'd love to hear from you! Just drop us a line using the
            contact form or a mail on our website.
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
