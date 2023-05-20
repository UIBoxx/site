import "../CSS/main.css";
import { useState } from 'react';
import { Helmet } from "react-helmet";

function contactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setIsValid(true);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setIsValid(true);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSendClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!validateInputs()) {
      setIsValid(false);
      return;
    }
    console.log('Submitting form with name:', name, 'email:', email, 'and message:', message);
    await subscribeUser(name, email, message);
    setSent(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  const validateInputs = () => {
    const nameRegex = /^[a-zA-Z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return nameRegex.test(name.trim()) && emailRegex.test(email.trim());
  };

  const subscribeUser = async (name: string, email: string, message: string) => {
    try {
      const response = await fetch('https://uiboxxapi.netlify.app/.netlify/functions/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, email: email, message: message }),
      });
      const result = await response.json();
      console.log('API response:', result);
      if (response.ok) {
        console.log('User subscribed successfully!');
        console.log('Name:', name, 'Email:', email, 'Message:', message);
      } else {
        console.log('Failed to subscribe user.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="sub-form">
      <Helmet>
        <meta
          name="description"
          content="Contact us for any inquiries or feedback regarding our DSA Algorithm Tutorials & free UI components and designs. We are here to assist you and provide support."
        />
        <meta
          name="keywords"
          content="contact us, DSA algorithm tutorials, free UI, free App designs, free web UI, inquiries, feedback, support"
        />
        <title>Contact Us | UIBoxx.in</title>
      </Helmet>
      <div className="form-wrapper">
      <div className="banner-title"><h1>Contact Form</h1></div>
      <form>
        <input type="text" name="name" value={name} onChange={handleNameChange} placeholder="Name" required/>
        <input type="email" name="email" value={email} onChange={handleEmailChange} placeholder="E-mail" required/>
        <textarea name="message" value={message} onChange={handleMessageChange} placeholder="Message" required></textarea>
        {isValid ? null : <p>Please enter a valid name and email.</p>}
        <button type="submit" onClick={handleSendClick}>{sent && isValid ? 'Sent' : 'Send'}</button>
      </form>
      </div>
    </div>
  );
}

export default contactForm;
