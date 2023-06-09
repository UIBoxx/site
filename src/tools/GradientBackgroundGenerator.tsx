import React, { useState, useRef, useEffect } from "react";
import "../CSS/tutorial.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";


function GradientBackgroundGenerator() {
  const [buttonText, setButtonText] = useState("Copy CSS Code");
  const [gradientProperties, setGradientProperties] = useState({
    gradientType: "linear",
    colors: ["#fb4b95","#eeff05"],
    direction: "to right",
    blur: 0,
  });

  const [previewSize, setPreviewSize] = useState({
    width: 250,
    height: 200,
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


  const gradientPreviewRef = useRef(null);

  const handleGradientTypeChange = (type: string) => {
    setGradientProperties((prevProperties) => ({
      ...prevProperties,
      gradientType: type,
    }));
  };

  const handleDirectionChange = (direction: string) => {
    setGradientProperties((prevProperties) => ({
      ...prevProperties,
      direction: direction,
    }));
  };

  const handleColorChange = (index: number, color: string) => {
    setGradientProperties((prevProperties) => {
      const newColors = [...prevProperties.colors];
      newColors[index] = color;
      return {
        ...prevProperties,
        colors: newColors,
      };
    });
  };

  const handleAddColor = () => {
    setGradientProperties((prevProperties) => {
      const newColors = [...prevProperties.colors, "#000000"];
      return {
        ...prevProperties,
        colors: newColors,
      };
    });
  };

  const handleRemoveColor = (index: number) => {
    setGradientProperties((prevProperties) => {
      const newColors = [...prevProperties.colors];
      newColors.splice(index, 1);
      return {
        ...prevProperties,
        colors: newColors,
      };
    });
  };

  const handleBlurChange = (blur: any) => {
    setGradientProperties((prevProperties) => ({
      ...prevProperties,
      blur: blur,
    }));
  };

  const { gradientType, colors, direction, blur } = gradientProperties;

  const getGradientValue = () => {
    switch (gradientType) {
      case "linear":
        return `linear-gradient(${direction}, ${colors.join(", ")})`;
      case "radial":
        return `radial-gradient(${colors.join(", ")})`;
      case "conic":
        return `conic-gradient(${colors.join(", ")})`;
      default:
        return "";
    }
  };

  const gradientStyle = {
    background: getGradientValue(),
    width: previewSize.width,
    height: previewSize.height,
    filter: `blur(${blur}px)`,
  };

  const generateCSSCode = () => {
    switch (gradientType) {
      case "linear":
        return `background: linear-gradient(${direction}, ${colors.join(", ")});
filter: blur(${blur}px);`;
      case "radial":
        return `background: radial-gradient(${colors.join(", ")});
filter: blur(${blur}px);`;
      case "conic":
        return `background: conic-gradient(${colors.join(", ")});
filter: blur(${blur}px);`;
      default:
        return "";
    }
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
          Free Gradient Color Generator tool | UIBoxx.in
        </title>
        <meta name="description" content="Design breathtaking color schemes with our Gradient Color Generator tool. Create seamless transitions between hues, injecting depth and visual interest into your web projects. Experiment with different gradient styles, customize starting and ending colors, and explore diverse directions and intensities. Enhance the aesthetics and mood of your designs with the perfect blend of colors created using our powerful tool."/>
<meta name="keywords" content="Gradient Color Generator tool, color schemes, seamless transitions, visual interest, gradient styles, starting color, ending color, gradient directions, gradient intensities, web design, web projects, UI design, customization, color blending, UIBoxx.in"/>

      </Helmet>
      <div className="generator-header" id="gradient-header">
        <div className="gradient-preview-container">
          <div
            className="gradient-preview"
            style={gradientStyle}
            ref={gradientPreviewRef}
          ></div>
        </div>
        <div className="generator-controls" style={{ color: "#9d064f"}}>
          <div className="control-group">
            <label htmlFor="gradient-type">Gradient Type:</label>
            <div className="gradient-type-buttons">
              <button
                className={gradientType === "linear" ? "selected" : ""}
                onClick={() => handleGradientTypeChange("linear")}
              >
                Linear
              </button>
              <button
                className={gradientType === "radial" ? "selected" : ""}
                onClick={() => handleGradientTypeChange("radial")}
              >
                Radial
              </button>
              <button
                className={gradientType === "conic" ? "selected" : ""}
                onClick={() => handleGradientTypeChange("conic")}
              >
                Conic
              </button>
            </div>
          </div>
          {colors.map((color, index) => (
            <div className="control-group" key={index}>
              <label htmlFor={`color-${index}`}>Color {index + 1}:</label>
              <div className="color-input">
                <input
                  type="color"
                  id={`color-${index}`}
                  value={color}
                  onChange={(e) => handleColorChange(index, e.target.value)}
                />
                <input
                  type="text"
                  id={`color-${index}`}
                  value={color}
                  onChange={(e) => handleColorChange(index, e.target.value)}
                />
                {index >= 2 && (
                  <button
                    id="btnn-close"
                    className="remove-color"
                    onClick={() => handleRemoveColor(index)}
                  >
                    X
                  </button>
                )}
              </div>
            </div>
          ))}
          <div className="add-color-button-container">
            {colors.length < 10 && (
              <button
                id="btnn"
                className="add-color-button"
                onClick={handleAddColor}
              >
                Add+
              </button>
            )}
          </div>
          <div className="control-group">
            <label htmlFor="blur">Blur:</label>
            <div className="blur-slider">
              <input
                type="range"
                id="blur"
                min="0"
                max="100"
                step="1"
                value={blur}
                onChange={(e) => handleBlurChange(parseFloat(e.target.value))}
              />
            </div>
          </div>
          {gradientType === "linear" && (
            <div className="control-group">
              <label>Direction:</label>
              <div className="direction-icons">
                <div
                  className="tool-icon"
                  onClick={() => handleDirectionChange("to right")}
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className={direction === "to right" ? "selected" : ""}
                  />
                </div>
                <div
                  className="tool-icon"
                  onClick={() => handleDirectionChange("to left")}
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    rotation={180}
                    className={direction === "to left" ? "selected" : ""}
                  />
                </div>
                <div
                  className="tool-icon"
                  onClick={() => handleDirectionChange("to top")}
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    rotation={270}
                    className={direction === "to top" ? "selected" : ""}
                  />
                </div>
                <div
                  className="tool-icon"
                  onClick={() => handleDirectionChange("to bottom")}
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    rotation={90}
                    className={direction === "to bottom" ? "selected" : ""}
                  />
                </div>
              </div>
            </div>
          )}
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

export default GradientBackgroundGenerator;
