import React, { useState } from "react";

type LoginModalProps = {
  onClose: () => void;
};

function LoginModal({ onClose }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Handle login logic with email and password
    // ...

    // Clear form fields
    setEmail("");
    setPassword("");
    setName("");
    setConfirmPassword("");

    // Close the modal
    onClose();
  };

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Hey there !</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          {showSignUp && (
            <>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </>
          )}
          <button type="submit">{showSignUp ? "Sign Up" : "Login"}</button>
        </form>
        <button className="signup-button" onClick={toggleSignUp}>
          {showSignUp ? "Login instead" : "Sign Up"}
        </button>
      </div>
    </div>
  );
}

export default LoginModal;
