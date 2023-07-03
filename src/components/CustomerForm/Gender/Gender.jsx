import React, { useState } from "react";
import "./Gender.css";
import GenderMale from "./GenderMale/GenderMale";
import GenderFemale from "./GenderFemale/GenderFemale";

function Gender() {
  const [femaleSelected, setFemaleSelected] = useState(false);
  const [maleSelected, setMaleSelected] = useState(false);
  const handleMaleClick = () => {
    setFemaleSelected(false);
    setMaleSelected(true);
  };

  const handleFemaleClick = () => {
    setFemaleSelected(true);
    setMaleSelected(false);
  };

  return (
    <div className="gender-container" aria-label="Geschlecht">
      <GenderFemale
        handleFemaleClick={handleFemaleClick}
        femaleSelected={femaleSelected}
      />
      <GenderMale
        handleMaleClick={handleMaleClick}
        maleSelected={maleSelected}
      />
    </div>
  );
}
export default Gender;
