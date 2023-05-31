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

  const itemsPerPage = 8;
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
      <div className="desc">
        <div className="about-page">
          <p id="styledP">
            "Transform Your Website Design with Our{" "}
            <span>Free UI Elements</span>"
          </p>
        </div>
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
                <div className="iframe-container">
                  <iframe
                    title="HTML/CSS/JS Demo"
                    srcDoc={`
                      <html>
                        <head>
                          <style>${design.csscode}</style>
                          <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
                    integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
                    crossorigin="anonymous"
                    referrerpolicy="no-referrer"
                  />
                        </head>
                        <body>
                          <script>
                            // Prevent navigation
                            document.addEventListener('click', (event) => {
                              if (event.target.tagName === 'A') {
                                event.preventDefault();
                              }
                            });
                          </script>
                          ${design.htmlcode}
                          <script>${design.jscode}</script>
                        </body>
                      </html>
                    `}
                    sandbox="allow-scripts allow-same-origin allow-modals allow-popups allow-forms"
                  />
                </div>
              </div>

              {/* <div className="card-desc">
                <h3>{design.title}</h3> */}
                {/* <div className="codePrinter">
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
                </div> */}
                {/* <p>
                  {design.date} <span>{design.language}</span>
                </p> */}
              {/* </div> */}
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
            Welcome to our Free UI Components page, where you'll find a treasure
            trove of professionally designed elements to enhance your website.
            We offer a vast collection of UI components, meticulously crafted in
            HTML, CSS, and JavaScript, ready to be seamlessly integrated into
            your web design projects. From stylish buttons and interactive forms
            to sleek cards and intuitive navigation menus, our free UI
            components will save you valuable time and effort, while adding a
            touch of elegance and functionality to your website. Elevate your
            designs and create remarkable user experiences with our extensive
            selection of high-quality UI components, all at no cost.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CSSDesigns;
