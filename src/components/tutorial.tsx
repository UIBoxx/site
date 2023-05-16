import React, { useState } from "react";
import "../CSS/tutorial.css";

function Tutorials() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const tutorials = [
    {
      title: "Binary Search",
      description: "Working of Binary Search with Visualization",
      link: "/binary-search-tutorial"
    },
    {
      title: "Linear Search",
      description: "Linear Search with Visualization",
      link: "/linear-search-tutorial"
    },
    {
      title: "Bubble Sort",
      description: "Bubble Sort Visualization",
      link: "/bubble-sort-tutorial"
    },
    {
      title: "Heap Sort",
      description: "Heap Sort Visualization",
      link: "/heap-sort-tutorial"
    }
  ];

  const handleSearchInputChange = (
    event: React.SyntheticEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.currentTarget.value);
    setCurrentPage(1); // Reset to first page on search query change
  };

  const filteredTutorials = tutorials.filter((tutorial) =>
    tutorial.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="tutorial-body">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="tutorial-cards">
        {filteredTutorials.map((tutorial, index) => (
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
    </div>
  );
}

export default Tutorials;
