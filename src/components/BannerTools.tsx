import React, { useState, useEffect } from "react";
import "../CSS/tutorial.css";
import "../CSS/main.css";
import Loading from "../assets/loading.gif";

interface Tools {
  title: string;
  link: string;
  action: string
}

function ToolsBanner() {
  const [isLoading, setIsLoading] = useState(false);
  const [toolsData, setToolsData] = useState<Tools[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Add a 0.1 second delay
        await new Promise((resolve) => setTimeout(resolve, 100));
        const response = await fetch(
          "https://uiboxxapi.netlify.app/.netlify/functions/api/tools" // Replace with your API endpoint
        );
        const data: Tools[] = await response.json();
        setToolsData(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const AllTools = toolsData.slice().reverse();


  return (
    <div className="tools-banner">
      <div className="banner-title">
        <h1>Tools</h1>
      <div className="underline"></div>
      <a href="/">See All</a>
      </div>
      <div className="banner-tools-cards" id="scrollable-tools-cards">
        {isLoading ? (
          <div className="loading-icon">
            <img src={Loading} alt="" />
            <p>please wait...</p>
          </div>
        ) : (
          AllTools.map((tool, index) => (
            <div className="banner-content-card" key={index}>
              <div className="banner-title-head" id="YellowBox">
                <h2>{tool.title}</h2>
                <div className="action-area">
                  <a href={tool.link}>{tool.action}</a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ToolsBanner;
