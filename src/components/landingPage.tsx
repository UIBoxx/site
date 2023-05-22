import "../CSS/main.css";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Loading from "../assets/loading.gif";


interface News {
  heading: string;
  article: string;
  date: string;
  link: string
}



function LandingPage() {
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
  const lastThreeNews = newsData.slice(-3).reverse();
  

  return (
    <div className="landingPage">
      <Helmet>
        <meta
          name="description"
          content="Explore free tutorials on different algorithms in DSA with visualization and demos. Master Data Structures and Algorithms, improve problem-solving skills, and enhance algorithmic understanding And Discover our collection of free UI components featuring various interactive elements, visualizations, and demos. Enhance your website's user experience with our easy-to-use and customizable UI components."
        />
        <meta
          name="keywords"
          content="free UI components, UI component features, interactive elements, visualizations, demos, user experience, customizable UI components,DSA algorithms, algorithm tutorials, algorithm visualizations, algorithm demos, DSA visualization, DSA tutorial, algorithmic concepts, data structures and algorithms, free tutorials, interactive learning"
        />
        <title>Home | UIBoxx.in</title>
      </Helmet>
      <div className="landingpage-head">
        <h2>
          Unlock <span>Your Potential</span>
        </h2>
      </div>
      {/* <section className="stats">
        <div className="stats-card">
          <h2>10+</h2>
          <h3>Designs</h3>
        </div>
        <div className="stats-card">
          <h2>10+</h2>
          <h3>Tutorials</h3>
        </div>
        <div className="stats-card">
          <h2>1K+</h2>
          <h3>Users</h3>
        </div>
      </section> */}
      <div className="service" id="service">
        <div className="services">
          <div className="service-type" id="news">
            <h3>Update yourself</h3>
            <h2>New tools & technologies</h2>
            <a href="/news">View</a>
          </div>
          <div className="service-type" id="design">
            <h3>Deep Understanding</h3>
            <h2>Programming & DSA</h2>
            <a href="/Tutorials">Get Started</a>
          </div>
          <div className="service-type" id="ai">
            <h3>Free UI</h3>
            <h2>Components & Design</h2>
            <a href="/UI-Library">Discover</a>
          </div>
        </div>
      </div>
      <div className="banner-title">
        <h1>Tech News</h1>
        <a href="/news">See All</a>
      </div>
      <div className="underline"></div>
      <section className="news-box">
        <div className="news">
          {isLoading ? (
            <div className="loading-icon">
            <img src={Loading} alt="" />
            <p>
              please wait...
            </p>
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
    </div>
  );
}

export default LandingPage;

