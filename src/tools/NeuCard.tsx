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
    borderRadius: "12",
    cardForm: "concave",
  });

  const handlePropertyChange = (
    propertyName: string,
    propertyValue: string
  ) => {
    setCardProperties((prevProperties) => ({
      ...prevProperties,
      [propertyName]: propertyValue,
    }));
  };

  const { backgroundColor, boxShadowColor, borderRadius, cardForm } =
    cardProperties;

  const cardStyle = {
    backgroundColor,
    boxShadow: getBoxShadow(cardForm, boxShadowColor),
    borderRadius: `${borderRadius}px`,
  };

  const generateHTMLCode = () => {
    return `<div class="neumorphism-card ${cardForm}">
    <h2>&#10084;</h2>
</div>`;
  };

  const generateCSSCode = () => {
    let cssCode = `.neumorphism-card {
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${getInlineStyles()}
  }\n`;
  
    switch (cardForm) {
      case "concave":
        cssCode += `.neumorphism-card .concave {
    box-shadow: ${getBoxShadow("concave", boxShadowColor)};
  }\n`;
        break;
      case "convex":
        cssCode += `.neumorphism-card .convex {
    box-shadow: ${getBoxShadow("convex", boxShadowColor)};
  }\n`;
        break;
      case "flat":
        cssCode += `.neumorphism-card .flat {
    box-shadow: ${getBoxShadow("flat", boxShadowColor)};
  }\n`;
        break;

        case "inset":
        cssCode += `.neumorphism-card .inset {
    box-shadow: ${getBoxShadow("inset", boxShadowColor)};
  }\n`;
        break;
      default:
        break;
    }
  
    return cssCode;
  };
  

  function getBoxShadow(form: string, boxShadowColor: string) {
    switch (form) {
      case "concave":
        return `inset 8px 8px 16px ${boxShadowColor},
         inset -8px -8px 16px ${boxShadowColor}`;
      case "convex":
        return `4px 4px 10px ${boxShadowColor},
         -4px -4px 10px ${boxShadowColor}`;
      case "flat":
        return `8px 8px 16px ${boxShadowColor},
         -8px -8px 16px ${boxShadowColor};`;
         case "inset":
        return `inset 8px 8px 16px ${boxShadowColor},
         -8px -8px 16px ${boxShadowColor};`;
      default:
        return "";
    }
  }

  function getInlineStyles() {
    return `background-color: ${backgroundColor};
    border-radius: ${borderRadius}px;`;
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
              <label htmlFor="border-radius">Border Radius:</label>
              <input
                type="range"
                id="border-radius"
                min="0"
                max="50"
                value={borderRadius}
                onChange={(e) =>
                  handlePropertyChange("borderRadius", e.target.value)
                }
              />
            </div>
            <div className="card-property">
              <label htmlFor="card-form">Card Type:</label>
              <select
                id="card-form"
                value={cardForm}
                onChange={(e) =>
                  handlePropertyChange("cardForm", e.target.value)
                }
              >
                <option value="concave">Concave</option>
                <option value="convex">Convex</option>
                <option value="flat">Flat</option>
                <option value="inset">Inset</option>
              </select>
            </div>
          <div className={`neumorphism-card ${cardForm}`} style={cardStyle}>
            <h2>&#10084;</h2>
          </div>
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
