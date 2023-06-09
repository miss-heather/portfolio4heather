import React, { useState } from 'react';
import '../css/style.css'; // Import the new contact.css file

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showValidation, setShowValidation] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const validateEmail = (email) => {
    // Regex for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setShowValidation(true);
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      return;
    }

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
    setShowValidation(false);
    setEmailError('');
  };

  const handleBlur = () => {
    if ((!name && name !== '') || (!email && email !== '') || (!message && message !== '')) {
      setShowValidation(true);
    }

    if (email && !validateEmail(email)) {
      setEmailError('Invalid email address');
    }
  };

  return (
    <div>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            onBlur={handleBlur}
            className={showValidation && !name ? 'required' : ''}
          />
          {showValidation && !name && <span className="validation-error">Name is required</span>}
        </div>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleBlur}
            className={showValidation && (!email || emailError) ? 'required' : ''}
          />
          {showValidation && !email && (
            <span className="validation-error">Email is required</span>
          )}
          {emailError && <span className="validation-error">{emailError}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            onBlur={handleBlur}
            className={showValidation && !message ? 'required' : ''}
          />
          {showValidation && !message && (
            <span className="validation-error">Message is required</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
