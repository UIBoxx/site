import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import "../CSS/main.css";

import ExampleComponent from "../components/copyCode";
import Loading from "../assets/loading.gif";

interface Design {
  title: string;
  image: string;
  link: string;
  action: string;
  date: string;
  type: string;
  language: string;
  likes: string;
  htmlcode: string;
  csscode: string;
  jscode: string;
}

function CSSDesigns() {
  const pageDescription =
  "Generate Glassmorphism styles and Neumorphism cards easily with our generator tools. Get free high-quality, customizable designs and components for your app and web design projects. Save time and create beautiful designs with our website.";
const pageKeywords =
  "Glassmorphism styles, Neumorphism cards, generator tools, free designs, components, app design, web design";


  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [designs, setDesigns] = useState<Design[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Add a 0.1 second delay
        await new Promise((resolve) => setTimeout(resolve, 100));
        const response = await fetch(
          "https://uiboxxapi.netlify.app/.netlify/functions/api/webdata"
        );
        const data = await response.json();
        setDesigns(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchInputChange = (
    event: React.SyntheticEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.currentTarget.value);
    setCurrentPage(1); // Reset to first page on search query change
  };

  const itemsPerPage = 4;
  const filteredDesigns = designs.filter((design) =>
    design.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Reverse the array of filtered designs
  const reversedDesigns = filteredDesigns.reverse();
  const pageCount = Math.ceil(reversedDesigns.length / itemsPerPage);
  const currentPageDesigns = reversedDesigns.slice(
    (currentPage - 1) * itemsPerPage,
    (currentPage - 1) * itemsPerPage + itemsPerPage
  );

  // const pageCount = Math.ceil(filteredDesigns.length / itemsPerPage);
  // const currentPageDesigns = filteredDesigns.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   (currentPage - 1) * itemsPerPage + itemsPerPage
  // );

  const handleCodeButtonClick = (design: Design) => {
    setSelectedDesign(design);
    setShowModal(true);
  };

  return (
    <div
      className="Design-body"
      style={{ overflow: showModal ? "hidden" : "auto" }}
    >
      <Helmet>
        <title>
          Free Designs and Components for App and Web Design | UIBoxx.in
        </title>
<meta name="description" content={pageDescription} />
<meta name="keywords" content={pageKeywords} />

      </Helmet>
      <div className="div">
        <h2>
          Unleash Your Creativity😎 and <span>Elevate Your Designs</span> with Our
          Exceptional UI Components, Turning Your Ideas into Stunning Visual
          Experiences❤️.
        </h2>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <h2 className="sub-title"></h2>
      {/* <div className="underline"></div> */}
      {isLoading ? (
        <div className="loading-icon">
          <img src={Loading} alt="" />
          <p>
            Please wait while we load the designs for you. This may take a few
            moments depending on your internet connection speed.
          </p>
        </div>
      ) : currentPageDesigns.length === 0 ? (
        <p className="no-results-message">No available</p>
      ) : (
        <div className="Design-cards">
          {currentPageDesigns.map((design, index) => (
            <div
              key={design.title}
              className="Design-card"
              onClick={() => setSelectedDesign(design)}
            >
              <div className="Design-image">
                <img src={`data:image/png;base64, ${design.image}`} alt="" />
              </div>
              <div className="card-desc">
                <h3>{design.title}</h3>
                <div className="codePrinter">
                  <button
                    className="button"
                    onClick={() => handleCodeButtonClick(design)}
                  >
                    {design.action}
                  </button>
                  {showModal && selectedDesign === design && (
                    <div className="modal">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h2></h2>
                          <span
                            className="modal-close"
                            onClick={() => setShowModal(false)}
                          >
                            x
                          </span>
                        </div>
                        <ExampleComponent selectedDesign={selectedDesign} />
                      </div>
                    </div>
                  )}
                </div>
                <p>
                  {design.date} <span>{design.language}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="pagination">
        <button
          className="pagination-button"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>
        {[...Array(pageCount)].map((_, index) => (
          <button
            key={index}
            className={`pagination-button${
              index + 1 === currentPage ? "active" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="pagination-button"
          disabled={currentPage === pageCount}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
      <div className="desc">
       <div className="about-page">
       <p>
          At <span>UIBoxx.in</span>, we are a dedicated team of designers and
          developers committed to providing exceptional user experiences and
          empowering individuals in the digital realm. Our mission is to offer
          innovative solutions and resources that enhance your online presence.
          We believe in providing beautifully designed UI elements through our
          Free UI feature, while also offering comprehensive coding resources
          and tutorials to help you stay ahead in the industry. We value
          creativity, collaboration, and continuous improvement, and we are
          always striving to exceed your expectations. Join us on this journey
          to create stunning interfaces, unlock the power of algorithms, and
          make a lasting impact in the digital world.
        </p>
       </div>
      </div>
    </div>
  );
}

export default CSSDesigns;
