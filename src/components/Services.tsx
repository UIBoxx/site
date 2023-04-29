import "../CSS/main.css";
import BrainCktImg from "../assets/brainCkt.png";
import DesignImg from "../assets/design.jpg";
import CodeImg from "../assets/code.png";
import { useState } from "react";

const services = [
  { title: "Think", imgSrc: BrainCktImg },
  { title: "Design", imgSrc: DesignImg },
  { title: "Develop", imgSrc: CodeImg },
];

function Services() {
  return (
    <div className="div">
      <h2>
        Transform Your Ideas into <span>Beautiful Designs</span> with Our UI
        Components
      </h2>
      <div className="container">
        {services.map(({ title, imgSrc }, index) => (
          <div className="card" key={index}>
            <div className="face face1">
              <div className="content">
                <img src={imgSrc} alt={title} />
                <h3>{title}</h3>
              </div>
            </div>
            {index === services.length - 2 ? null : (
              <div className="face face2">
                <div className="content"></div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
      </div>
    </div>
  );
}

export default Services;
