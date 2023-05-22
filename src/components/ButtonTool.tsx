import React, { useEffect, useState } from 'react';
import '../CSS/tools.css';

function ButtonGenerator() {
  const [buttonElement, setButtonElement] = useState<HTMLButtonElement>();

  useEffect(() => {
    const form = document.getElementById("uiForm") as HTMLFormElement;
    const generatedUIElement = document.getElementById("generatedUI");
    const generatedHTMLCodeElement = document.getElementById("generatedHTMLCode");
    const generatedCSSCodeElement = document.getElementById("generatedCSSCode");

    let buttonElement: HTMLButtonElement | undefined;

    form.addEventListener("input", function () {
      const buttonLabel = (document.getElementById("componentLabel") as HTMLInputElement).value;
      const buttonBgColor = (document.getElementById("componentBgColor") as HTMLInputElement).value;
      const buttonTextColor = (document.getElementById("componentTextColor") as HTMLInputElement).value;
      const buttonFontSize = (document.getElementById("componentFontSize") as HTMLInputElement).value;
      const buttonBorderRadius = (document.getElementById("componentBorderRadius") as HTMLInputElement).value;
      const buttonMarginHorizontal = (document.getElementById("componentMarginHorizontal") as HTMLInputElement).value;
      const buttonMarginVertical = (document.getElementById("componentMarginVertical") as HTMLInputElement).value;
      const buttonPaddingHorizontal = (document.getElementById("componentPaddingHorizontal") as HTMLInputElement).value;
      const buttonPaddingVertical = (document.getElementById("componentPaddingVertical") as HTMLInputElement).value;

      if (!buttonElement) {
        buttonElement = createButton(
          buttonLabel,
          buttonBgColor,
          buttonTextColor,
          buttonFontSize,
          buttonBorderRadius,
          buttonMarginHorizontal,
          buttonMarginVertical,
          buttonPaddingHorizontal,
          buttonPaddingVertical
        );
        if (generatedUIElement) {
          generatedUIElement.innerHTML = ''; // Clear the UI container before adding the button
          generatedUIElement.appendChild(buttonElement);
        }
      } else {
        updateButton(
          buttonElement,
          buttonLabel,
          buttonBgColor,
          buttonTextColor,
          buttonFontSize,
          buttonBorderRadius,
          buttonMarginHorizontal,
          buttonMarginVertical,
          buttonPaddingHorizontal,
          buttonPaddingVertical
        );
      }

      const generatedHTMLCode = generateHTMLCode(buttonElement);
      const generatedCSSCode = generateCSSCode(buttonElement);
      if (generatedHTMLCodeElement) {
        generatedHTMLCodeElement.textContent = generatedHTMLCode;
      }
      if (generatedCSSCodeElement) {
        generatedCSSCodeElement.textContent = generatedCSSCode;
      }
    });

    function createButton(
      label: string,
      bgColor: string,
      textColor: string,
      fontSize: string,
      borderRadius: string,
      marginHorizontal: string,
      marginVertical: string,
      paddingHorizontal: string,
      paddingVertical: string
    ) {
      const button = document.createElement("button");
      button.classList.add("button");
      button.textContent = label;
      button.style.backgroundColor = bgColor;
      button.style.color = textColor;
      button.style.fontSize = `${fontSize}px`;
      button.style.borderRadius = `${borderRadius}px`;
      button.style.margin = `${marginVertical}px ${marginHorizontal}px`;
      button.style.padding = `${paddingVertical}px ${paddingHorizontal}px`;

      return button;
    }

    function updateButton(
      button: HTMLButtonElement,
      label: string,
      bgColor: string,
      textColor: string,
      fontSize: string,
      borderRadius: string,
      marginHorizontal: string,
      marginVertical: string,
      paddingHorizontal: string,
      paddingVertical: string
    ) {
      button.textContent = label;
      button.style.backgroundColor = bgColor;
      button.style.color = textColor;
      button.style.fontSize = `${fontSize}px`;
      button.style.borderRadius = `${borderRadius}px`;
      button.style.margin = `${marginVertical}px ${marginHorizontal}px`;
      button.style.padding = `${paddingVertical}px ${paddingHorizontal}px`;
    }

    function generateHTMLCode(button: HTMLButtonElement | undefined) {
      if (!button) return '';

      return `<button class="button">${button.textContent}</button>`;
    }

    function generateCSSCode(button: HTMLButtonElement | undefined) {
      if (!button) return '';

      const clonedButton = button.cloneNode(true) as HTMLButtonElement;
      clonedButton.classList.remove("button");
      const generatedCSSCode = `
.button {
  background-color: ${clonedButton.style.backgroundColor};
  color: ${clonedButton.style.color};
  font-size: ${clonedButton.style.fontSize};
  border-radius: ${clonedButton.style.borderRadius};
  margin: ${clonedButton.style.margin};
  padding: ${clonedButton.style.padding};
}`;
      return generatedCSSCode;
    }
  }, []);

  return (
    <div className="generator-body">
            <h1>Button Generator</h1>
        <div className="generator-header">
        <div className="form-container">
        <form id="uiForm">
          <label htmlFor="componentLabel">Button Label:</label>
          <input type="text" id="componentLabel" />
          <br />
          <div className="ToolColors">
          <label htmlFor="componentBgColor">Background Color:</label>
          <input type="color" id="componentBgColor" />
          <label htmlFor="componentTextColor">Text Color:</label>
          <input type="color" id="componentTextColor" />
          </div>
          <br />
          <label htmlFor="componentFontSize">Font Size:</label>
          <input
            type="range"
            id="componentFontSize"
            min="8"
            max="100"
            step="1"
            defaultValue="14"
          />
          <br />
          <label htmlFor="componentBorderRadius">Border Radius:</label>
          <input
            type="range"
            id="componentBorderRadius"
            min="0"
            max="100"
            step="1"
            defaultValue="0"
          />
          <br />
          <label htmlFor="componentMarginHorizontal">Margin (Horizontal):</label>
          <input
            type="range"
            id="componentMarginHorizontal"
            min="0"
            max="100"
            step="1"
            defaultValue="0"
          />
          <br />
          <label htmlFor="componentMarginVertical">Margin (Vertical):</label>
          <input
            type="range"
            id="componentMarginVertical"
            min="0"
            max="100"
            step="1"
            defaultValue="0"
          />
          <br />
          <label htmlFor="componentPaddingHorizontal">Padding (Horizontal):</label>
          <input
            type="range"
            id="componentPaddingHorizontal"
            min="0"
            max="100"
            step="1"
            defaultValue="0"
          />
          <br />
          <label htmlFor="componentPaddingVertical">Padding (Vertical):</label>
          <input
            type="range"
            id="componentPaddingVertical"
            min="0"
            max="100"
            step="1"
            defaultValue="0"
          />
        </form>
      </div>
      <hr />
      <div className="generated-Ui">
        <h2>Generated Button</h2>
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

export default ButtonGenerator;