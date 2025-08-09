import { useState } from "react";
import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable";
import UserInput from "./components/UserInput";

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  const handleValueChange = function (type, newValue) {
    setUserInputs((ui) => {
      return { ...ui, [type]: newValue };
    });
  };

  return (
    <main>
      <Header />
      <section id="user-input">
        <div className="input-group">
          <UserInput
            type={"initialInvestment"}
            text="initial investment"
            value={userInputs.initialInvestment}
            onValueChange={handleValueChange}
          />
          <UserInput
            type={"annualInvestment"}
            text="annual investment"
            value={userInputs.annualInvestment}
            onValueChange={handleValueChange}
          />
        </div>
        <div className="input-group">
          <UserInput
            type={"expectedReturn"}
            text="expected return"
            value={userInputs.expectedReturn}
            onValueChange={handleValueChange}
          />
          <UserInput
            type={"duration"}
            text="duration"
            value={userInputs.duration}
            onValueChange={handleValueChange}
          />
        </div>
      </section>

      <ResultsTable userInputs={userInputs} />
    </main>
  );
}

export default App;
