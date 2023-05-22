import React, { useState } from "react";
import "../CSS/tools.css";
import { Properties } from "csstype";

type GridProperties = Properties<string | number, string>;

function GridGenerator() {
  const [gridProperties, setGridProperties] = useState<GridProperties>({
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "auto",
    gridColumnGap: "10px",
    gridRowGap: "10px",
    justifyItems: "stretch",
    alignItems: "stretch",
  });

  const handlePropertyChange = (
    propertyName: keyof GridProperties,
    propertyValue: string
  ) => {
    setGridProperties((prevProperties) => ({
      ...prevProperties,
      [propertyName]: propertyValue,
    }));
  };

  const {
    gridTemplateColumns,
    gridTemplateRows,
    gridColumnGap,
    gridRowGap,
    justifyItems,
    alignItems,
  } = gridProperties;

  const gridContainerStyle: GridProperties = {
    gridTemplateColumns,
    gridTemplateRows,
    gridColumnGap,
    gridRowGap,
    justifyItems,
    alignItems,
  };

  const containerStyle: React.CSSProperties = {
    ...gridContainerStyle,
  };

  const generateHTMLCode = () => {
    return `<div class="grid-container" style="${generateCSSCode()}">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
</div>`;
  };

  const generateCSSCode = () => {
    return `display: grid;
grid-template-columns: ${gridTemplateColumns};
grid-template-rows: ${gridTemplateRows};
grid-column-gap: ${gridColumnGap};
grid-row-gap: ${gridRowGap};
justify-items: ${justifyItems};
align-items: ${alignItems};`;
  };

  return (
    <div className="generator-body">
      <h1>Gridview</h1>
      <div className="generator-header">
        <div className="grid-generator">
          <div className="grid-properties">
            <div className="grid-property">
              <label htmlFor="grid-template-columns">Grid Template Columns:</label>
              <input
                id="grid-template-columns"
                type="text"
                value={gridTemplateColumns}
                onChange={(e) =>
                  handlePropertyChange("gridTemplateColumns", e.target.value)
                }
              />
            </div>
            <div className="grid-property">
              <label htmlFor="grid-template-rows">Grid Template Rows:</label>
              <input
                id="grid-template-rows"
                type="text"
                value={gridTemplateRows}
                onChange={(e) =>
                  handlePropertyChange("gridTemplateRows", e.target.value)
                }
              />
            </div>
            <div className="grid-property">
              <label htmlFor="grid-column-gap">Grid Column Gap:</label>
              <input
                id="grid-column-gap"
                type="text"
                value={gridColumnGap}
                onChange={(e) =>
                  handlePropertyChange("gridColumnGap", e.target.value)
                }
              />
            </div>
            <div className="grid-property">
              <label htmlFor="grid-row-gap">Grid Row Gap:</label>
              <input
                id="grid-row-gap"
                type="text"
                value={gridRowGap}
                onChange={(e) =>
                  handlePropertyChange("gridRowGap", e.target.value)
                }
              />
            </div>
            <div className="grid-property">
              <label htmlFor="justify-items">Justify Items:</label>
              <select
                id="justify-items"
                value={justifyItems}
                onChange={(e) =>
                  handlePropertyChange("justifyItems", e.target.value)
                }
              >
                <option value="stretch">Stretch</option>
                <option value="start">Start</option>
                <option value="end">End</option>
                <option value="center">Center</option>
              </select>
            </div>
            <div className="grid-property">
              <label htmlFor="align-items">Align Items:</label>
              <select
                id="align-items"
                value={alignItems}
                onChange={(e) =>
                  handlePropertyChange("alignItems", e.target.value)
                }
              >
                <option value="stretch">Stretch</option>
                <option value="start">Start</option>
                <option value="end">End</option>
                <option value="center">Center</option>
              </select>
            </div>
          </div>
          <div className="grid-container" style={containerStyle}>
            <div className="grid-item">Item 1</div>
            <div className="grid-item">Item 2</div>
            <div className="grid-item">Item 3</div>
          </div>
        </div>
        <div className="code-container">
          <div className="code-section">
            <pre>{generateHTMLCode()}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridGenerator;
