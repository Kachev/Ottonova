import React from "react";
import "./GenderMale.css";
function GenderMale({ handleMaleClick, maleSelected }) {
  return (
    <label
      className={`gender male ${maleSelected ? "selected" : ""}`}
      htmlFor="gender-male"
      role="button"
      aria-label="Männliches Geschlecht"
    >
      <input
        className="input-gender-male"
        type="radio"
        name="gender"
        id="gender-male"
        checked={maleSelected}
        onChange={handleMaleClick}
      />
      <div className="gender-radio-button">
        <div className="male-wrapper">
          <div className="male-body-top">
            <div className="male-arm-left"></div>
            <div className="male-arm-right"></div>
          </div>
          <div className="male-body-bottom">
            <div className="male-leg-left"></div>
            <div className="male-leg-right"></div>
          </div>
        </div>
      </div>
    </label>
  );
}
export default GenderMale;
