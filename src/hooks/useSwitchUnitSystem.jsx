import { useState } from "react";
// TODO: Check if this custom hook would actually work.

const useSwitchUnitSystem = () => {
  const [unit, setUnit] = useState("Kg");

  const switchUnit = () => {
    if (unit === "Kg") {
      setUnit("Lb");
    } else {
      setUnit("Kg");
    }
  };

  const [decimal, setDecimal] = useState(",");

  const switchDecimal = () => {
    if (decimal === ",") {
      setDecimal(".");
    } else {
      setDecimal(",");
    }
  };

  const switchUnitSystem = () => {
    switchUnit();
    switchDecimal();
  };

  return { unit, decimal, switchUnitSystem };
};

export default useSwitchUnitSystem;
