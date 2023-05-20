import React, { useState, useEffect } from "react";
import "../CSS/tutorial.css";
import Loading from "../assets/loading.gif";

interface News {
  heading: string;
  article: string;
  date: string;
}

function NewsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [newsData, setNewsData] = useState<News[]>([]);

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
  const lastestNews = newsData.slice().reverse();
  return (
    <div className="news-body">
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
                <span>{newsItem.date}</span>
                </details>
              </div>
            ))
          )}
        </div>
        \{" "}
      </div>
    </div>
  );
}

export default NewsPage;
