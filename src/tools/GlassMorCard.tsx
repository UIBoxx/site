import React, { useState } from "react";
import "../CSS/tutorial.css";

function GlassmorphismGenerator() {
  const [glassProperties, setGlassProperties] = useState<{
    color: string;
    blur: number;
    transparency: number;
    borderRadius: number;
  }>({
    color: "#e8d8d8",
    blur: 5,
    transparency: 0.1,
    borderRadius: 1,
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

  const { color, blur, transparency, borderRadius } = glassProperties;

  const hexToRGBA = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const glassStyle = {
    background: hexToRGBA(color, transparency),
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    borderRadius: `${borderRadius}%`,
    border: "1px solid rgba(255, 255, 255, 0.18)",
  };

  const generateCSSCode = () => {
    return `
      background:
        ${hexToRGBA(color, transparency)};
      box-shadow:
        0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(${blur}px);
      -webkit-backdrop-filter: blur(${blur}px);
      border-radius: ${borderRadius}%;
      border:
        1px solid rgba(255, 255, 255, 0.18);`;
  };

  return (
    <div className="generator-body">
      <div className="banner-title">
        <h1>Glassmorphism Effect</h1>
      </div>
      <div className="generator-header" id="glass-header">
        <div className="glassmorphism-card" style={glassStyle}>
          <h2>Hello</h2>
          <h2>❤️</h2>
        </div>
        <div className="generator-controls">
          <div className="control-group">
            <label htmlFor="color">Color:</label>
            <input
              type="color"
              id="color-picker"
              value={color}
              onChange={(e) => handlePropertyChange("color", e.target.value)}
            />
            <input
              type="text"
              id="color"
              value={color}
              onChange={(e) => handlePropertyChange("color", e.target.value)}
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
            <label htmlFor="transparency">Transparency:</label>
            <input
              type="range"
              id="transparency"
              min="0"
              max="1"
              step="0.1"
              value={transparency}
              onChange={(e) =>
                handlePropertyChange("transparency", parseFloat(e.target.value))
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
            <pre>{generateCSSCode()}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlassmorphismGenerator;
