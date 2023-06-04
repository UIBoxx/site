import { useState } from 'react';
import "../CSS/main.css";

interface DesignDetailsProps {
  selectedDesign: {
    htmlcode: string;
    csscode: string;
    jscode: string;
    head: string;
    authorname: string;
    tags: string[];
  };
}

function DesignDetails({ selectedDesign }: DesignDetailsProps) {
  const [htmlCode, setHtmlCode] = useState(selectedDesign.htmlcode);
  const [cssCode, setCssCode] = useState(selectedDesign.csscode);
  const [jsCode, setJsCode] = useState(selectedDesign.jscode);
  const [headCode, setHeadCode] = useState(selectedDesign.head);

  const [copyStatus, setCopyStatus] = useState({
    textarea1: false,
    textarea2: false,
    textarea3: false,
    textarea4: false
  });

  const handleCopy = (event: React.MouseEvent<HTMLButtonElement>, textareaId: string) => {
    event.preventDefault();
    const textarea = document.getElementById(textareaId) as HTMLTextAreaElement;
    if (textarea) {
      textarea.select();
      document.execCommand('copy');
      textarea.setSelectionRange(0, 0); // Remove the selection
      setCopyStatus((prevCopyStatus) => ({
        ...prevCopyStatus,
        [textareaId]: true
      }));
      setTimeout(() => {
        setCopyStatus((prevCopyStatus) => ({
          ...prevCopyStatus,
          [textareaId]: false
        }));
      }, 1500);
    }
  };

  return (
    <>
      <div className="form-body">
        <div className="form-container">
          <div className="preview-head">
            <h1></h1>

            <div className="design-preview">
              <iframe
                title="HTML/CSS/JS Demo"
                srcDoc={`<html>
                <head>
                  <style>
                  * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                  }
                  body{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 400px;
                  } 
                  ::-webkit-scrollbar {
                    display: none
                  }
                  ${cssCode}
                  </style>
                    <link
                      rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
                      integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
                      crossorigin="anonymous"
                      referrerpolicy="no-referrer"
                    />
                    ${headCode ? headCode : ""}
                    </head>
                    <body>
                      <script>
                        // Prevent navigation
                        document.addEventListener('click', (event) => {
                          if (event.target.tagName === 'A') {
                            event.preventDefault();
                          }
                        });
                  </script>
                  ${htmlCode}
                  <script>${jsCode}</script>
                </body>
              </html>`}
                sandbox="allow-scripts allow-same-origin allow-modals allow-popups allow-forms"
              />
            </div>
            <div className="form-content">
              <label htmlFor="authorname">Design By:</label>
              <span id="Printer-span">{selectedDesign.authorname ? selectedDesign.authorname.substring(0, selectedDesign.authorname.indexOf("@")) : "Anonymous"}</span>
            </div>
          </div>
          <form className="upload-form">
            <div>
              <div className="htmlForm-content">
                <label htmlFor="textarea1">HTML:</label>
                <textarea
                  id="textarea1"
                  name="textarea1"
                  value={htmlCode}
                  onChange={(event) => setHtmlCode(event.target.value)}
                ></textarea>
                <button
                  id="copy-button"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleCopy(event, 'textarea1')}
                >
                  {copyStatus.textarea1 ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="htmlForm-content">
                <label htmlFor="textarea2">CSS:</label>
                <textarea
                  id="textarea2"
                  name="textarea2"
                  value={cssCode}
                  onChange={(event) => setCssCode(event.target.value)}
                ></textarea>
                <button
                  id="copy-button"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleCopy(event, 'textarea2')}
                >
                  {copyStatus.textarea2 ? 'Copied!' : 'Copy'}
                </button>
              </div>
              {selectedDesign.jscode ?
                <div className="htmlForm-content">
                  <label htmlFor="textarea3">JavaScript:</label>
                  <textarea
                    id="textarea3"
                    name="textarea3"
                    value={jsCode}
                    onChange={(event) => setJsCode(event.target.value)}
                  ></textarea>
                  <button
                    id="copy-button"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleCopy(event, 'textarea3')}
                  >
                    {copyStatus.textarea3 ? 'Copied!' : 'Copy'}
                  </button>
                </div> : null
              }
              {selectedDesign.head ?
                <div className="htmlForm-content">
                  <label htmlFor="textarea4">CDN:</label>
                  <textarea
                    id="textarea4"
                    style={{ height: "100px" }}
                    name="textarea4"
                    value={headCode}
                    onChange={(event) => setHeadCode(event.target.value)}
                  ></textarea>
                  <button
                    id="copy-button"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleCopy(event, 'textarea4')}
                  >
                    {copyStatus.textarea4 ? 'Copied!' : 'Copy'}
                  </button>
                </div> : null
              }
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default DesignDetails;
