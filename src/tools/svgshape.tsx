import React, { useState, useRef, useEffect } from "react";
import { copy } from "clipboard";

function SVGShapeGenerator() {
  const [rotation, setRotation] = useState(28);
  const [curvature, setCurvature] = useState(100);
  const [fillColor, setFillColor] = useState("#fcaf3c");
  const [scale, setScale] = useState(41);
  const [svgCode, setSvgCode] = useState("");
  const [buttonText, setButtonText] = useState("Copy SVG Code");


  const svgRef = useRef<SVGSVGElement | null>(null);


  useEffect(() => {
    svgRef.current = document.getElementById("shape-svg") as unknown as SVGSVGElement;
    generateSvgCode();
  }, [rotation, curvature, fillColor, scale]);
  
  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;
    if (buttonText === "Copied") {
      timeoutId = setTimeout(() => {
        setButtonText("Copy SVG Code");
      }, 2000);
    }
    return () => clearTimeout(timeoutId);
  }, [buttonText]);
  

  const handleRotationChange = (e: { target: { value: string } }) => {
    setRotation(parseInt(e.target.value));
  };

  const handleCurvatureChange = (e: { target: { value: string } }) => {
    setCurvature(parseInt(e.target.value));
  };

  const handleFillColorChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setFillColor(e.target.value);
  };

  const handleScaleChange = (e: { target: { value: string } }) => {
    setScale(parseFloat(e.target.value));
  };

  function copySvgCode() {
    copy(svgCode);
    setButtonText("Copied");
  }
  

  function generateSvgCode() {
    const code = `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path d="
          M 0, ${scale}
          C 0, ${curvature} ${curvature}, 0 ${scale}, 0
          S ${scale+scale}, ${curvature} ${scale+scale}, ${scale}
          ${scale+scale-curvature}, ${scale+scale} ${scale}, ${scale+scale}
          0, ${scale+scale-curvature} 0, ${scale}
        " fill="${fillColor}" transform="rotate(${rotation}, 100, 100) translate(${100-scale}, ${100-scale})"></path>
      </svg>
    `;
  
    setSvgCode(code);
  }

  

  return (
    <div className="generator-body">
      <div className="generator-header" id="svg-container" style={{ color: '#fff' }}>
        
        <div className="generator-controls">
          <div className="controls">
            <div className="control-group">
              <label htmlFor="rotation">Rotation:</label>
              <input
                type="range"
                id="rotation"
                min="-45"
                max="45"
                value={rotation}
                onChange={handleRotationChange}
              />
            </div>
            <div className="control-group">
              <label htmlFor="curvature">Curvature:</label>
              <input
                type="range"
                id="curvature"
                min="0"
                max="100"
                value={curvature}
                onChange={handleCurvatureChange}
              />
            </div>
            <div className="control-group">
              <label htmlFor="scale">Scale:</label>
              <input
                type="range"
                id="scale"
                min="0"
                max="100"
                value={scale}
                onChange={handleScaleChange}
              />
            </div>
            <div className="control-group">
              <label htmlFor="fill-color">Fill Color:</label>
              <input
                type="color"
                id="fill-color"
                value={fillColor}
                onChange={handleFillColorChange}
              />
              <input
                type="text"
                id="fill-color"
                value={fillColor}
                onChange={handleFillColorChange}
              />
            </div>
          </div>
        </div>
        <div className="shape-box">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d={`
                 M 0, ${scale}
                 C 0, ${curvature} ${curvature}, 0 ${scale}, 0
                 S ${scale+scale}, ${curvature} ${scale+scale}, ${scale}
                     ${scale+scale-curvature}, ${scale+scale} ${scale}, ${scale+scale}
                     0, ${scale+scale-curvature} 0, ${scale}
             `}fill={fillColor} transform={`rotate(
                ${rotation},
                 100,
                 100
             ) translate(
                ${100-scale},
                ${100-scale}
            )`}></path></svg>
        </div>

      <div className="svg-btn">
      <button onClick={copySvgCode}>{buttonText}</button>
    </div>
      </div>
    </div>
  );
}

export default SVGShapeGenerator;
