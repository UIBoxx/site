import "../CSS/main.css";
import { useState } from "react";

function contactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [sending, setSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setIsValid(true);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setIsValid(true);
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };

  const handleSendClick = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (!validateInputs()) {
      setIsValid(false);
      return;
    }
    console.log(
      "Submitting form with name:",
      name,
      "email:",
      email,
      "and message:",
      message
    );
    setSending(true);
    await subscribeUser(name, email, message);
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
    setSuccessMessage("Your message sent successfully");
    setTimeout(() => {
      setSuccessMessage("");
      setSent(false);
    }, 3000);
  };

  const validateInputs = () => {
    const nameRegex = /^[a-zA-Z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return nameRegex.test(name.trim()) && emailRegex.test(email.trim());
  };

  const subscribeUser = async (
    name: string,
    email: string,
    message: string
  ) => {
    try {
      const response = await fetch(
        "https://uiboxxapi.netlify.app/.netlify/functions/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: name, email: email, message: message }),
        }
      );
      const result = await response.json();
      console.log("API response:", result);
      if (response.ok) {
        console.log("Name:", name, "Email:", email, "Message:", message);
      } else {
        console.log("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
    }
    setSending(false);
  };

  return (
    <div className="sub-form">
      <div className="form-wrapper">
        <form>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="E-mail"
            required
          />
          <textarea
            name="message"
            value={message}
            onChange={handleMessageChange}
            placeholder="Message"
            required
          ></textarea>
          <button type="submit" onClick={handleSendClick}>
            {sending ? "Sending" : sent && isValid ? "Sent" : "Send"}
          </button>
          {isValid ? null : <p>Please enter a valid name and email.</p>}
          {successMessage && <p>{successMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default contactForm;
