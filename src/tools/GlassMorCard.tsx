import React, { useEffect, useState } from "react";
import "../CSS/tutorial.css";
import { Helmet } from "react-helmet";

function GlassmorphismGenerator() {
  const [buttonText, setButtonText] = useState("Copy CSS Code");
  const [glassProperties, setGlassProperties] = useState<{
    color: string;
    blur: number;
    transparency: number;
    borderRadius: number;
  }>({
    color: "#dd4040",
    blur: 2,
    transparency: 0.3,
    borderRadius: 5,
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

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    if (buttonText === "Copied") {
      timeoutId = setTimeout(() => {
        setButtonText("Copy CSS Code");
      }, 2000);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [buttonText]);

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
      background: ${hexToRGBA(color, transparency)};
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(${blur}px);
      -webkit-backdrop-filter: blur(${blur}px);
      border-radius: ${borderRadius}%;
      border: 1px solid rgba(255, 255, 255, 0.18);
    `;
  };

  function copyCssCode() {
    const code = generateCSSCode();
    navigator.clipboard.writeText(code).then(() => {
      setButtonText("Copied");
    });
  }
  return (
    <div className="generator-body">
      <Helmet>
        <title>
          Free Glassmorphism Design Tool | UIBoxx.in
        </title>
        <meta
          name="description"
          content="Infuse your user interfaces with an elegant touch of depth using our Glassmorphism design tool. Create stunning glass-like buttons, cards, and overlays with customizable blur, transparency, and color settings. Elevate your designs with the captivating allure of Glassmorphism and leave a lasting impression on your users."
        />
        <meta
          name="keywords"
          content="Glassmorphism design tool, glass-like buttons, glass cards, glass overlays, translucent elements, frosted glass effects, depth in design, UI design, user interfaces, customization, web projects"
        />
      </Helmet>
      <div className="generator-header" id="glass-header">
        <div
          className="glassmorphism-card"
          style={{ borderRadius: `${borderRadius}%` }}
        >
          <div className="sqr"></div>
          <div className="sqr"></div>
          <div className="glassmorphism-card-inner" style={glassStyle}>
            <h2>❤️</h2>
          </div>
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
      </div>
      <div className="code-container" id="code-container">
        <div className="code-section">
          <pre>{generateCSSCode()}</pre>
        </div>
        <div className="css-btn">
          <button onClick={copyCssCode}>{buttonText}</button>
        </div>
      </div>
    </div>
  );
}

export default GlassmorphismGenerator;
