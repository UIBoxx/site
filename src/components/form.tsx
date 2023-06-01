import "../CSS/main.css";
import { useState } from "react";

function SubForm() {
  const [title, setTitle] = useState("");
  const [textarea1, setTextarea1] = useState("");
  const [textarea2, setTextarea2] = useState("");
  const [textarea3, setTextarea3] = useState("");
  const [authorname, setAuthorname] = useState("");
  const [tags, setTag] = useState("");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
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

  const handleauthorNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAuthorname(event.target.value);
  };

  const handleTagChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAuthorname(event.target.value);
  };
 
  const handleFormClick = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    await Designs(
      title,
      textarea1,
      textarea2,
      textarea3,
      authorname,
      tags,
    );
    setTitle("");
    setTextarea1("");
    setTextarea2("");
    setTextarea3("");
    setAuthorname("");
    setTag("");
  };

  const Designs = async (
    title: string,
    textarea1: string,
    textarea2: string,
    textarea3: string,
    authorname: string,
    tags: string,
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
            tag: tags
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
    <div className="form-body">
      <div className="form-container">
        <h1></h1>
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
            <textarea
              id="textarea1"
              name="textarea1"
              value={textarea1}
              onChange={handletextarea1Change}
            ></textarea>
          </div>
          <div className="htmlForm-content">
            <label htmlFor="textarea2">CSS:</label>
            <textarea
              id="textarea2"
              name="textarea2"
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
          <label htmlFor="tags">Tag:</label>
          <input
            type="text"
            id="tags"
            name="tags"
            required
            value={tags}
            onChange={handleTagChange}
          />
        </div>
        <button type="submit" onClick={handleFormClick}>
          {"Upload"}
        </button>
      </form>
    </div>
    </div>
  );
}

export default SubForm;