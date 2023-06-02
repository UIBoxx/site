import "../CSS/main.css";
import { useEffect, useState } from "react";

function SubForm() {
  const [title, setTitle] = useState("");
  const [textarea1, setTextarea1] = useState("");
  const [textarea2, setTextarea2] = useState("");
  const [textarea3, setTextarea3] = useState("");
  const [authorname, setAuthorname] = useState("");
  const [tags, setTag] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [generatedHTML, setGeneratedHTML] = useState("");
  const [isValid, setIsValid] = useState(true);


  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");



  useEffect(() => {
    // Check if the user is already logged in
    const storedUsername = localStorage.getItem("username");
    setIsLoggedIn(!!storedUsername);
    setUsername(storedUsername || "");
    setAuthorname(storedUsername || "");
  }, []);

  

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setIsValid(true);
  };

  const handletextarea1Change = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea1(event.target.value);
    setIsValid(true);
    generateHTML(event.target.value, textarea2, textarea3);
  };
  
  const handletextarea2Change = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea2(event.target.value);
    setIsValid(true);
    generateHTML(textarea1, event.target.value, textarea3);
  };
  
  const handletextarea3Change = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea3(event.target.value);
    setIsValid(true);
    generateHTML(textarea1, textarea2, event.target.value);
  };
  

  const handleauthorNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAuthorname(event.target.value);
  };

  const handleTagChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTag(event.target.value);
  };


  const validateInputs = () => {
    const nameRegex = /^[a-zA-Z ]+$/;
    return nameRegex.test(title.trim()) && textarea1.trim() === "" &&  textarea2.trim() === "" &&  textarea3.trim() === "";
  };

  const generateHTML = (html: string, css: string, js: string) => {
    const generatedHTML = `
    <html>
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
      ${css}
      </style>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
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
      ${html}
      <script>${js}</script>
    </body>
  </html>
    `;
    setGeneratedHTML(generatedHTML);
  };
  


  const handleFormClick = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    // Check if the user is logged in
    if (!validateInputs()) {
      setIsValid(false);
      return;
    }

    if (!isLoggedIn) {
      return;
    }
    setSending(true);
    await Designs(title, textarea1, textarea2, textarea3, authorname, tags);
    setSent(true);
    setTitle("");
    setTextarea1("");
    setTextarea2("");
    setTextarea3("");
    setTag("");
    setSuccessMessage("Your design submitted for review successfully");
    setTimeout(() => {
      setSuccessMessage("");
      setSent(false);
    }, 3000);
  };

  const Designs = async (
    title: string,
    textarea1: string,
    textarea2: string,
    textarea3: string,
    authorname: string,
    tags: string
  ) => {
    try {
      const response = await fetch(
        "https://uiboxxapi.netlify.app/.netlify/functions/api/uploaddata",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: title,
            textarea1: textarea1,
            textarea2: textarea2,
            textarea3: textarea3,
            authorname: authorname,
            tags: tags,
          }),
        }
      );
      const result = await response.json();
      console.log("API response:", result);
      if (response.ok) {
        console.log("added successfully!");
      } else {
        console.log("Failed to add.");
      }
    } catch (error) {
      console.error(error);
    }
    setSending(false);
  };

  // Render the form only if the user is logged in
  if (!isLoggedIn) {
    return (
      <>
        <div style={{ color: "red", margin: "20vh 40px" }}>
          You need to login first!
        </div>
      </>
    );
  }

  return (
    <div className="form-body">
      <div className="form-container">
        <div className="preview-head">
        <h1>Preview</h1>
        
        <div className="design-preview">
        <iframe
            title="HTML/CSS/JS Demo"
            srcDoc={generatedHTML}
            sandbox="allow-scripts allow-same-origin allow-modals allow-popups allow-forms"
          />
        </div>
        </div>
        <form className="upload-form">
          <div className="form-head-container">
            <div className="form-content">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={title}
                onChange={handleTitleChange}
              />
            </div>
          </div>
          <div>
            <div className="htmlForm-content">
              <label htmlFor="textarea1">HTML:</label>
              <label id="hint-start">{"<body>"}</label>
              <textarea
                id="textarea1"
                name="textarea1"
                value={textarea1}
                placeholder="<p>Hello World!</p>"
                onChange={handletextarea1Change}
              ></textarea>
              <label id="hint-end">{"</body>"}</label>
            </div>
            <div className="htmlForm-content">
              <label htmlFor="textarea2">CSS:</label>
              <label id="hint-start">{"<style>"}</label>
              <textarea
                id="textarea2"
                name="textarea2"
                value={textarea2}
                placeholder="*{margin: 0; }"
                onChange={handletextarea2Change}
              ></textarea>
              <label id="hint-end">{"</style>"}</label>
            </div>
            <div className="htmlForm-content">
              <label htmlFor="textarea3">JavaScript:</label>
              <label id="hint-start">{"<script>"}</label>
              <textarea
                id="textarea3"
                name="textarea3"
                value={textarea3}
                placeholder="function(){}"
                onChange={handletextarea3Change}
              ></textarea>
              <label id="hint-end">{"</script>"}</label>
            </div>
          </div>
          <div className="form-content">
            <label htmlFor="authorname">Author Name:</label>
            <input
              type="text"
              id="authorname"
              name="authorname"
              readOnly
              value={authorname.substring(0, authorname.indexOf("@"))}
              onChange={handleauthorNameChange}
            />
            <label htmlFor="tags">Tag:</label>
            <select
              id="tags"
              name="tags"
              required
              value={tags}
              onChange={handleTagChange}
            >
                  <option value="">Select a tag</option>
              <option value="others">others</option>
              <option value="input">input</option>
              <option value="button">button</option>
              <option value="card">card</option>
              <option value="navbar">navbar</option>
              <option value="form">form</option>
              <option value="icon">icon</option>
              <option value="loader">loader</option>
              <option value="box">box</option>
              <option value="switch">switch</option>
              <option value="spinner">spinner</option>
              <option value="backgrounds">backgrounds</option>
            </select>
          </div>
          {isValid ? null : <p style={{color:"red"}}>Please enter a valid content on form field.</p>}
          {<p style={{color:"green"}}>{successMessage}</p>}
          <button type="submit" onClick={handleFormClick}>
          {sending ? "Submitting..." : sent ? "submitted" : "Subimit to review"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SubForm;
