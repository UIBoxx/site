import { useState } from "react";
import axios from "axios";

function UploadForm() {
  const [formState, setFormState] = useState({
    title: "",
    image: "",
    type: "",
    language: "",
    textarea1: "",
    textarea2: "",
    textarea3: "",
    link: "",
    authorname: "",
    authorPic: "",
  });

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormState({ ...formState, type: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    axios
      .post("https://uiboxxapi.netlify.app/.netlify/functions/api/upload", formState)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  return (
    <div className="form-container">
      <form className="upload-form" onSubmit={handleSubmit}>
        <h2>Upload Design</h2>

        <div className="form-head-container">
          <div className="form-content">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              required
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setFormState({ ...formState, title: event.target.value })
              }
            />
          </div>

          <div className="form-content">
            <label htmlFor="image">Demo Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              required
              onChange={(event) =>
                setFormState({ ...formState, image: event.target.value })
              }
            />
          </div>

          <div className="htmlForm-content">
            <label htmlFor="type">Type:</label>
            <select id="type" name="type" required onChange={handleTypeChange}>
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
              onChange={(event) =>
                setFormState({ ...formState, language: event.target.value })
              }
            />
          </div>
        </div>
        {formState.type === "web" ? (
          <div>
            <div className="htmlForm-content">
              <label htmlFor="textarea1">HTML:</label>
              <textarea
                id="textarea1"
                name="textarea1"
                required
                onChange={(event) =>
                  setFormState({ ...formState, textarea1: event.target.value })
                }
              ></textarea>
            </div>
            <div className="htmlForm-content">
              <label htmlFor="textarea2">CSS:</label>
              <textarea
                id="textarea2"
                name="textarea2"
                required
                onChange={(event) =>
                  setFormState({ ...formState, textarea2: event.target.value })
                }
              ></textarea>
            </div>
            <div className="htmlForm-content">
              <label htmlFor="textarea3">JS:</label>
              <textarea
                id="textarea3"
                name="textarea3"
                onChange={(event) =>
                  setFormState({ ...formState, textarea3: event.target.value })
                }
              ></textarea>
            </div>
            <div className="link-part">
              <h2>OR</h2>
              <div className="htmlForm-content">
                <label htmlFor="link">Link:</label>
                <input
                  type="text"
                  name="link"
                  id="link"
                  onChange={(event) =>
                    setFormState({ ...formState, link: event.target.value })
                  }
                />
              </div>
            </div>
          </div>
        ) : formState.type === "app" ? (
          <div className="link-part">
            <div className="htmlForm-content">
              <label htmlFor="link">Link:</label>
              <input
                type="text"
                name="link"
                id="link"
                required
                onChange={(event) =>
                  setFormState({ ...formState, link: event.target.value })
                }
              />
            </div>
          </div>
        ) : (
          <p id="type-select">Select type first</p>
        )}

        <div className="form-content">
          <label htmlFor="authorname">Your Name:</label>
          <input
            type="text"
            id="authorname"
            name="authorname"
            required
            onChange={(event) =>
              setFormState({ ...formState, authorname: event.target.value })
            }
          />
        </div>
        <div className="form-content">
          <label htmlFor="authorPic">Your Photo:</label>
          <input
            type="file"
            id="authorPic"
            name="authorPic"
            required
            onChange={(event) =>
              setFormState({ ...formState, authorPic: event.target.value })
            }
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default UploadForm;