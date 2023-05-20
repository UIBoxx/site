import "../CSS/main.css";
import { Helmet } from "react-helmet";


function LandingPage() {
  return (
    <div className="landingPage">
       <Helmet>
        <meta
          name="description"
          content="Explore free tutorials on different algorithms in DSA with visualization and demos. Master Data Structures and Algorithms, improve problem-solving skills, and enhance algorithmic understanding And Discover our collection of free UI components featuring various interactive elements, visualizations, and demos. Enhance your website's user experience with our easy-to-use and customizable UI components."
        />
        <meta
          name="keywords"
          content="free UI components, UI component features, interactive elements, visualizations, demos, user experience, customizable UI components,DSA algorithms, algorithm tutorials, algorithm visualizations, algorithm demos, DSA visualization, DSA tutorial, algorithmic concepts, data structures and algorithms, free tutorials, interactive learning"
        />
        <title>Home | UIBoxx.in</title>
      </Helmet>
      <div className="landingpage-head"><h2>Unlock <span>Your Potential</span></h2></div>
      {/* <section className="stats">
        <div className="stats-card">
            <h2>10+</h2>
            <h3>Designs</h3>
        </div>
        <div className="stats-card">
            <h2>10+</h2>
            <h3>Tutorials</h3>
        </div>
        <div className="stats-card">
            <h2>1K+</h2>
            <h3>Users</h3>
        </div>
      </section> */}
      <div className="service" id="service">
        <div className="services">
          <div className="service-type" id="ai">
            <h3>Free UI</h3>
            <h2>Components & Design</h2>
            <a href="/UI-Library">Discover</a>
          </div>
          <div className="service-type" id="design">
            <h3>Deep Understanding</h3>
            <h2>of Programming & DSA</h2>
            <a href="/Tutorials">Get Started</a>
          </div>
        </div>
      </div>
      <section className="features-container">
        <div className="feature-card">
          <details>
            <summary>Free User Interfaces</summary>
            <p>Discover the potential of our Free UI feature and elevate your website with beautifully designed interfaces. Gain access to a wide range of professionally crafted designs and components that enhance both the visual appeal and functionality of your site. Whether you're a beginner or an experienced designer, our Free UI empowers you to effortlessly create stunning interfaces using our provided code. Customize colors, typography, and layout to align with your brand identity and captivate your audience. Unlock the power of our Free UI and make a lasting impression with your website's design.</p>
          </details>
                   
        </div>
        <div className="feature-card">
          <details>
            <summary>Interactive Tutorials</summary>
            <p>Experience the captivating Algorithms Visualization feature and delve into the inner workings of complex algorithms. Witness real-time step-by-step execution, bringing algorithms to life through interactive visualizations. Whether you're a student, developer, or simply curious, this feature provides an immersive learning experience to comprehend algorithm logic and problem-solving. Explore a wide range of algorithms in sorting, searching, graph traversal, and machine learning domains. Enhance your problem-solving skills and accelerate understanding with this engaging educational tool.</p>
          </details>
        </div>
      </section>
      <div className="banner-title"><h1>What is happening in Tech-world?</h1><a href="/">See All</a></div>
      <div className="underline"></div>
      <section className="news-box">
        <div className="news">
        <div className="news-card">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADRElEQVR4AbRWQ3RkURS8Yzv2NjY3cbIbs5N17OyyGtu2bdv2THfGthG7U9M1dt4P6pzbuL/qvvrP8jNQLo6olpGmMKBGKkyBRooKGEXP2mxDfgcgzUwknSneUNCkYZTXbIttCkEwofDGjRlsS/ej29XevPF7gsMBo4zUKq4qF9y5JThyiCG4e4s57SY4J2jAoCqoLBMsXSzw9hJ07NgcDg4ODP5mDsuWkKOpF/Qc/0oVcnGBIF4nsLOzwcSJE3Hv3j0UFxeDwd/M2dpaIz6OXPW5ICpEY5UgPU3g5uYKNvYv3L17F66uLsjOpEbNhJIB/WVBjx7tcfHiRdSF8+fPo3v39sjXN6KBkcMFMTExMBqNqAvkREVFYcyoRjTQu5cgPT0dqkhNTcXgQY1kgGMZHiaYNm0aVDFu3DhEhAtqqxtggMtpxHBBSLDArIdgwoQJUMWwYcOooZbDx1raDaxfxyVni1GjRkGn02HMmDFQxejRoxEXFwdqbWyssGVTPQwsmCfw9PREYWEhamtrUVVVBVWQSw217u7uWLywHgZevxT4+QmCgoJw4cIFsKAqyOVyDAgIQGCA4O2rek7C928EyUmCLl064/Lly1AFuR07tkdaCms0cBXs2SkwM+uOFy9eQBXPnz+HWY9u2Lu7gcvw2WOBq2sz5OXlaR4CatzcmuH5k3oY4Po9f0bg5SkYMGAASkpKoBXU9O/fH15egvNnWVPRQMF7QVKioHv3tuDux9OuvqA2LS3NVKsNa7J23QZ4pltaWuLUqVMqe7/S2cBarLl6pYIBnnzW1i3Rt29frFmzBgUFBagvqF29ejX69OkDG5uWMFxVMMCxum4QZKSxJwQpKSmorq7W1BvkUpOcnMwayEhnTdbWsApI3rRBeLZzM0J0dDRyc3Oh1+v/uiKY4zNyyKWG2s0b/38o/fdKxpPwwjnBqhWCmdN5LNNQB2RnZ+PGjRvfr2T8zRyfkTPDxF25nFrWqOtKVi35qpdIFjtxTBAbI+jSuTmcnJwY6NKlOXM4cZQcTbdiAw2M+pFUN/Lw3o9rOX9ravjTkJrlA9YxAdkJsnugu2b075xC7EB0TrF1z1uhCfMnFS39Ce6B/cXsngMAoMbZs/GdcckAAAAASUVORK5CYII=" alt="" />
          <h2>Snapchat Introduces 'My AI': An AI-Powered Chatbot Enhancing User Engagement and Interaction</h2>
          <p>Snapchat has introduced "My AI," an AI chatbot based on OpenAI's ChatGPT, joining the race among social networking platforms to leverage artificial intelligence. This built-in chatbot allows Snapchat users to engage in a variety of activities, such as asking questions, seeking advice, generating content, planning trips, receiving filter recommendations, playing games, and enjoying friendly conversation. Accessible to all users without the need for a subscription, My AI aims to enhance user engagement and create a more interactive experience within the Snapchat app, aligning with the trend of integrating AI to attract and retain users in the competitive social media landscape.</p>
        </div>
        </div>
      </section>
        {/* <section className="desc">
            <p>At <span>UIBoxx.in</span>, we are a dedicated team of designers and developers committed to providing exceptional user experiences and empowering individuals in the digital realm. Our mission is to offer innovative solutions and resources that enhance your online presence. We believe in providing beautifully designed UI elements through our Free UI feature, while also offering comprehensive coding resources and tutorials to help you stay ahead in the industry. We value creativity, collaboration, and continuous improvement, and we are always striving to exceed your expectations. Join us on this journey to create stunning interfaces, unlock the power of algorithms, and make a lasting impact in the digital world.</p>
        </section> */}
    </div>
  );
}

export default LandingPage;
