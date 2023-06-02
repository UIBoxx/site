import React, { useState } from "react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

type LoginModalProps = {
  onClose: () => void;
  onLoginSuccess: (username: string) => void;
};

function LoginModal({ onClose, onLoginSuccess }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signupError, setSignupError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

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

  const validateEmail = () => {
    if (!emailPattern.test(email)) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Invalid email address",
      }));
      return false;
    }
    setErrors((prevState) => ({ ...prevState, email: "" }));
    return true;
  };

  const validatePassword = () => {
    if (!passwordPattern.test(password)) {
      setErrors((prevState) => ({
        ...prevState,
        password:
          "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.",
      }));
      return false;
    }
    setErrors((prevState) => ({ ...prevState, password: "" }));
    return true;
  };

  const validateName = () => {
    if (name.trim() === "") {
      setErrors((prevState) => ({
        ...prevState,
        name: "Name is required",
      }));
      return false;
    }
    setErrors((prevState) => ({ ...prevState, name: "" }));
    return true;
  };

  const validateConfirmPassword = () => {
    if (password !== confirmPassword) {
      setErrors((prevState) => ({
        ...prevState,
        confirmPassword: "Passwords do not match",
      }));
      return false;
    }
    setErrors((prevState) => ({ ...prevState, confirmPassword: "" }));
    return true;
  };

  const handleSignup = async () => {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isNameValid = validateName();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (
      !isEmailValid ||
      !isPasswordValid ||
      !isNameValid ||
      !isConfirmPasswordValid
    ) {
      return;
    }

    try {
      const response = await fetch("https://uiboxxapi.netlify.app/.netlify/functions/api//users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
      });

      if (response.ok) {
        console.log("Signup successful!");
        setSignUpSuccess(true);
      } else {
        const data = await response.json();
        setSignupError(data.error || "Signup failed");
        setTimeout(() => {
          setSignupError("");
        }, 5000);
      }
    } catch (error) {
      console.error(error);
      setSignupError("Error occurred during signup");
      setTimeout(() => {
        setSignupError("");
      }, 5000);
    }
  };

  const handleLogin = async () => {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    try {
      const response = await fetch("https://uiboxxapi.netlify.app/.netlify/functions/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log("Login successful!");
        setLoginSuccess(true);
        onLoginSuccess(email);
        window.location.reload();
      } else {
        const data = await response.json();
        setLoginError(data.error || "Invalid credentials");
        setTimeout(() => {
          setLoginError("");
        }, 5000);
      }
    } catch (error) {
      console.error(error);
      setLoginError("Error occurred during login");
      setTimeout(() => {
        setLoginError("");
      }, 5000);
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (showSignUp) {
      handleSignup();
    } else {
      handleLogin();
    }

    // Clear form fields
    setEmail("");
    setPassword("");
    setName("");
    setConfirmPassword("");
  };

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
    setSignUpSuccess(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Hey there!</h2>
        {signUpSuccess ? (
          <div>
            <p>Signup successful! You can now log in.</p>
          </div>
        ) : loginSuccess ? (
          <div>
            <p>Login successful!</p>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            {errors.email && <span>{errors.email}</span>}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            {errors.password && <span>{errors.password}</span>}
            {showSignUp && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={handleNameChange}
                />
                {errors.name && <span>{errors.name}</span>}
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                {errors.confirmPassword && (
                  <span>{errors.confirmPassword}</span>
                )}
              </>
            )}
            <button type="submit">{showSignUp ? "Sign Up" : "Login"}</button>
          </form>
        )}
        <p style={{ color: "red" }}>{signupError && <span>{signupError}</span>}</p>
        <p style={{ color: "red" }}>{loginError && <span>{loginError}</span>}</p>

        <button className="signup-button" onClick={toggleSignUp}>
          {showSignUp ? "Login instead" : "Sign Up"}
        </button>
      </div>
    </div>
  );
}

export default LoginModal;
