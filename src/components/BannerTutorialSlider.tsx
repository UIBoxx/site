import React, { useState, useEffect } from "react";
import "../CSS/tutorial.css";
import "../CSS/main.css";
import Loading from "../assets/loading.gif";

interface Tutorial {
  description: string;
  link: string;
}

interface News {
  heading: string;
  article: string;
  date: string;
  link: string;
}

function TutorialBannerSlider() {
  const [isLoading, setIsLoading] = useState(false);
  const [tutorialsData, setTutorialsData] = useState<Tutorial[]>([]);


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
  const lastThreeNews = newsData.slice(-3).reverse();

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

  // Get the last 4 tutorials
  const lastFourTutorials = tutorialsData.slice(-5).reverse();

  return (
    <div className="tutorial-banner">
      <div className="banner-title">
        <h1>Tech News</h1>
        <div className="underline"></div>
        <a href="/news">See All</a>
      </div>
      <section className="news-box">
        <div className="news">
          {isLoading ? (
            <div className="loading-icon">
              <img src={Loading} alt="" />
              <p>please wait...</p>
            </div>
          ) : (
            lastThreeNews.map((newsItem, index) => (
              <div className="news-card" key={index}>
                <h2>{newsItem.heading}</h2>
                <p>{newsItem.article}</p>
                <a href={newsItem.link}>See more</a>
                <span>{newsItem.date}</span>
              </div>
            ))
          )}
        </div>
      </section>
      <div className="banner-title">
        <h1>Recent tutorials</h1>
      <div className="underline"></div>
        <a href="/Tutorials">See All</a>
      </div>
      <div className="banner-tutorial-cards" id="scrollable-tutorial-cards">
        {isLoading ? (
          <div className="loading-icon">
            <img src={Loading} alt="" />
            <p>please wait...</p>
          </div>
        ) : (
          lastFourTutorials.map((tutorial, index) => (
            <div className="banner-content-card" key={index}>
              <div className="banner-title-head">
                <h2>{tutorial.description}</h2>
                <div className="action-area">
                  <a href={tutorial.link}>Learn</a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="desc">
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
  );
}

export default TutorialBannerSlider;
