import { useState } from "react";
import { matches } from "validator";

function useInputHooks() {
  const [input, setInput] = useState("");
  const [inputError, setInputError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleInputOnChange(e) {
    let inputValue = e.target.value;
    let inputName = e.target.name;
    setInput(inputValue);

    let checkInputNameAndUseReGexAccordingly;
    let errMessage;
    if (inputName === "First Name" || inputName === "Last Name") {
      checkInputNameAndUseReGexAccordingly = /[!@#$%^&*()\[\],.?":;{}|<>1234567890]/g;

      errMessage = `${inputName} cannot have any numbers or special characters.`;
    } else {
      checkInputNameAndUseReGexAccordingly = /[!@#$%^&*()\[\],.?":;{}|<>]/g;
      errMessage = `${inputName} cannot have any special characters.`;
    }
    if (matches(inputValue, checkInputNameAndUseReGexAccordingly)) {
      setInputError(true);
      setErrorMessage(errMessage);
    } else {
      setInputError(false);
      setErrorMessage("");
    }
  }

  return [input, handleInputOnChange, inputError, errorMessage];
}

export default useInputHooks;
