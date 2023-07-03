import React, { useState } from "react";

function NameInputs({ selectedField, handleClick, inputRefs }) {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleSecondNameChange = (event) => {
    setSecondName(event.target.value);
  };
  return (
    <>
      <div
        className={`input-container ${
          selectedField === "firstName"
            ? "show"
            : firstName.length > 0
            ? "changed"
            : ""
        }`}
      >
        <label
          htmlFor="firstName"
          className={
            selectedField === "firstName"
              ? "selected"
              : firstName.length > 0
              ? "changed-label"
              : ""
          }
          aria-label="Vorname"
        >
          Vorname
        </label>
        <div className="first-name-input">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Vorname"
            required
            onClick={() => handleClick("firstName")}
            ref={inputRefs.firstName}
            autoFocus={selectedField === "firstName"}
            aria-label="Vorname Eingabefeld"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
      </div>
      <div
        className={`input-container ${
          selectedField === "secondName"
            ? "show"
            : secondName.length > 0
            ? "changed"
            : ""
        }`}
      >
        <label
          htmlFor="secondName"
          className={
            selectedField === "secondName"
              ? "selected"
              : secondName.length > 0
              ? "changed-label"
              : ""
          }
          aria-label="Nachname"
        >
          Nachname
        </label>
        <div className="second-name-input">
          <input
            type="text"
            name="secondName"
            id="secondName"
            placeholder="Nachname"
            required
            onClick={() => handleClick("secondName")}
            ref={inputRefs.secondName}
            autoFocus={selectedField === "secondName"}
            aria-label="Nachname Eingabefeld"
            value={secondName}
            onChange={handleSecondNameChange}
          />
        </div>
      </div>
    </>
  );
}

export default NameInputs;
