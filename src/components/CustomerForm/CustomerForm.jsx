import React, { useEffect, useRef, useState, useMemo } from "react";
import "./CustomerForm.css";
import Gender from "./Gender/Gender.jsx";
import NameInputs from "./NameInput/NameInputs";
import EmailInput from "./EmailInput/EmailInput";
import TelephoneInput from "./TelephoneInput/TelephoneInput";

function CustomerForm() {
  const [selectedField, setSelectedField] = useState(null);
  const firstNameRef = useRef(null);
  const secondNameRef = useRef(null);
  const emailRef = useRef(null);
  const telephoneRef = useRef(null);

  const handleClick = (fieldName) => {
    setSelectedField(fieldName);
  };

  const inputRefs = useMemo(
    () => ({
      firstName: firstNameRef,
      secondName: secondNameRef,
      email: emailRef,
      telephone: telephoneRef,
    }),
    []
  );

  useEffect(() => {
    if (selectedField) {
      const ref = inputRefs[selectedField];
      ref.current.focus();
    }
  }, [selectedField, inputRefs]);

  return (
    <form>
      <div className="headline-container">
        <h2>Kontaktdaten</h2>
      </div>
      <Gender />
      <div className="form-container">
        <NameInputs
          selectedField={selectedField}
          handleClick={handleClick}
          inputRefs={inputRefs}
          
        />
        <EmailInput
          selectedField={selectedField}
          handleClick={handleClick}
          inputRef={inputRefs.email}
          autoFocus={selectedField === "email"}
        />
        <TelephoneInput
          selectedField={selectedField}
          handleClick={handleClick}
          inputRef={inputRefs.telephone}
          autoFocus={selectedField === "telephone"}
        />
      </div>
    </form>
  );
}

export default CustomerForm;
