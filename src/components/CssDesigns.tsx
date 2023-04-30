import { useState, useEffect } from "react";
import "../CSS/main.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import prettier from "prettier/standalone";
import parserHtml from "prettier/parser-html";

import parserCss from "prettier/parser-postcss";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [designs, setDesigns] = useState<Design[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);


  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    const cachedData = localStorage.getItem('webdesigns');
    if (cachedData) {
      setDesigns(JSON.parse(cachedData));
      setIsLoading(false);
    } else {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          // Add a 0.1 second delay
          await new Promise(resolve => setTimeout(resolve, 100));
          const response = await fetch("https://uiboxxapi.netlify.app/.netlify/functions/api/webdata");
          const data = await response.json();
          setDesigns(data);
          localStorage.setItem('webdesigns', JSON.stringify(data)); // Cache the data
  
          // Delete the cached data after 2 minutes
          setTimeout(() => {
            localStorage.removeItem('webdesigns');
          }, 2000);
  
          setIsLoading(false);
        } catch (error) {
          console.error(error);
          setIsLoading(false);
        }
      };
      fetchData();
    }
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

  const itemsPerPage = 3;
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


  const handleCodeButtonClick = (design: Design) => {
    setSelectedDesign(design);
    setShowModal(true);
  };

  return (
    <div className="Design-body" style={{ overflow: showModal ? "hidden" : "auto" }}>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <h2 className="sub-title"></h2>
      {isLoading ? (
        <div className="loading-icon">
          <img src={Loading} alt="" />
          <p>Please wait while we load the designs for you. This may take a few moments depending on your internet connection speed.</p>
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
    </div>
  );
}

export default CSSDesigns;
