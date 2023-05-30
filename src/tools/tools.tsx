import "../CSS/tools.css";

function AllTools() {
  return (
    <div className="all-tools-body">
      <div className="desc">
        <div className="about-page">
          <p id="styledP">
            "Experience the <span>future of UI design</span>"
          </p>
        </div>
      </div>
      <div className="all-tools-header">
        <div className="All-tools-card">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="All-tools-card-inner">
            <h2>Glassmorphism</h2>
            <a href="/glassbox">Create</a>
          </div>
        </div>
        <div className="Neu-tool-card">
          <h2>Neumorphism effects</h2>
          <a href="/neubox">Create</a>
        </div>
        <div className="gr-card">
          <div className="card__content">
            <h2>Color Gradient Generator</h2>
            <a href="/Color-Gradient">Generate</a>
          </div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
        </div>
      </div>
      <div className="desc">
        <div className="about-page">
          <p>
            Elevate your designs to new heights with our innovative Neumorphism
            tool. With just a few clicks, effortlessly create sleek and modern
            user interfaces that feature soft, realistic shadows and subtle
            gradients. Our intuitive interface puts customization at your
            fingertips, allowing you to fine-tune the size, depth, and color of
            your Neumorphic elements. Step into the future of UI design and
            captivate your users with this cutting-edge trend that will set your
            projects apart. <br />
            <br />
            Prepare to mesmerize your audience with the enchanting world of
            Glassmorphism, made accessible through our powerful tool. Infuse
            your user interfaces with an elegant touch of depth using
            translucent elements and mesmerizing frosted glass effects. Dive
            into a realm of creativity as you explore customizable blur,
            transparency, and color settings, enabling you to craft stunning
            glass-like buttons, cards, and overlays. Elevate your designs with
            the captivating allure of Glassmorphism and leave a lasting
            impression on your users. <br />
            <br />
            But that's not all—unleash your creative prowess with our Color
            Gradient Generator tool. Design breathtaking color schemes that
            seamlessly transition from one hue to another, injecting depth and
            visual interest into your web projects. With various gradient types
            at your disposal, you can experiment with different styles,
            customize starting and ending colors, and explore diverse directions
            and intensities. Enhance the overall aesthetics and mood of your
            designs with the perfect blend of colors that our tool empowers you
            to create. Join <span>UIBoxx.in</span> today and unlock the
            potential of these powerful tools that will revolutionize your web
            design journey. Inspiration awaits you, and with just a click,
            you'll open the door to endless possibilities. Experience the future
            of design and set your creativity free!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AllTools;
