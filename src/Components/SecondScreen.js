import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";
import { useState, useEffect } from "react";

const SecondScreen = ({ selectedCoin }) => {
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

  useEffect(() => {
    const timer = setTimeout(() => setIsTimerOver(true), 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  //const calculateScore = () => {};

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
            coins[Math.floor(Math.random() * coins.length)]
          ) : (
            <div className="dummy h-[20vh] w-[20vh] rounded-full bg-gray-900"></div>
          )}

          <h1 className="text-white mt-8 text-[2vh]">THE HOUSE PICKED</h1>
        </div>
      </div>
      <div className="mt-20 text-center">
        <h1 className="text-white text-[6vh]">YOU LOSE</h1>
        <button className="mt-4 px-[10vh] py-[1vh] bg-white tracking-wider text-[3vh]">
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
};

export default SecondScreen;
