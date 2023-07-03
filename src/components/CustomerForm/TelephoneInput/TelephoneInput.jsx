import React, { useState } from "react";

function TelephoneInput({ selectedField, handleClick, inputRef, autoFocus }) {
  const [telephone, setTelephone] = useState("");
  const handleTelephoneChange = (event) => {
    setTelephone(event.target.value);
  };

  return (
    <div
      className={`input-container ${
        selectedField === "telephone"
          ? "show"
          : telephone.length > 0
          ? "changed"
          : ""
      }`}
    >
      <label
        htmlFor="telephone"
        className={
          selectedField === "telephone"
            ? "selected"
            : telephone.length > 0
            ? "changed-label"
            : ""
        }
        aria-label="Telephonnummer (Mobil)"
      >
        Telefonnummer (Mobil)
      </label>
      <div className="telephone">
        <input
          type="tel"
          name="telephone"
          id="telephone"
          placeholder="+4923478945678"
          pattern="(\+49\d{3}\d{8,8}|\d{4}\d{8,8})"
          required
          onClick={() => handleClick("telephone")}
          ref={inputRef}
          autoFocus={autoFocus}
          aria-label="Telefonnummer (Mobil) Eingabefeld"
          value={telephone}
          onChange={handleTelephoneChange}
        />
      </div>
    </div>
  );
}

export default TelephoneInput;
