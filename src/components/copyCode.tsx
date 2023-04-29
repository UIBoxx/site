import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import prettier from "prettier/standalone";
import parserHtml from "prettier/parser-html";
import parserCss from "prettier/parser-postcss";
import parserBabel from "prettier/parser-babel";
import Clipboard from "clipboard";

import "../CSS/main.css";
import { Parser } from "prettier";

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

  let plugins:
    | {
        parsers: {
          html: Parser<any>;
          angular: Parser<any>;
          vue: Parser<any>;
          lwc: Parser<any>;
        };
      }[]
    | { parsers: { css: Parser<any>; less: Parser<any>; scss: Parser<any> } }[]
    | {
        parsers: {
          babel: Parser<any>;
          "babel-flow": Parser<any>;
          "babel-ts": Parser<any>;
          json: Parser<any>;
          json5: Parser<any>;
          "json-stringify": Parser<any>;
          __js_expression: Parser<any>;
          __vue_expression: Parser<any>;
          __vue_event_binding: Parser<any>;
        };
      }[] = [];
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
      {selectedDesign.jscode ? (
        <>
          <h2>JS</h2>
          <CodeBlock language="javascript" code={selectedDesign.jscode} />
        </>
      ) : null}
    </div>
  );
}

export default ExampleComponent;
