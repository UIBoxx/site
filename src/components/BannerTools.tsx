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
        <h1>Other Tools</h1>
      <div className="underline"></div>
      <a href=""></a>
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
      <div className="desc">
        <p>
        <span>UIBoxx.in</span> 🚀, the ultimate destination for free UI components that will take your web and app design to the next level. Our website is designed to provide developers and designers with the tools they need to create stunning user interfaces that are both intuitive and visually appealing. 🎨 Our extensive library of UI components is tailored to suit the needs of various industries and design preferences, ensuring that you have access to the best resources to build your website or app. Whether you're looking for buttons, forms, icons, menus, or any other UI element, you can find it on our website. 🔍💻
        </p>
        <p>
        Our team of experienced designers and developers has carefully crafted each component to ensure that it meets the highest standards of design and functionality. 💪 We understand that every project is unique, and that's why we offer a diverse range of components that can be customized to match your specific needs. 🎨 We believe that everyone should have access to great design resources, regardless of their budget or experience level. 💡 That's why all our UI components are completely free to download and use in your personal or commercial projects. 💯 Our licensing terms are also flexible, so you can use our components with confidence. 🔄 At <span>UIBoxx.in</span>, we're committed to helping you create exceptional user experiences. Whether you're a seasoned designer or just starting out, our UI components will empower you to bring your ideas to life. 💡🚀 Browse us today and transform your web and app designs with our free UI components. 🌟
        </p>
      </div>
    </div>
  );
}

export default ToolsBanner;
