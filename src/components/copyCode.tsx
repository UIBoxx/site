import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import parserHtml from "prettier/parser-html";
import parserCss from "prettier/parser-postcss";
import parserBabel from "prettier/parser-babel";
import Clipboard from "clipboard";
import * as prettier from "prettier";

import "../CSS/main.css";

interface CodeBlockProps {
  language: string;
  code: string;
}

function CodeBlock({ language, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const clipboard = new Clipboard(".copy-btn", {
      text: () => code,
    });
    clipboard.on("success", () => {
      setCopied(true);
      clipboard.destroy();
    });
    clipboard.on("error", () => {
      clipboard.destroy();
    });
  };

  let plugins: prettier.Plugin[] = [];

  if (language === "html") {
    plugins = [parserHtml];
  } else if (language === "css") {
    plugins = [parserCss];
  } else if (language === "javascript" || language === "jsx") {
    plugins = [parserBabel];
  }

  return (
    <div className="code-block">
      <div className="copy-btn-container">
        <span></span>
        <button className="copy-btn" onClick={handleCopy}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <SyntaxHighlighter language={language} style={atomDark}>
        {prettier.format(code, {
          parser: language,
          plugins: plugins,
        })}
      </SyntaxHighlighter>
    </div>
  );
}

interface ExampleComponentProps {
  selectedDesign: { htmlcode: string; csscode: string; jscode: string };
}

function ExampleComponent({ selectedDesign }: ExampleComponentProps) {
  return (
    <div className="code-blocks">
      <h2>HTML</h2>
      <CodeBlock language="html" code={selectedDesign.htmlcode} />
      <h2>CSS</h2>
      <CodeBlock language="css" code={selectedDesign.csscode} />
      {/* {selectedDesign.jscode ? ( */}
        
          <h2>JS</h2>
          <CodeBlock language="javascript" code={selectedDesign.jscode} />
        
      ) 
      {/* : null} */}
    </div>
  );
}

export default ExampleComponent;
