import React, { useEffect, useState } from "react";
import "../CSS/tools.css";
import { Helmet } from "react-helmet";


function InputGenerator() {

  const pageTitle = "Input Generator Tool";
  const pageDescription = "Generate customized input fields effortlessly with this user-friendly Input Generator tool.";
  const pageKeywords = "input generator, form input creator, HTML input fields, web development";


  const [inputElement, setInputElement] = useState<HTMLInputElement>();

  useEffect(() => {
    const form = document.getElementById("uiForm") as HTMLFormElement;
    const generatedUIElement = document.getElementById("generatedUI");
    const generatedHTMLCodeElement =
      document.getElementById("generatedHTMLCode");
    const generatedCSSCodeElement = document.getElementById("generatedCSSCode");

    let inputElement: HTMLInputElement | undefined;

    form.addEventListener("input", function () {
      const inputType = (
        document.getElementById("inputType") as HTMLSelectElement
      ).value;
      const inputPlaceholder = (
        document.getElementById("inputPlaceholder") as HTMLInputElement
      ).value;
      const inputWidth = (
        document.getElementById("inputWidth") as HTMLInputElement
      ).value;
      const inputHeight = (
        document.getElementById("inputHeight") as HTMLInputElement
      ).value;
      const inputFontSize = (
        document.getElementById("inputFontSize") as HTMLInputElement
      ).value;
      const inputBorderColor = (
        document.getElementById("inputBorderColor") as HTMLInputElement
      ).value;
      const inputBorderWidth = (
        document.getElementById("inputBorderWidth") as HTMLInputElement
      ).value;
      const inputBorderStyle = (
        document.getElementById("inputBorderStyle") as HTMLSelectElement
      ).value;
      const inputBorderRadius = (
        document.getElementById("inputBorderRadius") as HTMLInputElement
      ).value;
      const inputPaddingHorizontal = (
        document.getElementById("inputPaddingHorizontal") as HTMLInputElement
      ).value;
      const inputPaddingVertical = (
        document.getElementById("inputPaddingVertical") as HTMLInputElement
      ).value;
      const inputBackgroundColor = (
        document.getElementById("inputBackgroundColor") as HTMLInputElement
      ).value;
      const inputTextColor = (
        document.getElementById("inputTextColor") as HTMLInputElement
      ).value;

      if (!inputElement) {
        inputElement = createInput(
          inputType,
          inputPlaceholder,
          inputWidth,
          inputHeight,
          inputFontSize,
          inputBorderColor,
          inputBorderWidth,
          inputBorderStyle,
          inputBorderRadius,
          inputPaddingHorizontal,
          inputPaddingVertical,
          inputBackgroundColor,
          inputTextColor
        );
        if (generatedUIElement) {
          generatedUIElement.innerHTML = ""; // Clear the UI container before adding the input
          generatedUIElement.appendChild(inputElement);
        }
      } else {
        updateInput(
          inputElement,
          inputType,
          inputPlaceholder,
          inputWidth,
          inputHeight,
          inputFontSize,
          inputBorderColor,
          inputBorderWidth,
          inputBorderStyle,
          inputBorderRadius,
          inputPaddingHorizontal,
          inputPaddingVertical,
          inputBackgroundColor,
          inputTextColor
        );
      }

      const generatedHTMLCode = generateHTMLCode(inputElement);
      const generatedCSSCode = generateCSSCode(inputElement);
      if (generatedHTMLCodeElement) {
        generatedHTMLCodeElement.textContent = generatedHTMLCode;
      }
      if (generatedCSSCodeElement) {
        generatedCSSCodeElement.textContent = generatedCSSCode;
      }
    });

    function createInput(
      type: string,
      placeholder: string,
      width: string,
      height: string,
      fontSize: string,
      borderColor: string,
      borderWidth: string,
      borderStyle: string,
      borderRadius: string,
      paddingHorizontal: string,
      paddingVertical: string,
      backgroundColor: string,
      textColor: string
    ) {
      const input = document.createElement("input");
      input.type = type;
      input.placeholder = placeholder;
      input.style.width = `${width}px`;
      input.style.height = `${height}px`;
      input.style.fontSize = `${fontSize}px`;
      input.style.borderColor = borderColor;
      input.style.borderWidth = `${borderWidth}px`;
      input.style.borderStyle = borderStyle;
      input.style.borderRadius = `${borderRadius}px`;
      input.style.padding = `${paddingVertical}px ${paddingHorizontal}px`;
      input.style.backgroundColor = backgroundColor;
      input.style.color = textColor;

      return input;
    }

    function updateInput(
      input: HTMLInputElement,
      type: string,
      placeholder: string,
      width: string,
      height: string,
      fontSize: string,
      borderColor: string,
      borderWidth: string,
      borderStyle: string,
      borderRadius: string,
      paddingHorizontal: string,
      paddingVertical: string,
      backgroundColor: string,
      textColor: string
    ) {
      input.type = type;
      input.placeholder = placeholder;
      input.style.width = `${width}px`;
      input.style.height = `${height}px`;
      input.style.fontSize = `${fontSize}px`;
      input.style.borderColor = borderColor;
      input.style.borderWidth = `${borderWidth}px`;
      input.style.borderStyle = borderStyle;
      input.style.borderRadius = `${borderRadius}px`;
      input.style.padding = `${paddingVertical}px ${paddingHorizontal}px`;
      input.style.backgroundColor = backgroundColor;
      input.style.color = textColor;
    }

    function generateHTMLCode(input: HTMLInputElement | undefined) {
      if (!input) return "";

      return `<input type="${input.type}" placeholder="${input.placeholder}" />`;
    }

    function generateCSSCode(input: HTMLInputElement | undefined) {
      if (!input) return "";

      const clonedInput = input.cloneNode(true) as HTMLInputElement;
      const generatedCSSCode = `
input {
  width: ${clonedInput.style.width};
  height: ${clonedInput.style.height};
  font-size: ${clonedInput.style.fontSize};
  border-color: ${clonedInput.style.borderColor};
  border-width: ${clonedInput.style.borderWidth};
  border-style: ${clonedInput.style.borderStyle};
  border-radius: ${clonedInput.style.borderRadius};
  padding: ${clonedInput.style.padding};
  background-color: ${clonedInput.style.backgroundColor};
  color: ${clonedInput.style.color};
}`;
      return generatedCSSCode;
    }
  }, []);

  return (
    <div className="generator-body">
      <h1>Input Generator</h1>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
      </Helmet>
      <div className="generator-header">
        <div className="form-container">
          <form id="uiForm">
            <label htmlFor="inputType">Input Type:</label>
            <select id="inputType">
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="email">Email</option>
              <option value="password">Password</option>
              <option value="date">Date</option>
              <option value="time">Time</option>
              <option value="checkbox">Checkbox</option>
              <option value="radio">Radio</option>
              <option value="file">File</option>
              <option value="color">Color</option>
              <option value="range">Range</option>
            </select>

            <br />
            <label htmlFor="inputPlaceholder">Input Placeholder:</label>
            <input type="text" id="inputPlaceholder" />
            <br />
            <label htmlFor="inputWidth">Width:</label>
            <input
              type="range"
              id="inputWidth"
              min="0"
              max="500"
              step="1"
              defaultValue="200"
            />

            <br />
            <label htmlFor="inputHeight">Height:</label>
            <input
              type="range"
              id="inputHeight"
              min="0"
              max="100"
              step="1"
              defaultValue="40"
            />
            <br />
            <label htmlFor="inputFontSize">Font Size:</label>
            <input
              type="range"
              id="inputFontSize"
              min="8"
              max="50"
              step="1"
              defaultValue="14"
            />
            <br />
            <div className="ToolColors">
              <label htmlFor="inputBorderColor">Border Color:</label>
              <input type="color" id="inputBorderColor" />
              <label htmlFor="inputBackgroundColor">Background Color:</label>
              <input type="color" id="inputBackgroundColor" />
              <label htmlFor="inputTextColor">Text Color:</label>
              <input type="color" id="inputTextColor" />
            </div>
            <br />
            <label htmlFor="inputBorderWidth">Border Width:</label>
            <input
              type="range"
              id="inputBorderWidth"
              min="0"
              max="10"
              step="1"
              defaultValue="1"
            />
            <br />
            <label htmlFor="inputBorderStyle">Border Style:</label>
            <select id="inputBorderStyle">
              <option value="none">None</option>
              <option value="solid">Solid</option>
              <option value="dashed">Dashed</option>
              <option value="dotted">Dotted</option>
              {/* Add more border styles as needed */}
            </select>
            <br />
            <label htmlFor="inputBorderRadius">Border Radius:</label>
            <input
              type="range"
              id="inputBorderRadius"
              min="0"
              max="50"
              step="1"
              defaultValue="0"
            />
            <br />
            <label htmlFor="inputPaddingHorizontal">
              Padding (Horizontal):
            </label>
            <input
              type="range"
              id="inputPaddingHorizontal"
              min="0"
              max="20"
              step="1"
              defaultValue="5"
            />
            <br />
            <label htmlFor="inputPaddingVertical">Padding (Vertical):</label>
            <input
              type="range"
              id="inputPaddingVertical"
              min="0"
              max="20"
              step="1"
              defaultValue="5"
            />
          </form>
        </div>
        <hr />
        <div className="generated-Ui">
          <h2>Generated Input</h2>
          <div id="generatedUI"></div>
        </div>

        <div className="code-container">
          <div className="html-code">
            <pre id="generatedHTMLCode"></pre>
          </div>
          <div className="css-code">
            <pre id="generatedCSSCode"></pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputGenerator;
