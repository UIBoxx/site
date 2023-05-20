import "../CSS/main.css";
import { Helmet } from "react-helmet";


function Footer() {
  return (
    <footer>
      <Helmet>
        <meta
          name="description"
          content="Explore free tutorials on different algorithms in DSA with visualization and demos. Master Data Structures and Algorithms, improve problem-solving skills, and enhance algorithmic understanding And Discover our collection of free UI components featuring various interactive elements, visualizations, and demos. Enhance your website's user experience with our easy-to-use and customizable UI components."
        />
        <meta
          name="keywords"
          content="free UI components, UI component features, interactive elements, visualizations, demos, user experience, customizable UI components,DSA algorithms, algorithm tutorials, algorithm visualizations, algorithm demos, DSA visualization, DSA tutorial, algorithmic concepts, data structures and algorithms, free tutorials, interactive learning"
        />
      </Helmet>
      <p>
        {" "}
        <span>UIBoxx </span>2023, all rights reserved <br />
        <p style={{color: '#ffffff', textAlign: 'center'}}>contact@uiboxx.in</p>
      </p>
    </footer>
  );
}

export default Footer;
