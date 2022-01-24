import "./App.css";
import FirstScreen from "./Components/FirstScreen";
import SecondScreen from "./Components/SecondScreen";
import Rules from "./Components/Rules";
import RulesButton from "./Components/RulesButton";
import Score from "./Components/Score";
import { useState } from "react";

const FIRST_SCREEN = "FIRST_SCREEN";
const SECOND_SCREEN = "SECOND_SCREEN";

const App = () => {
  const [showRules, setShowRules] = useState(false);
  const [screenDisplay, setScreenDisplay] = useState(FIRST_SCREEN);
  const [selectedCoin, setSelectedCoin] = useState();
  const [score, setScore] = useState(0);

  const toggleRules = () => {
    setShowRules(!showRules);
  };

  const selectedCoinFromUser = (userCoin) => {
    setSelectedCoin(userCoin);
    setScreenDisplay(SECOND_SCREEN);
  };

  return (
    <main className="background w-screen h-screen relative">
      <Score score={score} />
      {screenDisplay === FIRST_SCREEN && (
        <FirstScreen selectedCoinFromUser={selectedCoinFromUser} />
      )}
      {screenDisplay === SECOND_SCREEN && (
        <SecondScreen
          selectedCoin={selectedCoin}
          score={score}
          setScore={setScore}
          setScreenDisplay={setScreenDisplay}
        />
      )}
      {showRules && <Rules toggleRules={toggleRules} />}
      <RulesButton toggleRules={toggleRules} />
    </main>
  );
};

export default App;
