import React, { useState } from "react";
import "../CSS/tutorial.css";

function GlassmorphismGenerator() {
  const [glassProperties, setGlassProperties] = useState<{
    backgroundColor: string;
    blur: number;
    opacity: number;
    borderRadius: number;
  }>({
    backgroundColor: "##241e1e",
    blur: 1,
    opacity: 0.6,
    borderRadius: 10,
  });

  const handlePropertyChange = (
    propertyName: string,
    propertyValue: string | number
  ) => {
    setGlassProperties((prevProperties) => ({
      ...prevProperties,
      [propertyName]: propertyValue,
    }));
  };

  const { backgroundColor, blur, opacity, borderRadius } = glassProperties;

  const glassStyle = {
    backgroundColor,
    filter: `blur(${blur}px)`,
    borderRadius: `${borderRadius}%`,
    opacity,
  };

  const generateHTMLCode = () => {
    return `<div class="glassmorphism"></div>`;
  };

  const generateCSSCode = () => {
    return `.glassmorphism {
  background-color: ${backgroundColor};
  filter: blur(${blur}px);
  border-radius: ${borderRadius}%;
  opacity: ${opacity};
}`;
  };

  return (
    <div className="generator-body">
      <div className="banner-title">
        <h1>Glassmorphism Card</h1>
      </div>
      <div className="generator-header" id="glass-header">
        <div className="glassmorphism-card" style={glassStyle}>
          <h2>😎</h2>
        </div>
        <div className="generator-controls">
          <div className="control-group">
            <label htmlFor="background-color">Background Color:</label>
            <input
              type="color"
              id="background-color-picker"
              value={backgroundColor}
              onChange={(e) =>
                handlePropertyChange("backgroundColor", e.target.value)
              }
            />
            <input
              type="text"
              id="background-color"
              value={backgroundColor}
              onChange={(e) =>
                handlePropertyChange("backgroundColor", e.target.value)
              }
            />
          </div>
          <div className="control-group">
            <label htmlFor="blur">Blur:</label>
            <input
              type="range"
              id="blur"
              min="0"
              max="20"
              value={blur}
              onChange={(e) =>
                handlePropertyChange("blur", parseInt(e.target.value))
              }
            />
          </div>
          <div className="control-group">
            <label htmlFor="opacity">Opacity:</label>
            <input
              type="range"
              id="opacity"
              min="0"
              max="1"
              step="0.1"
              value={opacity}
              onChange={(e) =>
                handlePropertyChange("opacity", parseFloat(e.target.value))
              }
            />
          </div>
          <div className="control-group">
            <label htmlFor="border-radius">Border Radius:</label>
            <input
              type="range"
              id="border-radius"
              min="0"
              max="100"
              value={borderRadius}
              onChange={(e) =>
                handlePropertyChange("borderRadius", parseInt(e.target.value))
              }
            />
          </div>
        </div>

        <div className="code-container">
          <div className="code-section">
            <pre>{generateHTMLCode()}</pre>
            <pre>{generateCSSCode()}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlassmorphismGenerator;
