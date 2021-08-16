import { useState } from "react";

const useInput = (validation) => {
  // State
  const [input, setInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validation(input);
  const isInvalid = !isValid && isTouched;

  const valueChangeHandler = (e) => {
    setIsTouched(true);
    setInput(e.target.value);
  };

  const valueBlurHandler = () => {
    setIsTouched(true);
  };

  return {
    input,
    setInput,
    isTouched,
    setIsTouched,
    isValid,
    isInvalid,
    valueChangeHandler,
    valueBlurHandler,
  };
};

export default useInput;
