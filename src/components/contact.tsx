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
            At <span id="websiteName">UIBoxx.in</span> we are dedicated to
            providing web designers and developers with the resources they need
            to bring their creative visions to life. Our platform offers a wide
            range of tools and components that empower you to create exceptional
            user experiences and stunning web designs.
            <br />
            Discover our extensive collection of free UI components that are
            ready to be seamlessly integrated into your projects. From buttons
            and forms to cards and navigation menus, our library of HTML, CSS,
            and JavaScript components saves you valuable time and effort,
            allowing you to focus on designing impactful user interfaces.
            <br /><br />
            But we don't stop there. We understand the importance of staying
            ahead of design trends and pushing the boundaries of creativity.
            That's why we offer innovative design tools, including our
            Neumorphism and Glassmorphism tools. With our Neumorphism tool, you
            can effortlessly create sleek and modern interfaces, complete with
            soft shadows and subtle gradients. Dive into the enchanting world of
            Glassmorphism using our powerful tool, which adds depth and elegance
            to your designs through translucent elements and frosted glass
            effects.
            <br /><br />
            In addition to these tools, our SVG tool boasts a unique feature –
            the square_circle shape generator. Unleash your creativity and
            explore the possibilities of combining square and circular shapes in
            your SVG designs. This tool allows you to customize and generate
            visually striking shapes that will add an extra layer of visual
            interest to your web projects.
            <br /><br />
            Furthermore, our Color Gradient Generator tool enables you to design
            captivating color schemes that seamlessly transition between hues.
            Enhance the visual appeal and mood of your designs by experimenting
            with various gradient types, starting and ending colors, and
            different directions and intensities.
            <br /><br />
            At <span id="websiteName">UIBoxx.in</span>, we are committed to
            providing you with a comprehensive platform that supports your
            creative endeavors. Whether you are an experienced professional or
            just starting your web design journey, our resources and inspiration
            will help you achieve remarkable results. Join our vibrant community
            today and unlock the tools and knowledge that will revolutionize
            your web design projects.
          </p>
        </div>
        
        <div className="contact-para">
          <p>
            If you have any suggestions or requests, we'd love to hear from you!
            Just drop us a line using the contact form or a mail on our website.
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
