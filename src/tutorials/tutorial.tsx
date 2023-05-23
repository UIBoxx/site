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


  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.currentTarget.value);
    setCurrentPage(1); // Reset to first page on search query change
  };

  const filteredTutorials = tutorialsData.filter((tutorial) =>
    tutorial.description.toLowerCase().includes(searchQuery.toLowerCase())
  ).reverse(); // Reverse the array

  return (
    <div className="tutorial-body">
      <Helmet>
        <title>
          Free Programming & DSA Algorithm Tutorials with Visualization and Demo | UIBoxx.in
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
      <div className="div">
        <h2>
        Unlock the Power of <span>Interactive Learning</span> 🔓✨: High-Quality Demos and Customization at Your Fingertips! 🎯🔧
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
      <div className="tutorial-cards">
        {isLoading ? (
          <div className="loading-icon">
            <img src={Loading} alt="" />
            <p>please wait...</p>
          </div>
        ) : (
          filteredTutorials.map((tutorial, index) => (
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
    </div>
  );
}

export default Tutorials;
