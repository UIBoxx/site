import { useState } from "react";
import "../CSS/main.css";
import ImageLab from "../assets/imagelabai.png";
import EmartImg from "../assets/emart.png";
import KidzWorldImg from "../assets/kidzworld.png";

import KidzImg from "../assets/kidz.jpg";

function Designs() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setSearchQuery(event.currentTarget.value);
  };

  const AppComponentDesign=[
    {
      title: "Neumorphism Effect",
      image: KidzImg,
      gif: 'https://media.giphy.com/media/l2JhIUyUs8KDCCf3W/giphy.gif',
      link: "https://github.com/bprabin811/Imagelab-AI",
      action: 'View Code',
      date: '2023-03-11',
      language: 'Flutter'
    },
    {
      title: "Beautiful Login Page",
      image: KidzImg,
      gif: 'https://media.giphy.com/media/l2JhIUyUs8KDCCf3W/giphy.gif',
      link: "https://github.com/bprabin811/Imagelab-AI",
      action: 'View Code',
      date: '2023-03-11',
      language: 'Flutter'
    },
    {
      title: "Bottom Navigation Bar",
      image: KidzImg,
      gif: 'https://media.giphy.com/media/l2JhIUyUs8KDCCf3W/giphy.gif',
      link: "https://github.com/bprabin811/Imagelab-AI",
      action: 'View Code',
      date: '2023-03-11',
      language: 'Flutter'
    }
  ].filter((project) =>
  project.title.toLowerCase().includes(searchQuery.toLowerCase()
  ));
  

  const filteredProjects = [
    {
      title: "Neumorphism Card",
      image: ImageLab,
      gif: 'https://media.giphy.com/media/l2JhIUyUs8KDCCf3W/giphy.gif',
      link: "https://github.com/bprabin811/Imagelab-AI",
      action: 'View Code',
      date: '2023-03-11',
      language: 'HTML/CSS'
    },
    {
      title: "Cart Page",
      image: EmartImg,
      gif: 'https://media.giphy.com/media/l2JhIUyUs8KDCCf3W/giphy.gif',
      link: "https://github.com/bprabin811/emarket",
      action: 'View Code',
      date: '2023-03-11',
      language: 'HTML/CSS'
    },
    {
      title: "Futuristic Login Page",
      image: KidzWorldImg,
      gif: 'https://media.giphy.com/media/l2JhIUyUs8KDCCf3W/giphy.gif',
      link:
        "https://github.com/bprabin811/kidzword-Learn-with-fun/releases/download/v1.1.0/app-release.apk",
        action: 'View Code',
        date: '2023-03-11',
        language: 'HTML/CSS'
    },
  ].filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="Design-body">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search . . . . ."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <h2 className="sub-title">HTML/CSS/JS Designs</h2>
      <div className="Design-cards">
        {filteredProjects.map((project) => (
          <div key={project.title} className="Design-card">
            <div className="Design-image">
                <img src={project.image} alt="" />
                </div>
            <h3>{project.title}</h3>
            <a href={project.link}>{project.action}</a>
            <p>{project.date} <span>{project.language}</span></p>
          </div>
        ))}
      </div>
      <h2 className="sub-title">Flutter Designs</h2>
      <div className="Design-cards">
        {AppComponentDesign.map((project) => (
          <div key={project.title} className="Design-card">
            <div className="Design-image">
                <img src={project.image} alt="" />
                </div>
            <h3>{project.title}</h3>
            <a href={project.link}>{project.action}</a>
            <p>{project.date} <span>{project.language}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Designs;
