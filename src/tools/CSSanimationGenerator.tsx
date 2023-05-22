import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../CSS/tutorial.css";

function AnimationGenerator() {
  const pageTitle = "Animation Generator";
  const pageDescription =
    "Generate CSS animations easily with this animation generator tool.";
  const pageKeywords = "CSS animation generator, animation design, web development";

  const [animationProperties, setAnimationProperties] = useState({
    animationName: "",
    animationDuration: "1s",
    animationTimingFunction: "ease",
    animationDelay: "0s",
    animationIterationCount: "infinite",
    animationDirection: "normal",
    animationFillMode: "none",
    animationPlayState: "running",
  });

  const handlePropertyChange = (propertyName: string, propertyValue: string) => {
    setAnimationProperties((prevProperties) => ({
      ...prevProperties,
      [propertyName]: propertyValue,
    }));
  };

  const { animationName, animationDuration, animationTimingFunction, animationDelay,
    animationIterationCount, animationDirection, animationFillMode, animationPlayState } = animationProperties;

  const animationStyle = {
    animationName,
    animationDuration,
    animationTimingFunction,
    animationDelay,
    animationIterationCount,
    animationDirection,
    animationFillMode,
    animationPlayState,
  };

  const generateCSSCode = () => {
    return `
@keyframes ${animationName} {
  0% {
    /* CSS properties at the start of the animation */
  }
  100% {
    /* CSS properties at the end of the animation */
  }
}

.animated-element {
  animation-name: ${animationName};
  animation-duration: ${animationDuration};
  animation-timing-function: ${animationTimingFunction};
  animation-delay: ${animationDelay};
  animation-iteration-count: ${animationIterationCount};
  animation-direction: ${animationDirection};
  animation-fill-mode: ${animationFillMode};
  animation-play-state: ${animationPlayState};
}`;
  };

  return (
    <div className="generator-body">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
      </Helmet>
      <h1>Animation Generator</h1>
      <div className="generator-header">
        <div className="animation-generator">
          <div className="animation-properties">
            <div className="animation-property">
              <label htmlFor="animation-name">Animation Name:</label>
              <input
                type="text"
                id="animation-name"
                value={animationName}
                onChange={(e) =>
                  handlePropertyChange("animationName", e.target.value)
                }
              />
            </div>
            <div className="animation-property">
              <label htmlFor="animation-duration">Animation Duration:</label>
              <input
                type="text"
                id="animation-duration"
                value={animationDuration}
                onChange={(e) =>
                  handlePropertyChange("animationDuration", e.target.value)
                }
              />
            </div>
            <div className="animation-property">
              <label htmlFor="animation-timing-function">
                Animation Timing Function:
              </label>
              <input
                type="text"
                id="animation-timing-function"
                value={animationTimingFunction}
                onChange={(e) =>
                  handlePropertyChange(
                    "animationTimingFunction",
                    e.target.value
                  )
                }
              />
            </div>
            <div className="animation-property">
              <label htmlFor="animation-delay">Animation Delay:</label>
              <input
                type="text"
                id="animation-delay"
                value={animationDelay}
                onChange={(e) =>
                  handlePropertyChange("animationDelay", e.target.value)
                }
              />
            </div>
            <div className="animation-property">
              <label htmlFor="animation-iteration-count">
                Animation Iteration Count:
              </label>
              <input
                type="text"
                id="animation-iteration-count"
                value={animationIterationCount}
                onChange={(e) =>
                  handlePropertyChange(
                    "animationIterationCount",
                    e.target.value
                  )
                }
              />
            </div>
            <div className="animation-property">
              <label htmlFor="animation-direction">Animation Direction:</label>
              <select
                id="animation-direction"
                value={animationDirection}
                onChange={(e) =>
                  handlePropertyChange("animationDirection", e.target.value)
                }
              >
                <option value="normal">Normal</option>
                <option value="reverse">Reverse</option>
                <option value="alternate">Alternate</option>
                <option value="alternate-reverse">Alternate Reverse</option>
              </select>
            </div>
            <div className="animation-property">
              <label htmlFor="animation-fill-mode">Animation Fill Mode:</label>
              <select
                id="animation-fill-mode"
                value={animationFillMode}
                onChange={(e) =>
                  handlePropertyChange("animationFillMode", e.target.value)
                }
              >
                <option value="none">None</option>
                <option value="forwards">Forwards</option>
                <option value="backwards">Backwards</option>
                <option value="both">Both</option>
              </select>
            </div>
            <div className="animation-property">
              <label htmlFor="animation-play-state">Animation Play State:</label>
              <select
                id="animation-play-state"
                value={animationPlayState}
                onChange={(e) =>
                  handlePropertyChange("animationPlayState", e.target.value)
                }
              >
                <option value="running">Running</option>
                <option value="paused">Paused</option>
              </select>
            </div>
          </div>
          <div className="animated-element" style={animationStyle}>
            <h2>&#9733;</h2>
          </div>
          <div className="animation-code-container">
            <pre>{generateCSSCode()}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimationGenerator;
