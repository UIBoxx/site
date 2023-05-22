import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../CSS/tutorial.css";

function NeumorphismCardGenerator() {
  const pageTitle = "Neumorphism Card Generator";
  const pageDescription =
    "Generate Neumorphism cards easily with this card generator tool.";
  const pageKeywords =
    "Neumorphism card generator, Neumorphism design, card generator, web development";

  const [cardProperties, setCardProperties] = useState({
    backgroundColor: "#F2F2F2",
    boxShadowColor: "#D9D9D9",
    size: "medium",
    borderRadius: 12,
    distance: 10,
    intensity: 10,
    blur: 10,
    shape: "concave",
  });

  const handlePropertyChange = (
    propertyName: string,
    propertyValue: string | number
  ) => {
    setCardProperties((prevProperties) => ({
      ...prevProperties,
      [propertyName]: propertyValue,
    }));
  };

  const {
    backgroundColor,
    boxShadowColor,
    size,
    borderRadius,
    distance,
    intensity,
    blur,
    shape,
  } = cardProperties;

  const cardStyle = {
    backgroundColor,
    boxShadow: getBoxShadow(shape, boxShadowColor, distance, intensity, blur),
    borderRadius: `${borderRadius}px`,
    width: getSizeValue(size),
    height: getSizeValue(size),
  };

  const generateHTMLCode = () => {
    return `<div class="neumorphism-card ${shape}">
    <h2>&#10084;</h2>
</div>`;
  };

  const generateCSSCode = () => {
    let cssCode = `.neumorphism-card {
    display: flex;
    justify-content: center;
    align-items: center;
    ${getInlineStyles()}
  }\n`;

    cssCode += `.neumorphism-card.${shape} {
    box-shadow: ${getBoxShadow(
      shape,
      boxShadowColor,
      distance,
      intensity,
      blur
    )};
  }\n`;

    return cssCode;
  };

  function getBoxShadow(
    shape: string,
    boxShadowColor: string,
    distance: number,
    intensity: number,
    blur: number
  ) {
    const boxShadow = `${distance}px ${distance}px ${blur}px ${intensity}px ${boxShadowColor}`;

    switch (shape) {
      case "concave":
        return `inset ${boxShadow},
         inset -${distance}px -${distance}px ${blur}px ${intensity}px ${boxShadowColor}`;
      case "convex":
        return `${boxShadow},
         -${distance}px -${distance}px ${blur}px ${intensity}px ${boxShadowColor}`;
      case "flat":
        return `${boxShadow},
         -${distance}px -${distance}px ${blur}px ${intensity}px ${boxShadowColor};`;
      case "inset":
        return `inset ${boxShadow},
         -${distance}px -${distance}px ${blur}px ${intensity}px ${boxShadowColor};`;
      default:
        return "";
    }
  }

  function getInlineStyles() {
    return `background-color: ${backgroundColor};
        border-radius: ${borderRadius}px;`;
  }

  function getSizeValue(size: string) {
    switch (size) {
      case "small":
        return "100px";
      case "medium":
        return "200px";
      case "large":
        return "300px";
      default:
        return "200px";
    }
  }

  return (
    <div className="generator-body">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
      </Helmet>
      <h1>Neumorphism Card</h1>
      <div className="generator-header">
        <div className="card-generator">
          <div className="card-properties">
            <div className="card-property">
              <label htmlFor="background-color">Background Color:</label>
              <input
                type="color"
                id="background-color"
                value={backgroundColor}
                onChange={(e) =>
                  handlePropertyChange("backgroundColor", e.target.value)
                }
              />
            </div>
            <div className="card-property">
              <label htmlFor="box-shadow-color">Box Shadow Color:</label>
              <input
                type="color"
                id="box-shadow-color"
                value={boxShadowColor}
                onChange={(e) =>
                  handlePropertyChange("boxShadowColor", e.target.value)
                }
              />
            </div>
            <div className="card-property">
              <label htmlFor="size">Size:</label>
              <select
                id="size"
                value={size}
                onChange={(e) => handlePropertyChange("size", e.target.value)}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <div className="card-property">
              <label htmlFor="border-radius">Border Radius:</label>
              <input
                type="range"
                id="border-radius"
                min="0"
                max="50"
                value={borderRadius}
                onChange={(e) =>
                  handlePropertyChange("borderRadius", parseInt(e.target.value))
                }
              />
            </div>
            <div className="card-property">
              <label htmlFor="distance">Distance:</label>
              <input
                type="range"
                id="distance"
                min="0"
                max="50"
                value={distance}
                onChange={(e) =>
                  handlePropertyChange("distance", parseInt(e.target.value))
                }
              />
            </div>
            <div className="card-property">
              <label htmlFor="intensity">Intensity:</label>
              <input
                type="range"
                id="intensity"
                min="0"
                max="50"
                value={intensity}
                onChange={(e) =>
                  handlePropertyChange("intensity", parseInt(e.target.value))
                }
              />
            </div>
            <div className="card-property">
              <label htmlFor="blur">Blur:</label>
              <input
                type="range"
                id="blur"
                min="0"
                max="50"
                value={blur}
                onChange={(e) =>
                  handlePropertyChange("blur", parseInt(e.target.value))
                }
              />
            </div>
            <div className="card-property">
              <label htmlFor="shape">Shape:</label>
              <select
                id="shape"
                value={shape}
                onChange={(e) => handlePropertyChange("shape", e.target.value)}
              >
                <option value="concave">Concave</option>
                <option value="convex">Convex</option>
                <option value="flat">Flat</option>
                <option value="inset">Inset</option>
              </select>
            </div>
          </div>
          <div className="neumorphism-card" style={cardStyle}>
            <h2>&#10084;</h2>
          </div>
          <div className="neubox-code-container">
            <div className="neuboxcode-section">
              <pre>{generateHTMLCode()}</pre>
              <pre>{generateCSSCode()}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NeumorphismCardGenerator;
