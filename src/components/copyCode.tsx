import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import prettier from "prettier/standalone";
import parserHtml from "prettier/parser-html";
import parserCss from "prettier/parser-postcss";
import Clipboard from "clipboard";

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
          plugins: language === "html" ? [parserHtml] : [parserCss],
        })}
      </SyntaxHighlighter>
    </div>
  );
}

interface ExampleComponentProps {
  selectedDesign: { htmlcode: string; csscode: string };
}

function ExampleComponent({ selectedDesign }: ExampleComponentProps) {
  return (
    <div className="code-blocks">
      <h2>HTML</h2>
      <CodeBlock language="html" code={selectedDesign.htmlcode} />
      <h2>CSS</h2>
      <CodeBlock language="css" code={selectedDesign.csscode} />
    </div>
  );
}

export default ExampleComponent;
