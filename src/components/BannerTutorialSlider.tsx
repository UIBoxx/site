import "../CSS/tutorial.css";
import "../CSS/main.css";


function TutorialBannerSlider() {
    const tutorials = [
        {
          title: "Binary Search",
          description: "Working of Binary Search with Visualization",
          link: "/binary-search-tutorial",
        },
        {
          title: "Bubble Sort",
          description: "Bubble Sort Visualization",
          link: "/bubble-sort-tutorial",
        },
        {
          title: "Stack",
          description: "What is Stack?",
          link: "/stack",
        },
        {
          title: "Queue",
          description: "What is Queue?",
          link: "/queue",
        },
        {
          title: "Dijkstra's Algorithm",
          description: "What is Dijkstra's Algorithm with demo",
          link: "/dijkstra",
        },
      ];

  return (
    <div className="tutorial-banner">
      <div className="banner-title"><h1>Recent</h1><a href="/Tutorials">See All</a></div>
      <div className="underline"></div>
      <div className="banner-tutorial-cards" id="scrollable-tutorial-cards">
        {tutorials.map((tutorial, index) => (
          <div className="content-card" key={index}>
            <div className="image-demo">
              <h1>{tutorial.title}</h1>
            </div>
            <div className="title-head">
              <h2>{tutorial.description}</h2>
              <div className="action-area">
                <a href={tutorial.link}>Learn</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="desc">
            <p>At <span>UIBoxx.in</span>, we are a dedicated team of designers and developers committed to providing exceptional user experiences and empowering individuals in the digital realm. Our mission is to offer innovative solutions and resources that enhance your online presence. We believe in providing beautifully designed UI elements through our Free UI feature, while also offering comprehensive coding resources and tutorials to help you stay ahead in the industry. We value creativity, collaboration, and continuous improvement, and we are always striving to exceed your expectations. Join us on this journey to create stunning interfaces, unlock the power of algorithms, and make a lasting impact in the digital world.</p>
        </div>    
    </div>
  );
}

export default TutorialBannerSlider;
