import { useEffect, useState } from "react";
import "../CSS/main.css";
import Loading from "../assets/loading.gif";


interface FlutterDesign {
  title: string;
  image: string;
  link: string;
  action: string;
  date: string;
  type: string;
  language: string;
  likes: string;
}

function FlutterDesigns() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [designs, setDesigns] = useState<FlutterDesign[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const [data, setData] = useState(null);


  // Find the design with the specified title
  const designToUpdate = designs.find(design => design.title === "Design Title");

  // Update the likes of the design
  if (designToUpdate) {
    designToUpdate.likes = "10";
    setDesigns([...designs]); // Call setDesigns with the updated array
  }


  useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          // Add a 0.1 second delay
          await new Promise(resolve => setTimeout(resolve, 100));
          const response = await fetch("https://uiboxxapi.netlify.app/.netlify/functions/api/appdata");
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
  // const pageCount = Math.ceil(filteredDesigns.length / itemsPerPage);
  // const currentPageDesigns = filteredDesigns.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   (currentPage - 1) * itemsPerPage + itemsPerPage
  // );

// Reverse the array of filtered designs
const reversedDesigns = filteredDesigns.reverse();

const pageCount = Math.ceil(reversedDesigns.length / itemsPerPage);
const currentPageDesigns = reversedDesigns.slice(
    (currentPage - 1) * itemsPerPage,
    (currentPage - 1) * itemsPerPage + itemsPerPage
);

  return (
    <div className="Design-body">
      <h2 className="sub-title">App Design UI Components</h2>
      <div className="underline"></div>
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
      )
      : currentPageDesigns.length === 0 ? (
        <p className="no-results-message">No available</p>
      )
       :(
        <div className="Design-cards">
          {currentPageDesigns.map((design, index) => (
            <div key={design.title} className="Design-card">
              <div className="Design-image">
              <img src={`data:image/png;base64, ${design.image}`} alt="" />
              </div>
              <div className="card-desc">
              <h3>{design.title}</h3>
              <a href={design.link}>{design.action}</a>
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
        <p>
          <span>UIBoxx.in</span>, the ultimate destination for free UI
          components that will take your web and app design to the next level.
          Our website is designed to provide developers and designers with the
          tools they need to create stunning user interfaces that are both
          intuitive and visually appealing. Our extensive library of UI
          components is tailored to suit the needs of various industries and
          design preferences, ensuring that you have access to the best
          resources to build your website or app. Whether you're looking for
          buttons, forms, icons, menus, or any other UI element, you can find it
          on our website.
        </p>
        <p>
          Our team of experienced designers and developers has carefully crafted
          each component to ensure that it meets the highest standards of design
          and functionality. We understand that every project is unique, and
          that's why we offer a diverse range of components that can be
          customized to match your specific needs. We believe that everyone
          should have access to great design resources, regardless of their
          budget or experience level. That's why all our UI components are
          completely free to download and use in your personal or commercial
          projects. Our licensing terms are also flexible, so you can use our
          components with confidence. At <span>UIBoxx.in</span>, we're committed
          to helping you create exceptional user experiences. Whether you're a
          seasoned designer or just starting out, our UI components will empower
          you to bring your ideas to life. Browse us today and transform your
          web and app designs with our free UI components.
        </p>
      </div>
    </div>
  );
}

export default FlutterDesigns;

