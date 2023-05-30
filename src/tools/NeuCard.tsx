import React, { useState, useEffect } from "react";
import "../CSS/tutorial.css";
import { Helmet } from "react-helmet";

function NeumorphismCardGenerator() {
  const [buttonText, setButtonText] = useState("Copy CSS Code");
  const [cardProperties, setCardProperties] = useState<{
    backgroundColor: string;
    boxShadowColor: string;
    size: string;
    borderRadius: number;
    distance: number;
    intensity: number;
    blur: number;
    shape: string;
  }>({
    backgroundColor: "#f1eaea",
    boxShadowColor: "#a6a6a6",
    size: "medium",
    borderRadius: 10,
    distance: 3,
    intensity: 1,
    blur: 10,
    shape: "convex",
  });

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

  const handlePropertyChange = (
    propertyName: string,
    propertyValue: string | number
  ) => {
    if (propertyName === "backgroundColor") {
      // Automatically adjust boxShadowColor based on the new backgroundColor
      const isDarkBackground = isDarkColor(propertyValue as string);
      const newBoxShadowColor = isDarkBackground ? "#8d8686" : "#a19b9b";
      setCardProperties((prevProperties) => ({
        ...prevProperties,
        backgroundColor: propertyValue as string,
        boxShadowColor: newBoxShadowColor,
      }));
    } else {
      setCardProperties((prevProperties) => ({
        ...prevProperties,
        [propertyName]: propertyValue,
      }));
    }
  };

  const {
    backgroundColor,
    boxShadowColor,
    borderRadius,
    distance,
    intensity,
    blur,
    shape,
  } = cardProperties;

  const cardStyle = {
    backgroundColor,
    boxShadow: getBoxShadow(shape, boxShadowColor, distance, intensity, blur),
    borderRadius: `${borderRadius}%`,
  };

  const generateCSSCode = () => {
    let cssCode = ``;
    cssCode += `
    background-color: ${backgroundColor};
    border-radius: ${borderRadius}%;
    box-shadow:
    ${getBoxShadow(shape, boxShadowColor, distance, intensity, blur)};
  `;

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
        return `${boxShadow},-${distance}px -${distance}px ${blur}px ${intensity}px ${boxShadowColor}`;
      default:
        return "";
    }
  }

  function getInlineStyles() {
    return `background-color: ${backgroundColor};
        border-radius: ${borderRadius}%;`;
  }

  function isDarkColor(color: string) {
    const hexColor = color.replace("#", "");
    const red = parseInt(hexColor.substr(0, 2), 16);
    const green = parseInt(hexColor.substr(2, 2), 16);
    const blue = parseInt(hexColor.substr(4, 2), 16);

    // Calculate relative luminance (per ITU-R BT.709)
    const luminance = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;

    // Return true if the luminance is below a threshold (e.g., 0.5)
    return luminance < 0.5;
  }

  function copyCssCode() {
    const code = generateCSSCode();
    navigator.clipboard.writeText(code).then(() => {
      setButtonText("Copied");
    });
  }

  return (
    <div className="generator-body" style={{ backgroundColor }}>
      <Helmet>
        <meta
          name="description"
          content="Elevate your web designs with our free UI components, innovative Neumorphism and Glassmorphism tools. Create sleek and modern user interfaces effortlessly. Customize shadows, gradients, and colors. Experience the future of UI design and revolutionize your projects."
        />
        <meta
          name="keywords"
          content="UI components, free web designs, Neumorphism tool, Glassmorphism tool, gradient color generator, web design tools, HTML, CSS, JavaScript, user interface design, web development, front-end development, responsive design, SVG shapes, neumorphic effects, glassmorphic effects, color schemes, visual design, web design inspiration"
        />
        <title>
          UIboxx.in | Neumorphism Tool, Glassmorphism Tool, Gradient Color
          Generator
        </title>
      </Helmet>
      <div className="generator-header" style={{ backgroundColor }}>
        <div className="card-generator">
          <div className="neumorphism-card" style={cardStyle}>
            <h2>🤖</h2>
          </div>
          <div className="card-properties" style={{ color: "#9d064f" }}>
            <div className="card-property">
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
            <div className="card-property">
              <label htmlFor="box-shadow-color">Box Shadow Color:</label>
              <input
                type="color"
                id="box-shadow-color-picker"
                value={boxShadowColor}
                onChange={(e) =>
                  handlePropertyChange("boxShadowColor", e.target.value)
                }
              />
              <input
                type="text"
                id="box-shadow-color"
                value={boxShadowColor}
                onChange={(e) =>
                  handlePropertyChange("backgroundColor", e.target.value)
                }
              />
            </div>
            <div className="card-property">
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
            <div className="card-property">
              <label htmlFor="distance">Distance:</label>
              <input
                type="range"
                id="distance"
                min="0"
                max="100"
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
                max="100"
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
                max="100"
                value={blur}
                onChange={(e) =>
                  handlePropertyChange("blur", parseInt(e.target.value))
                }
              />
            </div>
            <div className="card-property">
              <div className="shape-buttons">
                <button
                  id="concavebtn"
                  style={{ backgroundColor }}
                  className={`shape-button ${
                    shape === "concave" ? "active" : ""
                  }`}
                  onClick={() => handlePropertyChange("shape", "concave")}
                ></button>
                <button
                  id="convexbtn"
                  style={{ backgroundColor }}
                  className={`shape-button ${
                    shape === "convex" ? "active" : ""
                  }`}
                  onClick={() => handlePropertyChange("shape", "convex")}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="code-container" id="code-container">
        <div className="code-section">
          <pre className="css-code">{generateCSSCode()}</pre>
        </div>
        <div className="css-btn">
          <button onClick={copyCssCode}>{buttonText}</button>
        </div>
      </div>
    </div>
  );
}

export default NeumorphismCardGenerator;
