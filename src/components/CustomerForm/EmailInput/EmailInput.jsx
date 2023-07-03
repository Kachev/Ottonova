import React, { useState } from "react";

function EmailInput({ selectedField, handleClick, inputRef, autoFocus }) {
  const [email, setEmail] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div
      className={`input-container ${
        selectedField === "email" ? "show" : email.length > 0 ? "changed" : ""
      }`}
    >
      <label
        htmlFor="email"
        className={
          selectedField === "email"
            ? "selected"
            : email.length > 0
            ? "changed-label"
            : ""
        }
        aria-label="Email"
      >
        Email
      </label>
      <div className="email">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
          onClick={() => handleClick("email")}
          ref={inputRef}
          autoFocus={autoFocus}
          value={email}
          onChange={handleEmailChange}
          aria-label="Email Eingabefeld"
        />
      </div>
    </div>
  );
}

export default EmailInput;
