import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { useState } from "react";
import Results from "./components/Results";

function App() {
  const [inputValue, setInputValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidInput = inputValue.duration >= 0;

  function handleInputChange(inputIdentifier, newValue) {
    if (newValue) {
      setInputValue((preValue) => {
        return {
          ...preValue,
          [inputIdentifier]: +newValue,
        };
      });
    }
  }
  return (
    <>
      <Header />
      <UserInput
        handleInputChange={handleInputChange}
        inputValue={inputValue}
      />
      {!isValidInput && (
        <p className="center">Please enter a duration greater than zero</p>
      )}
      {isValidInput && <Results inputValue={inputValue} />}
    </>
  );
}

export default App;
