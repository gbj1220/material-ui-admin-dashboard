import { useState } from "react";
import { isEmail } from "validator";

function useEmailHooks() {
  const [input, setInput] = useState("");
  const [inputError, setInputError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleInputOnChange(e) {
    let inputValue = e.target.value;
    let inputName = e.target.name;
    setInput(inputValue);

    if (inputValue.length > 0 && !isEmail(inputValue)) {
      setInputError(true);
      setErrorMessage(`${inputName} must be in email format.`);
    } else {
      setInputError(false);
      setErrorMessage("");
    }
  }

  return [input, handleInputOnChange, inputError, errorMessage];
}
export default useEmailHooks;
