import React, { useState } from "react";
import "../CSS/tools.css";
import { Properties } from "csstype";
import { Helmet } from "react-helmet";


type FlexboxProperties = Properties<string | number, string>;

function FlexboxGenerator() {
  const pageTitle = "Flexbox Generator";
  const pageDescription = "Generate flexbox layouts easily with this flexbox generator tool.";
  const pageKeywords = "flexbox generator, flexbox layout, CSS flexbox, web development";

  const [flexProperties, setFlexProperties] = useState<FlexboxProperties>({
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
  });

  const handlePropertyChange = (
    propertyName: keyof FlexboxProperties,
    propertyValue: string
  ) => {
    setFlexProperties((prevProperties) => ({
      ...prevProperties,
      [propertyName]: propertyValue,
    }));
  };

  const { flexDirection, flexWrap, justifyContent, alignItems, alignContent } =
    flexProperties;

  const flexContainerStyle: FlexboxProperties = {
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignContent,
  };

  const containerStyle: React.CSSProperties = {
    ...flexContainerStyle,
  };

  const generateHTMLCode = () => {
    return `<div class="flex-container">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>`;
  };

  const generateCSSCode = () => {
    return `.flex-container{
display: flex;
flex-direction: ${flexDirection};
flex-wrap: ${flexWrap};
justify-content: ${justifyContent};
align-items: ${alignItems};
align-content: ${alignContent};
}`;
  };

  return (
    <div className="generator-body">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
      </Helmet>
      <div className="generator-header">
      <h1>Flexbox</h1>
        <div className="flexbox-generator" style={{color: '#fff'}}>
          <div className="flex-properties">
            <div className="flex-property">
              <label htmlFor="flex-direction">Flex Direction:</label>
              <select
                id="flex-direction"
                value={flexDirection}
                onChange={(e) =>
                  handlePropertyChange("flexDirection", e.target.value)
                }
              >
                <option value="row">Row</option>
                <option value="row-reverse">Row Reverse</option>
                <option value="column">Column</option>
                <option value="column-reverse">Column Reverse</option>
              </select>
            </div>
            <div className="flex-property">
              <label htmlFor="flex-wrap">Flex Wrap:</label>
              <select
                id="flex-wrap"
                value={flexWrap}
                onChange={(e) =>
                  handlePropertyChange("flexWrap", e.target.value)
                }
              >
                <option value="nowrap">No Wrap</option>
                <option value="wrap">Wrap</option>
                <option value="wrap-reverse">Wrap Reverse</option>
              </select>
            </div>
            <div className="flex-property">
              <label htmlFor="justify-content">Justify Content:</label>
              <select
                id="justify-content"
                value={justifyContent}
                onChange={(e) =>
                  handlePropertyChange("justifyContent", e.target.value)
                }
              >
                <option value="flex-start">Flex Start</option>
                <option value="flex-end">Flex End</option>
                <option value="center">Center</option>
                <option value="space-between">Space Between</option>
                <option value="space-around">Space Around</option>
                <option value="space-evenly">Space Evenly</option>
              </select>
            </div>
            <div className="flex-property">
              <label htmlFor="align-items">Align Items:</label>
              <select
                id="align-items"
                value={alignItems}
                onChange={(e) =>
                  handlePropertyChange("alignItems", e.target.value)
                }
              >
                <option value="stretch">Stretch</option>
                <option value="flex-start">Flex Start</option>
                <option value="flex-end">Flex End</option>
                <option value="center">Center</option>
                <option value="baseline">Baseline</option>
              </select>
            </div>
            <div className="flex-property">
              <label htmlFor="align-content">Align Content:</label>
              <select
                id="align-content"
                value={alignContent}
                onChange={(e) =>
                  handlePropertyChange("alignContent", e.target.value)
                }
              >
                <option value="stretch">Stretch</option>
                <option value="flex-start">Flex Start</option>
                <option value="flex-end">Flex End</option>
                <option value="center">Center</option>
                <option value="space-between">Space Between</option>
                <option value="space-around">Space Around</option>
                <option value="space-evenly">Space Evenly</option>
              </select>
            </div>
          </div>
          <div className="flex-container" style={containerStyle}>
            <div className="flex-item">Item 1</div>
            <div className="flex-item">Item 2</div>
            <div className="flex-item">Item 3</div>
          </div>
          <div className="code-container">
            <div className="code-section">
              <pre>{generateHTMLCode()}</pre>
              <pre>{generateCSSCode()}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlexboxGenerator;
