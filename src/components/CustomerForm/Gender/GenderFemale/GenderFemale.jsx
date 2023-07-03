import React from "react";
import "./GenderFemale.css";
function GenderFemale({ handleFemaleClick, femaleSelected }) {
  return (
    <label
      className={`gender female ${femaleSelected ? "selected" : ""}`}
      htmlFor="gender-female"
      role="button"
      aria-label="Weibliches Geschlecht"
    >
      <input
        className="input-gender-female"
        type="radio"
        name="gender"
        id="gender-female"
        checked={femaleSelected}
        onChange={handleFemaleClick}
      />
      <div className="gender-radio-button">
        <div className="female-wrapper">
          <div className="female-body-top">
            <div className="female-arm-left"></div>
            <div className="female-arm-right"></div>
          </div>
          <div className="female-body-bottom">
            <div className="female-leg-left"></div>
            <div className="female-leg-right"></div>
          </div>
        </div>
      </div>
    </label>
  );
}
export default GenderFemale;
