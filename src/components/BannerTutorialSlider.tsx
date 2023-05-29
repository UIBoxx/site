import React, { useState, useEffect } from "react";
import "../CSS/tutorial.css";
import "../CSS/main.css";
import Loading from "../assets/loading.gif";

interface News {
  heading: string;
  article: string;
  date: string;
  link: string;
}

function NewsSlider() {
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
      <div className="desc">
        <div className="about-page">
          <p>
            Welcome to <span>UIBoxx.in</span>, the ultimate destination for web
            designers and developers seeking high-quality UI components and
            designs. We offer a vast collection of free HTML/CSS/JS UI
            components that are ready to be integrated into your web projects,
            saving you valuable time and effort. Our comprehensive range
            includes buttons, forms, cards, navigation menus, and much more.
            <br />
            But that's not all! Our website also provides a powerful set of
            tools for creating stunning visual effects. Dive into the world of
            neumorphism and glassmorphism with our intuitive tools, allowing you
            to effortlessly apply these modern design trends to your projects.
            Additionally, our gradient color generator empowers you to generate
            eye-catching color schemes with ease. <br />
            Whether you're a seasoned professional or just starting your web
            design journey, <span>UIBoxx.in</span> is here to inspire and assist
            you in creating beautiful, engaging web experiences. Explore our
            collection and unleash your creativity today!
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsSlider;
