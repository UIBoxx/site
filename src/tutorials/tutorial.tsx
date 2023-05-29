import React, { useState, useEffect } from "react";
import "../CSS/tutorial.css";
import { Helmet } from "react-helmet";
import Loading from "../assets/loading.gif";

interface Tutorial {
  title: string;
  description: string;
  link: string;
}

function Tutorials() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [tutorialsData, setTutorialsData] = useState<Tutorial[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Add a 0.1 second delay
        await new Promise((resolve) => setTimeout(resolve, 100));
        const response = await fetch(
          "https://uiboxxapi.netlify.app/.netlify/functions/api/tutorials"
        );
        const data: Tutorial[] = await response.json();
        setTutorialsData(data);
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

  const itemsPerPage = 6;
  const tutorialsDatas = tutorialsData.filter((tutorial) =>
    tutorial.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const reversedDesigns = tutorialsDatas.reverse();
  const pageCount = Math.ceil(reversedDesigns.length / itemsPerPage);
  const currentPageDesigns = reversedDesigns.slice(
    (currentPage - 1) * itemsPerPage,
    (currentPage - 1) * itemsPerPage + itemsPerPage
  );

  return (
    <div className="tutorial-body">
      <Helmet>
        <title>
          Free Programming & DSA Algorithm Tutorials with Visualization and Demo
          | UIBoxx.in
        </title>
        <meta
          name="description"
          content="Master Data Structures and Algorithms with our free tutorials. Learn various algorithms in DSA through interactive visualizations and demos. Get hands-on experience and improve your problem-solving skills today."
        />
        <meta
          name="keywords"
          content="DSA algorithms, algorithm tutorials, algorithm visualizations, algorithm demos, DSA visualization, DSA tutorial, algorithmic concepts, data structures and algorithms, free tutorials, interactive learning"
        />
      </Helmet>
      <div className="desc">
        <div className="about-page">
          <p id="styledP">
            "Unlock the Power of <span>Interactive Learning</span>"
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
      <div className="tutorial-cards">
        {isLoading ? (
          <div className="loading-icon">
            <img src={Loading} alt="" />
            <p>please wait...</p>
          </div>
        ) : currentPageDesigns.length === 0 ? (
          <p className="no-results-message">No available</p>
        ) : (
          currentPageDesigns.map((tutorial, index) => (
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
          ))
        )}
      </div>
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
            Welcome to our <a href="/tutorials" style={{textDecoration:"none"}}><span>Tutorials</span></a>, where we offer a comprehensive range of
            tutorials accompanied by interactive demos. Whether you're
            interested in Frontend development or diving into the world of Data
            Structures and Algorithms (DSA), we have you covered. Our tutorials
            are designed to provide step-by-step guidance, ensuring that
            learners of all levels can grasp the concepts effectively.
            <br /><br />
            In the Frontend section, we explore the latest techniques,
            frameworks, and libraries that power modern web development. From
            HTML and CSS fundamentals to JavaScript frameworks like React and
            Angular, our tutorials will help you build stunning and responsive
            user interfaces. We take it a step further
            by providing interactive demos that allow you to experiment and see
            the code in action, enhancing your learning experience.
            <br /><br />
            For those seeking to strengthen their DSA skills, our algorithm
            tutorials are a goldmine of knowledge. We break down complex
            concepts into digestible modules, covering topics such as sorting,
            searching, graph algorithms, and more. With our interactive demos,
            you can visualize the algorithms in action, making it easier to
            understand their inner workings.
            <br /><br />
            No matter your level of expertise, our tutorials cater to beginners
            and experienced developers alike. Our goal is to empower you with
            the knowledge and hands-on experience necessary to excel in the
            frontend development or DSA domain. Get ready to learn, practice,
            and master the skills that will propel your career forward.
            <br /><br />
            Join us on this educational journey as we demystify frontend
            development and unravel the complexities of DSA through engaging
            tutorials and interactive demos. Start exploring today and unlock
            the potential within you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tutorials;
