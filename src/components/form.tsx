import "../CSS/main.css";
import { useState } from "react";

function SubForm() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [language, setLanguage] = useState("");
  const [textarea1, setTextarea1] = useState("");
  const [textarea2, setTextarea2] = useState("");
  const [textarea3, setTextarea3] = useState("");
  const [link, setLink] = useState("");
  const [authorname, setAuthorname] = useState("");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(event.target.value);
  };

  const handletextarea1Change = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextarea1(event.target.value);
  };

  const handletextarea2Change = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextarea2(event.target.value);
  };

  const handletextarea3Change = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextarea3(event.target.value);
  };

  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value);
  };

  const handleauthorNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAuthorname(event.target.value);
  };

 
  const handleFormClick = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    console.log(
      "Submitting form with title:",
      title,
      "and image:",
      image,
      type,
      language,
      link,
      authorname,
    );
    await Designs(
      title,
      image,
      type,
      language,
      textarea1,
      textarea2,
      textarea3,
      link,
      authorname,
    );
    setTitle("");
    setImage("");
    setType("");
    setLanguage("");
    setTextarea1("");
    setTextarea2("");
    setTextarea3("");
    setLink("");
    setAuthorname("");
  };

  const Designs = async (
    title: string,
    image: string,
    type: string,
    language: string,
    textarea1: string,
    textarea2: string,
    textarea3: string,
    link: string,
    authorname: string,
  ) => {
    try {
      const response = await fetch(
        "https://uiboxxapi.netlify.app/.netlify/functions/api/uploaddata",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: title,
            image: image,
            type: type,
            language: language,
            textarea1: textarea1,
            textarea2: textarea2,
            textarea3: textarea3,
            link: link,
            authorname: authorname,
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
  };



  return (
    <div className="form-container">
      <form className="upload-form">
        <h2>Upload Design</h2>
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

          <div className="form-content">
            <label htmlFor="image">Demo Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
            />
          </div>

          <div className="htmlForm-content">
            <label htmlFor="type">Type:</label>
            <select
              id="type"
              name="type"
              required
              onChange={handleTypeChange}
              value={type}
            >
              <option value="">Select Type</option>
              <option value="web">Web</option>
              <option value="app">App</option>
            </select>
          </div>
          <div className="htmlForm-content">
            <label htmlFor="language">Language:</label>
            <input
              type="text"
              id="language"
              name="language"
              placeholder="HTML/CSS,.."
              required
              value={language}
              onChange={handleLanguageChange}
            />
          </div>
        </div>
        <div>
          <div className="htmlForm-content">
            <label htmlFor="textarea1">HTML:</label>
            <textarea
              id="textarea1"
              name="textarea1"
              required
              value={textarea1}
              onChange={handletextarea1Change}
            ></textarea>
          </div>
          <div className="htmlForm-content">
            <label htmlFor="textarea2">CSS:</label>
            <textarea
              id="textarea2"
              name="textarea2"
              required
              value={textarea2}
              onChange={handletextarea2Change}
            ></textarea>
          </div>
          <div className="htmlForm-content">
            <label htmlFor="textarea3">JavaScript:</label>
            <textarea
              id="textarea3"
              name="textarea3"
              value={textarea3}
              onChange={handletextarea3Change}
            ></textarea>
          </div>
          <div className="link-part">
            <h2>OR</h2>
            <div className="htmlForm-content">
              <label htmlFor="link">Link to code:</label>
              <input
                type="text"
                name="link"
                id="link"
                placeholder="github,..."
                value={link}
                onChange={handleLinkChange}
              />
            </div>
          </div>
        </div>
        <div className="form-content">
          <label htmlFor="authorname">Author Name:</label>
          <input
            type="text"
            id="authorname"
            name="authorname"
            required
            value={authorname}
            onChange={handleauthorNameChange}
          />
        </div>
        <button type="submit" onClick={handleFormClick}>
          {"Upload"}
        </button>
      </form>
    </div>
  );
}

export default SubForm;