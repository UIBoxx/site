import React, { useState, useEffect } from "react";
import "../CSS/tutorial.css";
import Loading from "../assets/loading.gif";
import { Helmet } from "react-helmet";


interface News {
  heading: string;
  article: string;
  date: string;
  link: string;
}

function NewsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [newsData, setNewsData] = useState<News[]>([]);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Add a 0.1 second delay
        await new Promise((resolve) => setTimeout(resolve, 100));
        const response = await fetch(
          "https://uiboxxapi.netlify.app/.netlify/functions/api/News"
        );
        const data: News[] = await response.json();
        setNewsData(data);
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

  const itemsPerPage = 6;

  const lastestNewses = [...newsData].reverse();
  const pageCount = Math.ceil(lastestNewses.length / itemsPerPage);
  const lastestNews = lastestNewses.slice(
    (currentPage - 1) * itemsPerPage,
    (currentPage - 1) * itemsPerPage + itemsPerPage
  );
  


  return (
    <div className="news-body">
      <Helmet>
  <title>Technology News - Short Articles on Tech Trends | UIBoxx.in</title>
  <meta
    name="description"
    content="Stay up-to-date with the latest technology news and trends. Our short articles cover a wide range of technology-related topics, including gadgets, software, AI, cybersecurity, and more."
  />
  <meta
    name="keywords"
    content="technology news, tech articles, latest technology, gadgets, software, AI, cybersecurity"
  />
</Helmet>

      <div className="news-cards">
      <div className="banner-title">
        <h1>All News</h1>
      </div>
        <div className="all-news">
          {isLoading ? (
            <div className="loading-icon">
              <img src={Loading} alt="" />
              <p>please wait...</p>
            </div>
          ) : (
            lastestNews.map((newsItem, index) => (
              <div className="news-card" key={index}>
                <details>
                <summary>{newsItem.heading}</summary>
                <p>{newsItem.article}</p>
                <a href={newsItem.link}>See more...</a>
                <span>{newsItem.date}</span>
                </details>
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

      </div>
      <div className="desc">
        <div className="about-page">
          <p>This is a one-stop destination for the latest news and insights in technology and artificial intelligence. With a team of experts curating cutting-edge content, we provide comprehensive coverage of tech trends, including AI, robotics, cybersecurity, and more. Stay informed, engage in discussions, and embrace the future with our thought-provoking articles, expert opinions, and vibrant community. Explore the transformative power of technology and stay at the forefront of the tech revolution with our informative and engaging platform.</p>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
