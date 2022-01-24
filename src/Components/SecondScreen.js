import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";
import { useState, useEffect, useRef } from "react";

const SecondScreen = ({ selectedCoin, score, setScore, setScreenDisplay }) => {
  const [isTimerOver, setIsTimerOver] = useState(false);
  const coins = [
    <Rock />,
    <Paper />,
    <Scissors />,
    <Rock />,
    <Paper />,
    <Scissors />,
    <Rock />,
    <Paper />,
    <Scissors />,
    <Rock />,
    <Paper />,
    <Scissors />,
    <Rock />,
    <Paper />,
    <Scissors />,
    <Rock />,
    <Paper />,
    <Scissors />,
    <Rock />,
    <Paper />,
    <Scissors />,
    <Rock />,
    <Paper />,
    <Scissors />,
  ];
  const i = useRef(0);
  const [playAgain, setPlayAgain] = useState("invisible");
  const [lastMessage, setLastMessage] = useState("YOU WIN");

  useEffect(() => {
    const timer = setTimeout(startGame, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const startGame = () => {
    i.current = Math.floor(Math.random() * coins.length);
    setIsTimerOver(true);
    calculateScore(i.current);
  };

  const calculateScore = (index) => {
    if (index % 3 === 0) {
      if (selectedCoin === "ROCK") setLastMessage("DRAW");
      else if (selectedCoin === "PAPER") {
        setLastMessage("YOU WIN");
        setScore(score + 1);
      } else if (selectedCoin === "SCISSORS") {
        setLastMessage("YOU LOSE");
        setScore(score < 1 ? 0 : score - 1);
      }
    } else if (index % 3 === 1) {
      if (selectedCoin === "ROCK") {
        setLastMessage("YOU LOSE");
        setScore(score < 1 ? 0 : score - 1);
      } else if (selectedCoin === "PAPER") setLastMessage("DRAW");
      else if (selectedCoin === "SCISSORS") {
        setLastMessage("YOU WIN");
        setScore(score + 1);
      }
    } else if (index % 3 === 2) {
      if (selectedCoin === "ROCK") {
        setLastMessage("YOU WIN");
        setScore(score + 1);
      } else if (selectedCoin === "PAPER") {
        setLastMessage("YOU LOSE");
        setScore(score < 1 ? 0 : score - 1);
      } else if (selectedCoin === "SCISSORS") setLastMessage("DRAW");
    }

    setPlayAgain("visible");
  };

  return (
    <div className="h-full w-full flex items-center justify-center flex-col">
      <div className="flex justify-center items-center gap-12">
        <div className="flex flex-col items-center pointer-events-none">
          {selectedCoin === "ROCK" && <Rock />}
          {selectedCoin === "PAPER" && <Paper />}
          {selectedCoin === "SCISSORS" && <Scissors />}
          <h1 className="text-white mt-8 text-[2vh]">YOU PICKED</h1>
        </div>
        <div className="flex flex-col items-center pointer-events-none">
          {isTimerOver ? (
            coins[i.current]
          ) : (
            <div className="h-[20vh] w-[20vh] rounded-full bg-black relative">
              <div className="dummy" />
            </div>
          )}

          <h1 className="text-white mt-8 text-[2vh]">THE HOUSE PICKED</h1>
        </div>
      </div>
      <div className={"mt-[6vh] text-center " + playAgain}>
        <h1 className="text-white text-[6vh]">{lastMessage}</h1>
        <button
          className="mt-4 px-[10vh] py-[1vh] bg-white tracking-wider text-[3vh] text-Dark-Text"
          onClick={() => setScreenDisplay("FIRST_SCREEN")}
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
};

export default SecondScreen;
