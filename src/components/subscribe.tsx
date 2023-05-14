import "../CSS/main.css";
import { useState } from 'react';

function SubscribeForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setIsValid(true);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setIsValid(true);
  };

  const handleSubscribeClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!validateInputs()) {
      setIsValid(false);
      return;
    }
    console.log('Submitting form with name:', name, 'and email:', email);
    await subscribeUser(name, email);
    setSubscribed(true);
    setName('');
    setEmail('');
  };

  const validateInputs = () => {
    const nameRegex = /^[a-zA-Z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return nameRegex.test(name.trim()) && emailRegex.test(email.trim());
  };

  const subscribeUser = async (name: string, email: string) => {
    try {
      const response = await fetch('https://uiboxxapi.netlify.app/.netlify/functions/api/adduser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, email: email}),
      });
      const result = await response.json();
      console.log('API response:', result);
      if (response.ok) {
        console.log('User subscribed successfully!');
        console.log('Name:', name, 'Email:', email);
      } else {
        console.log('Failed to subscribe user.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="sub-form">
        <div className="sub-msg"><p>Stay up-to-date with our latest design releases! </p><p>Subscribe to our website and receive notifications when new designs are uploaded. Don't miss out on our newest and most innovative designs. Join our community of design enthusiasts today!</p></div>
      <form>
        <input type="text" name="name" value={name} onChange={handleNameChange} placeholder="Name" required/>
        <input type="email" name="email" value={email} onChange={handleEmailChange} placeholder="E-mail" required/>
        {isValid ? null : <p>Please enter a valid name and email.</p>}
        <button type="submit" onClick={handleSubscribeClick}>{subscribed && isValid ? 'Sent' : 'Send'}</button>
      </form>
    </div>
  );
}

export default SubscribeForm;
